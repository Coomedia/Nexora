import { useState } from 'react'
import DarkModeToggle from './components/darkModeToggle'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Div from './components/divider'

function App() {
  return (
    <div className='h-[100vh] bg-white dark:bg-black text-black dark:text-white'>
      <Navbar />

      <div className='text-center'>
        <h1 className='header-sm md:header-md lg:header-lg'>Nexora tech& media</h1>
        <p className='paragraph-sm md:paragraph-md lg:paragraph-lg'>Your business' key to online success</p>
      </div>

      <Div />

      <div className='px-5 md:px-10'>
        <h1 className='text-center header-sm md:header-md lg:header-lg'>Our mission</h1>
        <div className='relative'>
          <div className='card-secondary md:w-[320px] md:h-[330px] lg:h-[326px] lg:w-[650px]'> 
            <h2 className='paragraph-sm font-bold'>Step 1: Get you an online presence</h2>
            <p className='paragraph-sm font-secondary pt-1'>Once you acquire one of our packages,<br/>
            we’ll work on getting you some sort of<br/>
            media/online presence whether it’s<br/>
            making you a poster, logo, advert or website.</p>
          </div>

          <img src="src\assets\arrow-saffron.svg" className='absolute w-full h-40 top-[50px] left-0'/>
          
          <div className='card-primary mt-10 ml-auto md:w-[320px] md:h-[330px] lg:h-[326px] lg:w-[650px]'> 
            <h2 className='paragraph-sm font-bold'>Step 1: Get you an online presence</h2>
            <p className='paragraph-sm font-secondary pt-1'>Once you acquire one of our packages,<br/>
            we’ll work on getting you some sort of<br/>
            media/online presence whether it’s<br/>
            making you a poster, logo, advert or website.</p>
          </div>
        </div>
      </div>

      <Div />


      <DarkModeToggle />

      <Footer />
    </div>
  )
}

export default App
