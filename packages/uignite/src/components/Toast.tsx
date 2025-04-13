import {cn} from '../utils/lib';

interface ToastUiParams {
  idx: number;
  title: string;
  hovered?: boolean;
  options: {
    containerClassName?: string;
    titleClassName?: string;
    desc?: string;
    descClassName?: string;
  };
}

export default function ToastUi({
  idx,
  title,
  options,
  hovered = false,
}: ToastUiParams) {
  return (
    <div
      style={{
        bottom: hovered ? 40 + idx * 80 : 40 + idx * 20,
        zIndex: 10 + idx,
        scale: hovered ? 1 : 1 + idx * 0.05,
      }}
      className={cn(
        'fixed right-10 transition-all min-w-[300px]',
        options.containerClassName
      )}
    >
      <div className="rounded-lg border border-neutral-300 bg-neutral-100 dark:bg-neutral-950 dark:border-neutral-700 shadow-lg px-5 py-3">
        <div
          className={cn(
            'font-semibold text-neutral-900 dark:text-neutral-100 truncate text-sm',
            options.titleClassName
          )}
        >
          {title}
        </div>
        {options.desc ? (
          <div
            className={cn(
              'font-medium text-neutral-700 text-xs dark:text-neutral-300 mt-0.5',
              options.descClassName
            )}
          >
            {options.desc}
          </div>
        ) : null}
      </div>
      <div className="h-3.5" />
    </div>
  );
}
