import React from 'react'

const Header = () => {
  return (
    <div>
        <nav class="bg-gray-800">
     <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img class="block h-8 w-auto lg:hidden" src="Gohar Interwood" alt="Your Company"/>
          <h2 class=" h-8  lg:block text-white font-bold">Gohar Interwood</h2>
        </div>
        <div class="hidden sm:ml-6 sm:block">

          <div class="flex space-x-4">
            <a href="/" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>

            <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</a>

            <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>

            <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact US</a>
          </div>
        </div>
      </div>
    </div>
  </div>


  
  
</nav>
    </div>
  )
}

export default Header;