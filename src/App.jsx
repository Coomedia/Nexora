import { useState } from 'react'
import DarkModeToggle from './components/darkModeToggle'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Div from './components/divider'

function App() {
  return (
    <div className='h-screen bg-white dark:bg-black text-black dark:text-white'>
      <Navbar />

      <div className='text-center'>
        <h1 className='header-sm md:header-md lg:header-lg'>Nexora tech& media</h1>
        <p className='paragraph-sm md:paragraph-md lg:paragraph-lg'>Your business' key to online success</p>
      </div>

      <Div />

      <div>
        <h1 className='text-center header-sm md:header-md lg:header-lg'>Our mission</h1>
        <div className='bg-white dark:bg-black'>
          <div className='bg-Secondary-200 dark:bg-Secondary-800 card-secondary md:w-[320px] md:h-[330px] lg:h-[326px] lg:w-[650px] md:ml-10'> 
            <h2 className='paragraph-sm md:paragraph-md lg:paragraph-lg font-bold'>Step 1: Get you an online presence</h2>
            <p className='paragraph-sm md:paragraph-md lg:paragraph-lg font-secondary pt-1'>Once you acquire one of our packages,<br/>
            we’ll work on getting you some sort of<br/>
            media/online presence whether it’s<br/>
            making you a poster, logo, advert or website.</p>
          </div>
          
          <div className='bg-primary-200 dark:bg-primary-800 card-primary mt-10 ml-auto md:w-[320px] md:h-[330px] lg:h-[326px] lg:w-[650px] md:mr-10'> 
            <h2 className='paragraph-sm md:paragraph-md lg:paragraph-lg font-bold'>Step 1: Get you an online presence</h2>
            <p className='paragraph-sm md:paragraph-md lg:paragraph-lg font-secondary pt-1'>Once you acquire one of our packages,<br/>
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
