import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {cn} from '../utils/lib';

interface ResizablePropT {
  className?: string;
  defaultPosition?: number;
  horizontal?: boolean;
  children: [ReactNode, ReactNode];
}

export default function Resizable({
  className = '',
  horizontal: horizontalValue = false,
  defaultPosition,
  children,
}: ResizablePropT) {
  // refrence of the container
  const containerRef = useRef<null | HTMLDivElement>(null);
  const draggerRef = useRef<null | HTMLDivElement>(null);

  const [dividerPosition, setDividerPosition] = useState(
    defaultPosition ?? (horizontalValue
      ? window.innerHeight - window.innerHeight / 3
      : window.innerWidth / 5)
  );
  const [mouseX, setMouseX] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);

  const handleMouseUpDown = useCallback(() => {
    const controller = new AbortController();
    if (draggerRef.current) {
      draggerRef.current.addEventListener(
        'mousedown',
        () => {
          setMouseDown(true);
        },
        {
          signal: controller.signal,
        }
      );

      draggerRef.current.addEventListener(
        'mouseup',
        () => {
          setMouseDown(false);
        },
        {
          signal: controller.signal,
        }
      );
    }
    return () => {
      controller.abort();
    };
  }, [draggerRef.current, setMouseDown]);

  React.useEffect(() => {
    const controller = new AbortController();

    if (containerRef.current) {
      containerRef.current.addEventListener(
        'mousemove',
        (ev) => {
          if (horizontalValue) setMouseX(ev.clientY);
          else {
            setMouseX(ev.clientX)
          }
        },
        {
          signal: controller.signal,
        }
      );
    }

    return () => {
      controller.abort();
    };
  }, [dividerPosition, containerRef.current]);

  React.useEffect(() => {
    handleMouseUpDown();
  }, [draggerRef]);

  useEffect(() => {
    if (mouseDown) setDividerPosition(mouseX);
  }, [mouseX, mouseDown]);

  return (
    <div
      ref={containerRef}
      className={cn(
        `w-full h-full flex ${horizontalValue ? 'flex-col' : null}`,
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
          role="span"
          aria-checked={mouseDown ? 'true' : 'false'}
          className={`${
            horizontalValue
              ? 'top-1/2 left-0 right-0 bottom-1/2 -translate-y-1/2 h-0.5 group-hover:h-1'
              : 'top-0 left-1/2 right-1/2 bottom-0 -translate-x-1/2 w-0.5 group-hover:w-1'
          } absolute z-10  bg-[#263147] transition-all group-hover:bg-amber-300 aria-checked:bg-amber-300`}
        />
      </div>
      <div
        style={{
          width: horizontalValue
            ? 'w-full'
            : containerRef.current
              ? containerRef.current.offsetWidth - dividerPosition
              : 0,
          height: horizontalValue
            ? containerRef.current
              ? containerRef.current.offsetHeight - dividerPosition
              : 0
            : 'h-full',
        }}
      >
        {children[1]}
      </div>
    </div>
  );
}
