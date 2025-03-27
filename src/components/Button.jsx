import React from 'react';
import { cn } from '../utils/lib';

export const Button = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button
    {...props}
      className={cn(`${baseStyles} ${variantStyles[variant] || ''} ${className}`)}
    >
      {children}
    </button>
  );
};
