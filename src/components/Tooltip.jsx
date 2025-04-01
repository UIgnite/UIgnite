import React, { useState } from "react";
import { cn } from "../utils/lib.js";

export const Tooltip = ({ children, title, options  }) => {
  const [visible, setVisible] = useState(false);
  let timeout;

  const showTooltip = () => {
    timeout = setTimeout(() =>{
      setVisible(true) 
    }, options.delay)
  }
  const hideTooltip = () =>{
    timeout = setTimeout(() =>{
      clearTimeout(timeout)
      setVisible(false)       
    },options.delay)
  }

  return (
    <div className={cn("relative inline-block mt-10", options.containerClassName) }>
      {visible && (
        <div
          style={options.tootipStyle}
          className={ cn("absolute bottom-full left-1/2 -translate-x-1/2 text-sm text-center w-28 h-8 font-sans font-medium  px-4 py-1 rounded-md  text-black bg-white shadow-lg transition-opacity duration-300 opacity-100", options.tooltipClassName )} >
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


