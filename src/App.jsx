import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Section2 from "./components/Section2";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Section2 />
    </>
  )
}

export default App
