import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import {cn} from '@/lib/utils';

export interface ResizableProps {
  className?: string;
  defaultPosition?: number;
  horizontal?: boolean;
  children: [ReactNode, ReactNode]; // exactly two children expected
}

function Resizable({
  className,
  defaultPosition,
  horizontal: horizontalValue,
  children,
}: ResizableProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const draggerRef = useRef<HTMLDivElement | null>(null);

  const [dividerPosition, setDividerPosition] = useState(
    (defaultPosition ?? horizontalValue)
      ? window.innerHeight - window.innerHeight / 3
      : window.innerWidth / 5
  );
  const [mouseX, setMouseX] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);

  const handleMouseUpDown = useCallback(() => {
    const controller = new AbortController();
    if (draggerRef.current) {
      draggerRef.current.addEventListener(
        'mousedown',
        () => setMouseDown(true),
        {signal: controller.signal}
      );
      draggerRef.current.addEventListener(
        'mouseup',
        () => setMouseDown(false),
        {signal: controller.signal}
      );
    }
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    handleMouseUpDown();
  }, [handleMouseUpDown]);

  useEffect(() => {
    if (mouseDown) setDividerPosition(mouseX);
  }, [mouseX, mouseDown]);

  return (
    <div
      ref={containerRef}
      onMouseMove={(ev: React.MouseEvent<HTMLDivElement>) => {
        console.log(ev);
        setMouseX(horizontalValue ? ev.clientY : ev.clientX);
      }}
      className={cn(
        `w-full h-full flex ${horizontalValue ? 'flex-col' : ''}`,
        className
      )}
    >
      <div
        style={{
          width: horizontalValue ? '100%' : dividerPosition,
          height: horizontalValue ? dividerPosition : '100%',
        }}
      >
        {children[0]}
      </div>
      <div
        ref={draggerRef}
        className={`${
          horizontalValue
            ? 'w-auto h-1 cursor-row-resize'
            : 'h-full w-1 cursor-col-resize'
        } relative group`}
      >
        <div
          role="separator"
          aria-checked={mouseDown ? 'true' : 'false'}
          className={`${
            horizontalValue
              ? 'top-1/2 left-0 right-0 bottom-1/2 -translate-y-1/2 h-0.5 group-hover:h-1'
              : 'top-0 left-1/2 right-1/2 bottom-0 -translate-x-1/2 w-0.5 group-hover:w-1'
          } absolute z-10 bg-[#263147] transition-all group-hover:bg-amber-300 aria-checked:bg-amber-300`}
        />
      </div>
      <div
        style={{
          width: horizontalValue
            ? '100%'
            : containerRef.current
              ? containerRef.current.offsetWidth - dividerPosition
              : 0,
          height: horizontalValue
            ? containerRef.current
              ? containerRef.current.offsetHeight - dividerPosition
              : 0
            : '100%',
        }}
      >
        {children[1]}
      </div>
    </div>
  );
}

export {Resizable};
