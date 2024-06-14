import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15);

  const handleDecrease = ()=>{
    setCount(count-1)
    setCount(count-1)
    setCount(count-1)
    setCount(count-1)
    setCount(count-1)
  }
  

  const handleIncrease = ()=>{
    setCount(count => count+1)
    setCount(count => count+1)
    setCount(count => count+1)
    setCount(count => count+1)
    setCount(count => count+1)
  }



  return (
    <><div>Value = {count}</div>
      <button onClick={handleDecrease}>decrease</button>
      <hr />
      <button onClick={handleIncrease}>increase</button>
    </>
  )
}

export default App
