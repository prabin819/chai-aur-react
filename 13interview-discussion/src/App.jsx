// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [val, setVal] = useState(1)
//   const [multipliedval, setMultipliedval] = useState(5)



//   const handleClick = () => {
//     setMultipliedval(val*5);
//     setVal(val+1)
//   }


//   return (
//     <>
//       <h1>Main value: {val}</h1>
//       <button onClick={handleClick}>Multiply by 5</button>
//       <h2>Multiplied value: {multipliedval}</h2>
//     </>
//   )
// }

// export default App


import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [val, setVal] = useState(1)
  //const [multipliedval, setMultipliedval] = useState(5)
  const multipliedval = val*5;



  const handleClick = () => {
    //setMultipliedval(val*5);
    setVal(val+1)
  }


  return (
    <>
      <h1>Main value: {val}</h1>
      <button onClick={handleClick}>Multiply by 5</button>
      <h2>Multiplied value: {multipliedval}</h2>
    </>
  )
}

export default App