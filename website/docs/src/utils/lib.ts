import components from '@/../_components.json' with {type: 'json'};
import elements from '@/../_elements';
import codeString from '@/../_codeString';
import {type ClassValue, clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

function getPreviousComponentbyId(compId: string | undefined) {
  if (!compId) return null;
  const currInd: number = components.findIndex((comp) => comp.id === compId);
  if (currInd === 0) {
    return components[components.length - 1].id;
  }

  return components[currInd - 1].id;
}

function getNextComponentbyId(compId: string | undefined) {
  if (!compId) return null;
  const currInd: number = components.findIndex((comp) => comp.id === compId);

  if (currInd == components.length - 1) {
    return components[0].id;
  }
  return components[currInd + 1].id;
}

export {
  components,
  codeString,
  elements,
  getCodeStrById,
  getComponentById,
  getElementByCompId,
  getPreviousComponentbyId,
  getNextComponentbyId,
};
