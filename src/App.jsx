import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import TopBar from './topbar/TopBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <Home />
    
    </>
    
  )
}

export default App
