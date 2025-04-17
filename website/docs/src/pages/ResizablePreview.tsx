import Resizable from '@/components/Resizable';

export default function ResizablePreview() {
  return (
    <div className="#h-[calc(90vh+15px)] h-[500px] w-screen dark:bg-neutral-950">
      <Resizable defaultPosition={50}>
        <div className="bg-amber-600 h-full"></div>
        <div className="bg-emerald-600 h-full"></div>
      </Resizable>
    </div>
  );
}
