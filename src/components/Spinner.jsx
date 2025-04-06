import React from "react";
import { cn } from "../utils/lib";
import {useTheme} from '../hooks/theme';
export const Spinner = ({ className = "" }) => {
  const {theme} = useTheme();
  return (
    <div class={cn("flex space-x-2 justify-center items-center ",className)}>
	<div class={`h-3 w-3 ${theme==="dark"?"bg-white":"bg-black"} rounded-full animate-bounce [animation-delay:-0.3s]`}></div>
	<div class={`h-3 w-3 ${theme==="dark"?"bg-white":"bg-black"}  rounded-full animate-bounce [animation-delay:-0.15s]`}></div>
	<div class={`h-3 w-3 ${theme==="dark"?"bg-white":"bg-black"} rounded-full animate-bounce`}></div>
</div>
  );
};
