import React, { useState } from "react";
import { cn } from "../utils/lib.js";

interface TooltipParams {
    title: string;
    options?: {
      delay?: number;
      containerClassName?: string;
      tooltipStyle?: React.CSSProperties;
    };
  }

export const Tooltip = ({
  children ,
  title = "",
  options = {
    delay: 300,
    containerClassName: "",
    tooltipStyle: {},
  },
} : React.PropsWithChildren<TooltipParams>) => {
  const [visible, setVisible] = useState(false);
  let timeout: ReturnType<typeof setTimeout>;;

  const showTooltip = () => {
    timeout = setTimeout(() => {
      setVisible(true);
    }, options.delay);
  };
  const hideTooltip = () => {
    timeout = setTimeout(() => {
      clearTimeout(timeout);
      setVisible(false);
    }, options.delay);
  };

  return (
    <div
      className={cn("relative inline-block mt-10", options?.containerClassName)}
    >
      {visible && (
        <div
          style={options?.tooltipStyle}
          className={cn(
            "absolute bottom-full truncate left-1/2 -translate-x-1/2 text-sm text-center w-28 h-8 font-heading font-medium  px-4 py-1 rounded-md  text-black bg-white shadow-lg transition-opacity duration-300 opacity-100",
            options.containerClassName,
          )}
        >
          {title}
        </div>
      )}

      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        aria-label={title}
        className="px-2 py-1 rounded-sm"
      >
        {children}
      </div>
    </div>
  );
};
