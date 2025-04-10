import fs from "fs/promises";
import path from "path";
import components from "../_components.json" with { type: "json" };

async function getJSONstringData() {
  const jsonStringParse = [];
  for (let index = 0; index < components.length; index++) {
    const element = components[index];
    try {
      const content = await fs.readFile(
        path.join("../src", element.path),
        "utf-8"
      );
      jsonStringParse.push({
        id: element.id,
        element: content,
      });
    } catch (error) {
      console.error(`Error during writeing component data: ${error.message}`);
    }
  }
  return jsonStringParse;
}

async function main() {
  const jsondata = await getJSONstringData();
  const data = `export default ${JSON.stringify(jsondata)}`;

  await fs.writeFile("../_codeString.jsx", data);
}

main();
