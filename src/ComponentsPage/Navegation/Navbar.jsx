import { useState } from "react";
import {GitHub} from '@Icons/GitHub'
import {Instagram} from '@Icons/Instagram'

export const Navbar = ({children}) => {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="z-[1000] fixed top-0 w-full px-4 py-2 text-gray-800 bg-[#AAD576] shadow-md dark:bg-[#143601] dark:text-gray-200">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/public/logo.png" alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold">DevBlocks</span>
        </div>

        {/* Search bar */}
        <div className="items-center justify-center flex-1 hidden md:flex">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-1 text-gray-800 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-300 focus:outline-none"
          />
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">CTRL + K</span>
        </div>

        {/* Navigation Links for large screens */}
        <div className="items-center hidden space-x-5 mr-3 md:flex">
          <a href="#docs" className="">Docs</a>
          <a href="#blog" className="">Blog</a>
        </div>

        {/* Icons + Toggle for dark mode */}
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center justify-center m-2 rounded-full size-6 "><GitHub/></a>
          <a href='/' className="flex items-center justify-center m-2 rounded-full size-6 "><Instagram/></a>

          {/* Light/Dark Mode Toggle */}
          <button className="focus:outline-none">
            {children}
          </button>

        
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className="flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full dark:bg-gray-600">☰</div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown (only visible in mobile view) */}
      {menuOpen && (
        <div className="mt-4 space-y-2 md:hidden">
          <a href="#docs" className="block text-center ">Docs</a>
          <a href="#blog" className="block text-center ">Blog</a>
          <a href="#pricing" className="block text-center ">Pricing & FAQ</a>
          <a href="#signin" className="block py-2 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700">Sign in</a>
        </div>
      )}
    </nav>
  );
};
