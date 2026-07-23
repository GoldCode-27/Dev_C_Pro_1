import React from 'react'
import coverImage from '../assets/Cover Image.png'
import logoImage from '../assets/adidas - png.png'
function Header() {
  return (
    <div className="w-1440 h-13">
        
     <div className="bg-black h-6 w-1440 text-yellow-500 text-center font-bold  "> NEW COLLABS FOR THIS WEEK. CHECK OUT THE ADICLUB FOR MORE  </div>
      
      
       <header class="w-full border-b border-gray-100 bg-white px-4 md:px-8">
  <div class="mx-auto flex h-20 max-w-7xl items-center justify-between">
    
    {/* <!-- Left: Logo Area --> */}
    <div class="flex flex-shrink-0 items-center">
      {/* <!-- Standard Adidas Logo SVG --> */}
      <img src={logoImage} alt="Logo" className="h-8 w-auto" />
    </div>

    {/* <!-- Center: Main Navigation --> */}
    <nav class="hidden items-center space-x-6 lg:flex font-semibold tracking-wider text-sm text-black">
      <a href="#" class="hover:underline decoration-2 underline-offset-4">WOMAN</a>
      <a href="#" class="hover:underline decoration-2 underline-offset-4">MEN</a>
      <a href="#" class="hover:underline decoration-2 underline-offset-4">KIDS</a>
      <a href="#" class="text-gray-500 hover:text-black">NEWS</a>
      <a href="#" class="text-gray-500 hover:text-black">SPORTS</a>
      <a href="#" class="text-gray-500 hover:text-black">ADIDAS WORLD</a>
    </nav>

    {/* <!-- Right: Search & Actions Interface --> */}
    <div class="flex items-center space-x-6">
      
      {/* <!-- Styled Search Input Box --> */}
      <div class="relative hidden sm:block">
        <input 
          type="text" 
          placeholder="Forum Mid Parley" 
          class="w-56 bg-gray-100 py-2 pl-4 pr-10 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
        />
        <button class="absolute right-3 top-2.5 text-gray-700">
          {/* <!-- Search Icon --> */}
          <svg class="h-4 w-4 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      {/* <!-- Icon Buttons Row --> */}
      <div class="flex items-center space-x-5 text-gray-900">
        {/* <!-- Account Icon --> */}
        <button class="hover:text-gray-600">
          <svg class="h-6 w-6 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
{/*         
        <!-- Wishlist Heart Icon --> */}
        <button class="hover:text-gray-600">
          <svg class="h-6 w-6 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        
        
        <button class="hover:text-gray-600">
          <svg class="h-6 w-6 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      </div>

    </div>

  </div>
</header>

       
     <div className="">
       <img src={coverImage} alt="Cover" className="w-screen h-64 pl-0 ml-0" />
     </div>

       
    </div>
  )
}

export default Header
