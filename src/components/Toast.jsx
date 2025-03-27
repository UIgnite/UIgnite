import { cn } from "../utils/lib";

export default function ToastUi({ title, options, ref }){
    return (
        <div ref={ref} hidden={true} className={cn("fixed bottom-10 right-10 rounded-lg border border-neutral-300 min-w-[300px] bg-neutral-100 dark:bg-neutral-950 dark:border-neutral-700 shadow px-5 py-3", options.containerClassName)}>
            <div className={cn("font-semibold text-neutral-900 dark:text-neutral-100 truncate text-sm", options.titleClassName)}>
                {title}
            </div>
            {options.desc ? <div className={cn("font-medium text-neutral-700 text-xs dark:text-neutral-300 mt-0.5", options.descClassName)}>
                {options.desc}
            </div> : null}
        </div>
    )
}