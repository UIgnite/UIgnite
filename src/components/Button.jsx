import React from "react";
import { cn } from "../utils/lib";
import { cva } from "class-variance-authority";
import { Spinner } from "./Spinner";

export const Button = (
  { children, size, className = "",isLoading,icon,variant,ref, ...props},
  
) => {
  const buttonVariants = cva(
    "inline-flex items-center cursor-pointer justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-blue-500 text-white hover:bg-blue-600",
          destructive: "bg-red-500 text-white hover:bg-red-600",
          outline: "border border-gray-500 bg-transparent hover:bg-gray-700",
          secondary: "bg-gray-500 text-white hover:bg-gray-600",
          ghost: "hover:bg-gray-700 text-white",
          link: "text-blue-400 underline-offset-4 hover:underline",
          glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
          gradient: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700",
          dark:"bg-black text-white hover:bg-black/70",
          light:"bg-gray-50 text-black hover:bg-gray-100",
       
        },
        size: {
          default: "h-10 px-4 py-2 min-w-[90px]",  
          sm: "h-9 rounded-md px-3 min-w-[80px]",
          lg: "h-11 rounded-md px-8 min-w-[110px]",
          icon: "h-10 w-10 min-w-[40px]",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  );

  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      ref={ref}
      className={cn(buttonVariants({ className, size, variant }))}
    >
       {isLoading ? (
          <Spinner className={` ${children ?"mr-5" :""}`} />
        ) : (
          icon && <span className="mr-2">{icon}</span>
        )}
      {children}
    </button>
  );
};
