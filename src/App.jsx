import { Button } from "./components/Button"
import Tooltip from "./components/Tooltip.jsx"
import { useToast } from "./hooks/toast"


function App() {
  const toast = useToast()

  return (
    <>
     <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <h1 className="text-6xl font-bold tracking-wide text-orange-500 ">
        UIgnite 🔥
      </h1>
      <Button onClick={()=>{
        toast.showToast("New toast here", {
          desc: "I am the new desc.",
          timeout: 7000
        })
      }} className="mt-5 bg-red-500">Browse Components</Button>
    
      <Tooltip className="" title={"I am Tooltip "} options={ { delay : 300 }} > Hover me</Tooltip>
     </div>
    
    </>
  )
}

export default App
