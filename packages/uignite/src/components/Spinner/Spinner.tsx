import {cn} from '@/utils/lib';

export interface SpinnerProps {
  className?: string;
}

export const Spinner = ({className = ''}: SpinnerProps) => {
  return (
    <div
      className={cn('flex space-x-2 justify-center items-center ', className)}
    >
      <div
        className={`h-3 w-3  rounded-full animate-bounce [animation-delay:-0.3s]`}
      ></div>
      <div
        className={`h-3 w-3   rounded-full animate-bounce [animation-delay:-0.15s]`}
      ></div>
      <div className={`h-3 w-3 rounded-full animate-bounce`}></div>
    </div>
  );
};
