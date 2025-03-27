import React from "react";
import { cn } from "../utils/lib"; // Ensure you have the cn utility

export const Textarea = ({ className, ...props }) => {
  return (
    <textarea
      className={cn(
        // "flex w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm text-white placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50",
        "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        className
      )}
      {...props}
    />
  );
};
