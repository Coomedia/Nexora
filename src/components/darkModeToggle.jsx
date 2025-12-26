import React, { useState } from 'react'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function DarkModeToggle() {
    const [theme, setTheme] = useState('light');

    const themeToggle = ()  => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === 'dark');
    }


    return (
        <button className='bg-white p-2.5 sticky mr-4 left-full top-[90vh] rounded-full text-black shadow-md shadow-blue-600 dark:shadow-Secondary-600 hover:shadow-primary-800 dark:hover:shadow-Secondary-800 hover:bg-black hover hover:text-white hover:scale-110 transition-all ease-in  dark:bg-black dark:hover:bg-white dark:hover:text-black dark:text-white header-sm md:header-md lg:header-lg'
        onClick={themeToggle}>
            {theme === 'light' ? <FaMoon /> : < FaSun />}
        </button>
    )
}

export default DarkModeToggle