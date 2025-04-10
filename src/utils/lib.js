import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import components from "../../components";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export { components };
