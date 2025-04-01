import React from 'react'
import { useState } from 'react'

const Accordion = ({title, content}) => {
  const [visible, setVisible] = useState(false)
  const open = false;
  const toggleAccordion = () =>{
    if( visible){
      setVisible(false)
    }else{
      setVisible(true)
    }
  }

  return (
    <>
    <div>
      <div onClick={toggleAccordion} className=' hover:bg-gray-800 flex items-center justify-between min-w-2xs rounded-md min-h-md ease-in-out'>
        <div className='ml-2 px-2 py-2'> {title} </div> 
        <svg className={`mr-2 transform transition-transform duration-300 ${visible ? "rotate-180" : "rotate-0"}`}
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
        className={` -z-10 transition-all duration-300 ease-in-out hover:bg-gray-800
        ${visible ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-5"}`}
      >
        <div className="text-left -z-1 px-4 py-1 text-sm text-white">{content}</div>
      </div>

      <hr className='w-m h-px  bg-gray-200 border-0 dark:bg-gray-700' />
    {/* <div className='flex h-14 items-center justify-between border-b border-zinc-200 ' > </div> */}
      
    </div>
    </>
  )
}

export default Accordion