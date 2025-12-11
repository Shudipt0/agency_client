import { useTheme } from 'next-themes';
import React from 'react'
import { IoSunny } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";


const ThemeToggleButton = () => {
    const { theme, setTheme } = useTheme()
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='h-5 w-5 md:h-10 md:w-10 flex items-center justify-center p-3 rounded-full border border-black dark:border-white mr-5 ' >
    <IoSunny className='absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100 text-yellow-500 ' />
    <IoMoonSharp className='absolute rotate-0 scale-100 dark:rotate-90 dark:scale-0 text-blue-900 ' />

    </button>
  )
}

export default ThemeToggleButton
