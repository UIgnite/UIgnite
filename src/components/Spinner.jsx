import React from "react";
import { cn } from "../utils/lib";
export const Spinner = ({ className = "" }) => {
  return (
    <div class={cn("flex space-x-2 justify-center items-center dark:invert",className)}>
	<div class='h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div class='h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div class='h-3 w-3 bg-black rounded-full animate-bounce'></div>
</div>
  );
};
