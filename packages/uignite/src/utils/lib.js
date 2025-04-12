import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import components from "../../_components.json";
import elements from "../../_elements";
import codeString from "../../_codeString";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export { components, elements, codeString };
