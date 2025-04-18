import fs from 'fs/promises';
import path from 'path';
import registoryConfig from '../registry.json' with {type: 'json'};
import {registryItemSchema} from 'shadcn/registry';

async function writeComponentContent(path, content) {
  try {
    await fs.writeFile(path, JSON.stringify(content), 'utf-8');
  } catch (error) {
    console.error(error);
  }
}

function getImportsMapByScope(extraScopes) {
  // console.log(scope, extraScopes)
  if (!extraScopes) return ``;
  let currObjMapString = ``;
  for (let i = 0; i < extraScopes.length; i++) {
    let currStr;
    let currFrom = extraScopes[i].from;

    let currScope = '';
    for (let j = 0; j < extraScopes[i].scope.length; j++) {
      if (j == extraScopes[i].scope.length - 1) {
        currScope += extraScopes[i].scope[j];
      } else currScope += extraScopes[i].scope[j] + ', ';
    }

    if (extraScopes[i].isComp) {
      currStr = `import {${currScope}} from '@/components/ui/${currFrom}'\n`;
    } else if (extraScopes[i].isHook) {
      currStr = `import {${currScope}} from '@/hooks/${currFrom}'\n`;
    } else {
      currStr = `import {${currScope}} from '${currFrom}'\n `;
    }

    currObjMapString += currStr;
  }
  // console.log(currObjMapString)
  return currObjMapString;
}

function getRegistryDependencyByScope(extraScopes) {
  let fromString = [];
  if (!extraScopes) return fromString;

  for (let i = 0; i < extraScopes.length; i++) {
    if (extraScopes[i].isComp || extraScopes[i].isHook) {
      let currFrom = extraScopes[i].from.toLowerCase();
      let currFromStr = `https://d278-104-28-199-190.ngrok-free.app/r/${currFrom}.json`;
      fromString.push(currFromStr);
    }
  }
  console.log(fromString);
  return fromString;
}

async function register(name, results) {
  try {
    // Find the component from the registry.
    const component = registoryConfig.items.find((c) => c.name === name);

    // If the component is not found, return a 404 error.
    if (!component) {
      return console.error(`Component not found`);
    }

    // Validate before file operations.
    const registryItem = registryItemSchema.parse(component);

    // If the component has no files, return a 400 error.
    if (!registryItem.files?.length) {
      return console.error('Component has no file');
    }

    // Read all files in parallel.
    const filesWithContent = await Promise.all(
      registryItem.files.map(async (file) => {
        const filePath = path.join(process.cwd(), file.path);
        const content = await fs.readFile(filePath, 'utf8');

        const filename = file.path
          .split('/')
          [file.path.split('/').length - 1].split('.')[0];
        const newPath = `components/ui/${filename}.tsx`;
        return {...file, content, path: newPath, filename};
      })
    );

    // import ...[] from "@/components/ui/"
    // [([Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter] => card), ([Button, ButtonName] => card)]
    // [ Card => card, CardHeader => card, Button => button ]

    await writeComponentContent(
      `./website/docs/public/r/${name.toLowerCase()}.json`,
      {
        ...registryItem,
        $schema: 'https://ui.shadcn.com/schema/registry-item.json',
        files: filesWithContent,
        registryDependencies: [
          ...(registryItem.registryDependencies
            ? registryItem.registryDependencies.map((item) =>
                item.trim().toLowerCase()
              )
            : []),
          `https://d278-104-28-199-190.ngrok-free.app/r/${name}.json`,
        ],
      }
    );

    const element = results.filter(
      (e) => e.id.toLowerCase().trim() == name.toLowerCase().trim()
    );
    if (element.length > 0) {
      await writeComponentContent(
        `./website/docs/public/r/${element[0].id}-v0.json`,
        {
          ...registryItem,
          name: `${element[0].id}-v0`,
          type: 'registry:component',
          $schema: 'https://ui.shadcn.com/schema/registry-item.json',
          registryDependencies: [
            ...(registryItem.registryDependencies
              ? getRegistryDependencyByScope(element[0].extraScopes)
              : []),
          ],
          files: [
            {
              path: `app/page.tsx`,
              type: 'registry:component',
              content: `${element[0].scope.map((ele) => getImportsMapByScope(element[0].extraScopes))}
              function Component(){
                return (${element[0].element})
              }
              export default Component
              `,
            },
          ],
        }
      );
    }
  } catch (error) {
    console.error('Error processing component request:', error);
  }
}

(async () => {
  const regex =
    /\{\s*id:\s*'([^']*)'\s*,\s*scope:\s*\{([^}]*)\}(?:\s*,\s*extraScopes:\s*\[((?:[^[\]]|\[(?:[^[\]]|\[[^\]]*\])*\])*)\])?(?:\s*,\s*variation:\s*\[([^\]]*)\])?\s*,\s*element:\s*`((?:[^`\\]|\\.|\\`|\\$\{(?:[^{}]|\{[^}]*\})*\})*)`/g;
  const results = [];

  const inputString = await fs.readFile('./website/docs/_elements.ts', 'utf-8');
  let match;
  while ((match = regex.exec(inputString)) !== null) {
    const id = match[1];
    const scope = match[2].trim().replaceAll(' ', '').split(',');

    let extraScopes;
    if (match[3]) {
      const cleanedExtraScope = `[${match[3]}]`
        .replace(/(\w+):/g, '"$1":')
        .replace(/'/g, '"')
        .replace(/,\s*([}\]])/g, '$1');
      extraScopes = JSON.parse(cleanedExtraScope);
    }

    results.push({id, scope, extraScopes, element: match[5]});
  }

  for (let index = 0; index < registoryConfig['items'].length; index++) {
    const element = registoryConfig['items'][index];
    await register(element['name'], results);
  }
})();
