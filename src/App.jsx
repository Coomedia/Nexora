import { useState } from 'react'
import DarkModeToggle from './components/darkModeToggle'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Div from './components/divider'

function App() {
  return (
    <div className='h-[100vh] bg-white dark:bg-black'>
      <Navbar />
      <DarkModeToggle />
      <Div />
      <Footer />
    </div>
  )
}

export default App
