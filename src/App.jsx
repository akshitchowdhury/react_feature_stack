import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Color from './Features/Color_CArousel/Color'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-red-500 text-xl'>I am here</h1>
    
    <Color/>
    </>
  )
}

export default App
