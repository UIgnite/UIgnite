import React from 'react'
import { useState } from 'react'

const Toolkit = ({children, title }) => {
    const [visible, setVisible] = useState(false)

    return (
    <>
      <div className='relative'>
        {visible && (<div  className='min-w-30 m-8 absolute rounded-md px-4 py-1 transform -translate-y-6 
         text-black bg-white transition-all ease-in-out duration-500 opacity-100'> 
            {title}  </div>)}

        <button onMouseEnter={()=> setVisible(true)} 
            onMouseLeave={()=> setVisible(false)}
            className=' m-12 px-4 py-2 bg-black text-white rounded-md shadow-md 
            hover:bg-gray-800 transition ease-in'
        > 
        {children}
        </button>
      </div>
    </>
  )
}

export default Toolkit