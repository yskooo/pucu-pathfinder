import React from 'react'
import Link from 'next/link'
import Image from "next/image"

const Header = () => {
  return (
    <nav className="bg-transparent fixed px-2 sm:px-4 py-2.5 w-full left-0 border-b z-20 border-gray-200 backdrop-filter backdrop-blur-2xl backdrop-brightness-75">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="" className="flex items-center">
    <h1 className='text-lg font-extrabold tracking-tight leading-none text-gray-800 md:text-xl lg:text-xl dark:text-white'>
      <Image
      src='img/pathfinderwhite.svg'
      className='w-4/5'
      width={100}
      height={100}
      alt='logo'
      />
    </h1>
  </a>
  <div className="flex md:order-2">
    <a href='https://up.phinma.edu.ph/' target='_blank' rel='noreferrer'>
      <img src="/img/pucu-white.svg" className='w-14' alt="" />
    </a>
    {/* <Link href='/articles'>
      <button type="button" className="text-white hover:bg-green-700 bg-blue-900 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
        </svg>
      </button>
    </Link> */}
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
   </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
        <li>
          <a href="#home" className="block py-2 pl-3 pr-4  rounded text-white hover:text-[#D3B306] md:bg-transparent md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#subjects" className="block py-2 pl-3 pr-4 text-white rounded hover:text-[#D3B306] md:p-0">Subjects</a>
        </li>
        <li>
          <a href="#about" className="block py-2 pl-3 pr-4 text-white rounded hover:text-[#D3B306] md:p-0">About</a>
        </li>
        <li>
          <a href="#team" className="block py-2 pl-3 pr-4 text-white rounded hover:text-[#D3B306] md:p-0">Meet Our Team</a>
        </li>
        <li>
          <a href="#contact" className="block py-2 pl-3 pr-4 text-white rounded hover:text-[#D3B306] md:p-0">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header

