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

function mapScopeToFilename(content) {
  return {};
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
        const newPath = `registry/default/ui/${filename}.tsx`;
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
          `https://080a-104-28-199-189.ngrok-free.app/r/${name}.json`,
        ],
      }
    );

    const element = results.filter(
      (e) => e.id.toLowerCase().trim() == name.toLowerCase().trim()
    );
    if (element.length > 0) {
      // console.log(
      //   registryItem.registryDependencies.map((item) =>
      //     item.trim().toLowerCase()
      //   )
      // );
      await writeComponentContent(
        `./website/docs/public/r/${element[0].id}-v0.json`,
        {
          ...registryItem,
          name: `${element[0].id}-v0`,
          type: 'registry:component',
          $schema: 'https://ui.shadcn.com/schema/registry-item.json',
          registryDependencies: [
            ...(registryItem.registryDependencies
              ? registryItem.registryDependencies.map((item) =>
                  item.trim().toLowerCase()
                )
              : []),
            `https://080a-104-28-199-189.ngrok-free.app/r/${name}.json`,
          ],
          files: [
            {
              path: `registry/default/components/${element[0].id}-v0.tsx`,
              type: 'registry:component',
              content: `${element[0].scope.map((ele) => `import {${ele}} from \"@/components/ui/${filesWithContent.find((e) => e.filename.toLowerCase() == element[0].id.toLowerCase()).filename}\"`).join('\n')}
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
    /\{\s*id:\s*'([^']*)'\s*,\s*scope:\s*\{([^}]*)\}\s*,\s*extraScopes:\s*\[((?:[^[\]]|\[(?:[^[\]]|\[[^\]]*\])*\])*)\]/g;
  const results = [];

  const inputString = await fs.readFile('./website/docs/_elements.ts', 'utf-8');
  // console.log( inputString)
  let match;
  const abc = regex.exec(inputString);
  // console.log(abc)
  while ((match = regex.exec(inputString)) !== null) {
    // console.log("match" , match)
    const id = match[1];
    const scope = match[2].trim().replaceAll(' ', '').split(',');
    const element = match[3];
    // console.log(id )
    // console.log(scope)
    // console.log(element)

    results.push({id, scope, element});
  }
  console.log(results);

  for (let index = 0; index < registoryConfig['items'].length; index++) {
    const element = registoryConfig['items'][index];
    await register(element['name'], results);
  }
})();
