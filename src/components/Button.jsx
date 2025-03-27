import React from 'react';
import { cn } from '../utils/lib';
import {cva} from "class-variance-authority"

export const Button = ({ children, className = '', variant = 'primary', ...props }) => {
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-600",
        destructive:
          "bg-red-500 text-white hover:bg-red-600",
        outline:
          "border border-gray-500 bg-transparent hover:bg-gray-700",
        secondary:
          "bg-gray-500 text-white hover:bg-gray-600",
        ghost: "hover:bg-gray-700 text-white",
        link: "text-blue-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
export const Button = ({ children,size,className = '', variant, onClick }) => {
   
  return (
    <button
    {...props}
      className={cn(`${baseStyles} ${variantStyles[variant] || ''} ${className}`)}
    >
      {children}
    </button>
  );
};
