const components: any[] = [];
const codeString: any[] = [];
const elements: any[] = [];

function getComponentById(compId: string | undefined) {
  if (!compId) return null;
  return components.find(
    (component) =>
      component.id.trim().toLowerCase() === compId.trim().toLowerCase()
  );
}

function getElementByCompId(compId: string | undefined) {
  if (!compId) return null;
  return elements.find(
    (element) => element.id.trim().toLowerCase() === compId.trim().toLowerCase()
  );
}

function getCodeStrById(compId: string | undefined) {
  if (!compId) return null;
  return codeString.find(
    (codeStr) => codeStr.id.trim().toLowerCase() === compId.trim().toLowerCase()
  );
}

export {
  components,
  codeString,
  elements,
  getCodeStrById,
  getComponentById,
  getElementByCompId,
};
