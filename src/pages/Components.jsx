import React from 'react'
import { Button } from '../components/Button'
import { Tooltip } from '../components/Tooltip'
import { useToast } from '../hooks/toast'

const Components = () => {
    const toast = useToast()
  return (
    <>
         <div className="flex flex-col items-center justify-center h-screen  text-center">
         
          <Button onClick={()=>{
            toast.showToast("New toast here", {
              desc: "I am the new desc.",
              timeout: 3000
            })
          }} className="mt-5 bg-gray-50 text-black hover:bg-gray-100">Browse Components</Button>
        
          <Tooltip className="" title={"I am Tooltip "} options={ { delay : 300 }} > 
            <Button>Hover me</Button>
          </Tooltip>
          
         </div>
        
        </>
  )
}

export default Components
