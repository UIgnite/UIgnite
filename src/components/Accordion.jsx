import React from 'react'
import { useState } from 'react'
import { cn } from '../utils/lib'

const Accordion = ({title, content, className="", defaultOpen = false, open=false}) => {
  const [visible, setVisible] = useState(defaultOpen)
  const toggleAccordion = () =>{
    if( visible){
      open = false
      setVisible(false)
    }else{
      open = true;
      setVisible(true)
    }
  }

  return (
    <>
    <div>
      <div onClick={toggleAccordion} className={cn('cursor-pointer bg-gray-800  hover:bg-gray-900 flex  items-center justify-between min-w-2xs  min-h-md ease-in-out')}>
        <div className='ml-2 px-2 py-2 text-white'> {title} </div> 
        <svg className={`mr-2 transform transition-transform duration-300 
          ${visible ? "rotate-180" : "rotate-0"}`}
          width="20"
          height="15"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M6 9l6 6 6-6"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        </div>      
        <div
          className={` overflow-hidden transition-all duration-300 ease-in-out hover:bg-gray-800 
        ${visible ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-5"}`}
      >
        <div className="bg-gray-800 text-left -z-1 px-4 py-1 text-sm text-white">{content}</div>
      </div>

      <hr className='w-m h-px  bg-gray-200 border-0 ' />
    {/* <div className='flex h-14 items-center justify-between border-b border-zinc-200 ' > </div> */}
      
    </div>
    </>
  )
}

export default Accordion