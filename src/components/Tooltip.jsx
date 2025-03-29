import React, { useState } from "react";
import { cn } from "../utils/lib.js";

const Tooltip = ({ children, title, options  }) => {
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
          className={ cn("absolute bottom-full text-xs font-sans font-medium -translate-y-2 mt-5 px-4 py-1 rounded-md  text-black bg-white shadow-lg transition-opacity duration-300 opacity-100", options.tooltipClassName )} >
          {title}
        </div>
      )}


      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        
        aria-label={title}
        className=" hover:bg-gray-800 px-2 py-1 rounded-sm"
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
