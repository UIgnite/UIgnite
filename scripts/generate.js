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

async function register(name) {
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
        return {...file, content};
      })
    );
    await writeComponentContent(`./website/docs/public/r/${name}.json`, {
      ...registryItem,
      files: filesWithContent,
    });
  } catch (error) {
    console.error('Error processing component request:', error);
  }
}

(async () => {
  for (let index = 0; index < registoryConfig['items'].length; index++) {
    const element = registoryConfig['items'][index];
    await register(element['name']);
  }
})();

/*
async function readComponentFile(path) {
  try {
    const content = await fs.readFile(path, 'utf-8');
    return content.toString();
  } catch (error) {
    console.error(error);
  }
}


(async () => {
  try {
    const items = registoryConfig['items'];
    let fileData = [];
    for (let index = 0; index < items.length; index++) {
      const element = items[index];

      for (let idx = 0; idx < element['files'].length; idx++) {
        const file = element['files'][idx];
        const content = await readComponentFile(file['path']);
        if (!content)
          return console.log(
            'Something went wrong during reading file content'
          );
        fileData.push({
          content,
          type: file['type'],
          path: file['path'],
        });
      }

      const elementSchemaJson = {
        $schema: 'https://ui.shadcn.com/schema/registry-item.json',
        name: element['name'],
        type: element['type'],
        dependencies: element['dependencies'],
        files: fileData,
      };
      fileData = []
      element['files'].forEach(async () => {
        await writeComponentContent(
          `./website/docs/public/r/${element['name']}.json`,
          elementSchemaJson
        );
      });
    }
  } catch (error) {
    console.error(`Error occured: ${error.message}`);
  }
})();
*/
