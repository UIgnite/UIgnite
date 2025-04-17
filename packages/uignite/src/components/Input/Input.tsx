import React from 'react';
import {cn} from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, type = 'text', ...props}, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          'flex w-full h-9 p-2 rounded-md border border-gray-400 dark:border-zinc-700 text-base shadow-sm placeholder:text-gray-400 dark:placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-[1.2px] focus-visible:border-none focus-visible:ring-neutral-500 dark:focus-visible:ring-zinc-500 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export {Input};
