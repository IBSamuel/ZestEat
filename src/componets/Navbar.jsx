import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        

<nav class="bg-white dark:bg-gray-900 m-2">

  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl whitespace-nowrap dark:text-white"><span className='text-red-500'>ZEST</span>EAT'S</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-red-500 bg-blue-700 rounded md:bg-transparent md:text-red-500 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded  border-b-2 border-transparent hover:underline decoration-red-500  md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white ">About Us</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded border-b-2 border-transparent hover:underline decoration-red-500  md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white ">Catalog</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded border-b-2 border-transparent hover:underline decoration-red-500  md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white ">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded border-b-2 border-transparent hover:underline decoration-red-500  md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white ">Contact</a>
        </li>
        <li>
          <Link href="#" class="block py-2  text-white bg-red-500  rounded hover:border-2 border-red-500  md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white "><span className='px-5'>Shop</span></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar