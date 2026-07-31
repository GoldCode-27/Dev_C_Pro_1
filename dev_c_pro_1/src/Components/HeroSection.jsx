import React, { useState, useRef } from 'react';
import shoeImg from '../assets/Sneaker.png'; 
import heroImage from '../assets/Girl Image.png';

const products = [
  { id: 1, name: 'Sneaker X', category: 'Sneaker Style', price: 'U$170,00', shipping: 'free shipping' },
  { id: 2, name: 'Sneaker X', category: 'Sneaker Style', price: 'U$170,00', shipping: 'free shipping' },
  { id: 3, name: 'Sneaker X', category: 'Sneaker Style', price: 'U$170,00', shipping: 'free shipping' },
  { id: 4, name: 'Sneaker X', category: 'Sneaker Style', price: 'U$170,00', shipping: 'free shipping' },
  { id: 5, name: 'Sneaker X', category: 'Sneaker Style', price: 'U$170,00', shipping: 'free shipping' },
  { id: 6, name: 'Sneaker X', category: 'Sneaker Style', price: 'U$170,00', shipping: 'free shipping' },
  { id: 7, name: 'Sneaker X', category: 'Sneaker Style', price: 'U$170,00', shipping: 'free shipping' },
  { id: 8, name: 'Sneaker X', category: 'Sneaker Style', price: 'U$170,00', shipping: 'free shipping' },
];

export default function ProductShowcase() {
  const [favorites, setFavorites] = useState({});
  const scrollContainerRef = useRef(null);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      // Dynamic scroll amount based on container width
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollAmount = direction === 'left' ? -containerWidth * 0.75 : containerWidth * 0.75;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 font-sans">
      
      {/* 1. HERO BANNER */}
      <div className="relative bg-[#1e1e1e] text-white rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch mb-8 sm:mb-12 shadow-xl">
        {/* Left Side Image */}
        <div className="w-full md:w-5/12 lg:w-1/2 min-h-[240px] sm:min-h-[320px] md:min-h-full relative">
          <img 
            src={heroImage} 
            alt="Adidas Model" 
            className="w-full h-full object-cover object-top absolute inset-0 md:relative"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-7/12 lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide uppercase mb-3 leading-tight">
            OUTFITS FOR <br />
            <span className="text-[#d8f832]">BENEFITS</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-1">
            <span className="text-[#d8f832] font-semibold">60% OFF + free shipping:</span> only for adiClub members.
          </p>

          <p className="text-xs sm:text-sm text-gray-300 mb-6 sm:mb-8">
            Check your account and start buying for benefits on <span className="text-[#d8f832] font-semibold">adiWeek</span>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#d8f832] text-black px-6 py-3 font-bold text-xs sm:text-sm tracking-wider hover:bg-opacity-90 transition rounded-md sm:rounded-none">
              <span>➔</span> BUY NOW
            </button>
            <button className="flex items-center justify-center gap-2 border border-white text-white px-6 py-3 font-bold text-xs sm:text-sm tracking-wider hover:bg-white hover:text-black transition rounded-md sm:rounded-none">
              <span>↓</span> WHAT IS ADIDAS?
            </button>
          </div>
        </div>
      </div>

      {/* 2. PRODUCT SECTION HEADER */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 tracking-tight">
          Do you still like these products?
        </h3>
        
        {/* Scroll Control Arrows */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => scroll('left')} 
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-800 transition active:scale-95 focus:outline-none"
            aria-label="Scroll left"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-800 transition active:scale-95 focus:outline-none"
            aria-label="Scroll right"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* 3. HORIZONTAL SCROLL PRODUCT LIST (Touch & Snap Enabled) */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <div 
            key={product.id} 
            className="w-[180px] xs:w-[200px] sm:w-[240px] flex-shrink-0 snap-start flex flex-col group cursor-pointer"
          >
            {/* Image Card Container */}
            <div className="relative bg-[#ebebeb] rounded-xl p-3 sm:p-4 flex flex-col justify-between h-52 sm:h-64 mb-3 transition duration-200 group-hover:shadow-lg">
              
              {/* Favorite Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(product.id);
                }} 
                className={`self-end transition ${favorites[product.id] ? "text-red-500" : "text-gray-500 hover:text-black"}`}
                aria-label="Favorite product"
              >
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6" 
                  fill={favorites[product.id] ? "currentColor" : "none"} 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              {/* Product Image */}
              <div className="flex-1 flex items-center justify-center py-2">
                <img 
                  src={shoeImg} 
                  alt={product.name} 
                  loading="lazy"
                  className="max-h-24 sm:max-h-36 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Price Tag Overlay */}
              <div>
                <p className="text-xs sm:text-sm font-bold text-gray-900">{product.price}</p>
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-tight">{product.shipping}</p>
              </div>
            </div>

            {/* Product Meta Info */}
            <div className="px-1">
              <h4 className="font-bold text-xs sm:text-sm text-gray-900 leading-snug group-hover:underline">{product.name}</h4>
              <p className="text-[11px] sm:text-xs text-gray-500">{product.category}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}