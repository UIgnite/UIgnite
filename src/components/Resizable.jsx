import React, { useEffect, useState } from "react";
import { cn } from "../utils/lib";

export default function Resizable({
  element1,
  element2,
  className,
  defaultPosition,
  horizontal: horizontalValue,
}) {
  const [draggerId] = useState(
    `dragger-${horizontalValue ? "h" : "v"}-${Math.floor(
      Math.random() * 10000
    )}`
  );
  const [dividerPosition, setDividerPosition] = useState(
    defaultPosition ?? horizontalValue
      ? window.innerHeight - window.innerHeight / 3
      : window.innerWidth / 5
  );
  const [mouseX, setMouseX] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);

  React.useEffect(() => {
    const controller = new AbortController();
    const dragger = document.getElementById(draggerId);
    if (!dragger) return;
    dragger.addEventListener(
      "mousedown",
      () => {
        setMouseDown(true);
      },
      {
        signal: controller.signal,
      }
    );

    dragger.addEventListener(
      "mouseup",
      () => {
        setMouseDown(false);
      },
      {
        signal: controller.signal,
      }
    );
    return () => {
      controller.abort();
    };
  }, [draggerId]);

  useEffect(() => {
    if (mouseDown) setDividerPosition(mouseX);
  }, [mouseX, mouseDown]);

  return (
    <div
      onMouseMove={(ev) => {
        setMouseX(horizontalValue ? ev.clientY : ev.clientX);
      }}
      className={cn(
        `w-full h-full flex ${horizontalValue ? "flex-col" : null}`,
        className
      )}
    >
      <div
        style={{
          width: horizontalValue ? "100%" : dividerPosition,
          height: horizontalValue ? dividerPosition : "100%",
        }}
      >
        {element1}
      </div>
      <div
        id={draggerId}
        className={`${
          horizontalValue
            ? "w-auto h-1 cursor-row-resize"
            : "h-full w-1 cursor-col-resize"
        } relative group`}
      >
        <div
          role="span"
          aria-checked={mouseDown ? "true" : "false"}
          className={`${
            horizontalValue
              ? "top-1/2 left-0 right-0 bottom-1/2 -translate-y-1/2 h-0.5 group-hover:h-1"
              : "top-0 left-1/2 right-1/2 bottom-0 -translate-x-1/2 w-0.5 group-hover:w-1"
          } absolute z-10  bg-[#263147] transition-all group-hover:bg-amber-300 aria-checked:bg-amber-300`}
        />
      </div>
      <div
        style={{
          width: horizontalValue
            ? "w-full"
            : window.innerWidth - dividerPosition,
          height: horizontalValue
            ? window.innerHeight - dividerPosition
            : "h-full",
        }}
      >
        {element2}
      </div>
    </div>
  );
}
