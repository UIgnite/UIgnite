import fs from 'fs/promises';
import registoryConfig from '../registry.json' with {type: 'json'};

async function readComponentFile(path) {
  try {
    const content = await fs.readFile(path, 'utf-8');
    return content.toString();
  } catch (error) {
    console.error(error);
  }
}

async function writeComponentContent(path, content) {
  try {
    await fs.writeFile(path, JSON.stringify(content), 'utf-8');
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
