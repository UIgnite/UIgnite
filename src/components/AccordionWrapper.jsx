import React from 'react'
import { useState } from 'react';
import Accordion from "./Accordion";


const AccordionWrapper = ({ children  }) => {
    const [activeIndex, setActiveIndex] = useState(null);
   
  return (
    <>
        <div>
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, {
                    isOpen: activeIndex === index,
                    onToggle: () => setActiveIndex(activeIndex === index ? null : index),
                })
            )}
        </div>
    </>
  )
}

export default AccordionWrapper