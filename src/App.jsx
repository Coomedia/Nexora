import { useState } from 'react'
import DarkModeToggle from './components/darkModeToggle'
import Navbar from './components/navbar'

function App() {
  return (
    <div>
      <Navbar />
      <DarkModeToggle />
    </div>
  )
}

export default App
