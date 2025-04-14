import components from '../../_components.json' with {type: 'json'};
import elements from '../../_elements';
import codeString from '../../_codeString';

import {type ClassValue, clsx} from 'clsx';
// import components from '../../_components.json';
// import elements from '../../_elements';
// import codeString from '../../_codeString';

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

export {
  components,
  codeString,
  elements,
  getCodeStrById,
  getComponentById,
  getElementByCompId,
};
