export default function ToastUi({ title, options, ref }){
    return (
        <div ref={ref} hidden className="fixed bottom-10 right-10 rounded-lg border border-neutral-300 bg-neutral-100 px-5 py-4">
            <div className="font-medium text-neutral-900 dark:text-neutral-100 truncate mb-2">
                {title}
            </div>
            <div className="font-medium text-neutral-700 dark:text-neutral-300">
                {options.desc}
            </div>
        </div>
    )
}