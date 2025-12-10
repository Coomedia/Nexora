import React, { useState } from 'react'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function DarkModeToggle() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classlist.toggle('dark', newTheme === "dark");
    };

    return (
        <div>
            <button className='bg-white p-2.5 absolute bottom-2 right-2 rounded-full text-black shadow-md shadow-blue-600 hover:shadow-primary-800 hover:bg-black hover hover:text-white hover:scale-110 transition-all ease-in  dark:bg-white'
            onClick={toggleTheme}>
                {theme === 'light' ? <FaMoon /> : < FaSun/>}
            </button>
        </div>
    )
}

export default DarkModeToggle