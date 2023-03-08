import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import TopBar from './components/topbar/TopBar'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <Settings />
    
    </>
    
  )
}

export default App
