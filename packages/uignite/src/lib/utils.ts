import {type ClassValue, clsx} from 'clsx';
// import components from '../../_components.json';
// import elements from '../../_elements';
// import codeString from '../../_codeString';

import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
