import React from 'react'
import { FaBars } from "react-icons/fa";

function Navbar() {
    return(
        <div className="bg-white h-14 font-primary py-2.5 flex items-center">
            <div className='mr-auto lg:pl-10'>
                <img src="src\assets\logos\blue.svg" className="h-10"/>
            </div>

            <div className='hidden lg:block ml-auto'>
                <ul className='text-black paragraph-lg flex gap-10 pr-10'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Home</a></li>
                </ul>
            </div>

            <div className='relative lg:hidden w-full'>
                <button className='text-black paragraph-md pl-auto left-auto'>
                    <FaBars />
                </button>

                <div className='absolute flex flex-col h-[60vh] bg-white l-0 w-full'>
                    <ul className=''>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar