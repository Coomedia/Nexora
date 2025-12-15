import React from 'react'
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='px-5 bg-white dark:bg-black text-black dark:text-white'>
        <h1 className='text-center header-sm md:header-md lg:header-lg'>Footer</h1>
        <div className="">
            <h2 className='paragraph-sm md:paragraph-md lg:paragraph-lg py-5 font-medium'>Quick Links:</h2>
            <div className="w-full list-none flex gap-5 paragraph-sm md:paragraph-md lg:paragraph-lg">
              <li className='font-secondary hover:text-primary-500 dark:hover:text-Secondary-500'><a href="/">Home</a></li>
              <li className='font-secondary hover:text-primary-500 dark:hover:text-Secondary-500'><a href="/">Services</a></li>
              <li className='font-secondary hover:text-primary-500 dark:hover:text-Secondary-500'><a href="/">Products</a></li>
              <li className='font-secondary hover:text-primary-500 dark:hover:text-Secondary-500'><a href="/">About</a></li>
            </div>
            <div>
              <h2 className='paragraph-sm md:paragraph-md lg:paragraph-lg py-5 font-medium'>Our social media accounts:</h2>
              <div className='list-none flex lg:flex-row gap-5 flex-col paragraph-sm md:paragraph-md lg:paragraph-lg'>
              <li className='font-secondary hover:text-primary-500 dark:hover:text-Secondary-500'><a href="/" className='flex items-center gap-2'>
                <FaYoutube />
                <p>@Nexora.tech.mediaKE</p>
              </a></li>
              <li className='font-secondary hover:text-primary-500 dark:hover:text-Secondary-500'><a href="/" className='flex items-center gap-2'>
                <FaTiktok />
                <p>@nexora.tech.mediaKE</p>
              </a></li>
              <li className='font-secondary hover:text-primary-500 dark:hover:text-Secondary-500'><a href="/" className='flex items-center gap-2'>
                <FaInstagram />
                <p>@nexora.tech.media</p>
              </a></li>
              </div>
            </div>
        </div>

        <p className='text-center text-black dark:text-white my-5 paragraph-sm md:paragraph-md lg:paragraph-lg'>@2025 NEXORA TECH AND MEDIA. ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default Footer