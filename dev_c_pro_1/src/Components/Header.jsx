import React, { useState } from 'react';
import logoImage from '../assets/adidas - png.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* 1. Top Announcement Banner (Full Width & Scalable Text) */}
      <div className="w-full bg-black py-1.5 px-4 text-center text-xs sm:text-sm font-bold text-yellow-500 tracking-wide">
        NEW COLLABS FOR THIS WEEK. CHECK OUT THE ADICLUB FOR MORE
      </div>

      {/* 2. Main Header Container */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white px-4 md:px-8">
        <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between">
          
          {/* Left: Mobile Menu Button + Logo */}
          <div className="flex items-center space-x-3">
            {/* Hamburger Toggle (Visible on Mobile & Tablet < lg) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 focus:outline-none lg:hidden"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="h-6 w-6 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Logo */}
            <a href="#" className="flex items-center">
              <img src={logoImage} alt="Adidas Logo" className="h-6 sm:h-8 w-auto" />
            </a>
          </div>

          {/* Center: Desktop Navigation (Hidden < lg) */}
          <nav className="hidden items-center space-x-6 font-semibold tracking-wider text-sm text-black lg:flex">
            <a href="#" className="hover:underline decoration-2 underline-offset-4">WOMEN</a>
            <a href="#" className="hover:underline decoration-2 underline-offset-4">MEN</a>
            <a href="#" className="hover:underline decoration-2 underline-offset-4">KIDS</a>
            <a href="#" className="text-gray-500 hover:text-black">NEWS</a>
            <a href="#" className="text-gray-500 hover:text-black">SPORTS</a>
            <a href="#" className="text-gray-500 hover:text-black">ADIDAS WORLD</a>
          </nav>

          {/* Right: Search & Actions */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            
            {/* Desktop Search Input (Hidden on Mobile) */}
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Forum Mid Parley" 
                className="w-48 lg:w-56 bg-gray-100 py-2 pl-4 pr-10 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
              <button className="absolute right-3 top-2.5 text-gray-700">
                <svg className="h-4 w-4 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Mobile Search Toggle Button */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-900 hover:text-gray-600 md:hidden"
              aria-label="Toggle Search Bar"
            >
              <svg className="h-6 w-6 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Account Icon */}
            <button className="hover:text-gray-600 text-gray-900" aria-label="Account">
              <svg className="h-6 w-6 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Wishlist Icon */}
            <button className="hover:text-gray-600 text-gray-900" aria-label="Wishlist">
              <svg className="h-6 w-6 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            
            {/* Shopping Bag Icon */}
            <button className="hover:text-gray-600 text-gray-900" aria-label="Shopping Bag">
              <svg className="h-6 w-6 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </div>

        {/* 3. Mobile Search Drawer (Expandable on Small Screens) */}
        {isSearchOpen && (
          <div className="pb-4 md:hidden">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full bg-gray-100 py-2 pl-4 pr-10 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
              <button className="absolute right-3 top-2.5 text-gray-700">
                <svg className="h-4 w-4 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* 4. Mobile Slide-down Navigation Menu */}
        {isMenuOpen && (
          <nav className="flex flex-col space-y-3 border-t border-gray-100 py-4 font-semibold text-sm text-black lg:hidden">
            <a href="#" className="hover:text-gray-600 py-1">WOMEN</a>
            <a href="#" className="hover:text-gray-600 py-1">MEN</a>
            <a href="#" className="hover:text-gray-600 py-1">KIDS</a>
            <a href="#" className="text-gray-500 hover:text-black py-1">NEWS</a>
            <a href="#" className="text-gray-500 hover:text-black py-1">SPORTS</a>
            <a href="#" className="text-gray-500 hover:text-black py-1">ADIDAS WORLD</a>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;