import fs from 'fs/promises';
import pth from 'path';
import registoryConfig from '../registry.json' with {type: 'json'};

async function readComponentFile(path) {
  try {
    const content = await fs.readFile(path, 'utf-8');
    return content;
  } catch (error) {
    console.error(error);
  }
}

async function writeComponentContent(name, content) {
  try {
    const path = pth.join(content[''], `${name}.json`);
    await fs.writeFile();
  } catch (error) {
    console.error(error);
  }
}

(() => {
  try {
    const items = registoryConfig['items'];
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      const elementSchemaJson = {
        $schema: 'https://ui.shadcn.com/schema/registry-item.json',
        name: element['name'],
        type: element['type'],
        dependencies: element['dependencies'],
        files: element['files'].map(async (value) => {
          const content = await readComponentFile(value['path']);
          if (!content)
            return console.log(
              'Something went wrong during reading file content'
            );
          return {
            content,
            type: value['type'],
            path: value['path'],
          };
        }),
      };
      element['files'].forEach(async (_, idx) => {
        await writeComponentContent(
          `/website/docs/public/r/${element['name']}-${idx}.json`,
          elementSchemaJson
        );
      });
    }
  } catch (error) {
    console.error(`Error occured: ${error.message}`);
  }
})();
