import React from 'react';
import {cn} from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({className, ...props}, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'flex min-h-[150px] w-[450px] rounded-xl px-4 py-2 dark:bg-zinc-800 bg-zinc-50 border border-gray-400 dark:border-zinc-700 text-base shadow-sm placeholder:text-gray-400 dark:placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-[1.2px] focus-visible:border-none focus-visible:ring-neutral-500 dark:focus-visible:ring-zinc-500',
          className
        )}
        {...props}
      />
    );
  }
);

TextArea.displayName = 'TextArea';
