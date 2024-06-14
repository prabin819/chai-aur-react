import { useState } from 'react'


function App() {
  const [color, setColor] = useState('white')

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

      </div>

      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>red</button>
          <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>green</button>
          <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>blue</button>
          <button className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>yellow</button>
        </div>
      </div>
    </>
  )
}

export default App
