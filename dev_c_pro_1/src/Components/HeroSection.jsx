import React, { useState } from 'react';
// Import your local shoe image here if it's in src/assets/
import shoeImg from '../assets/Sneaker.png'; 
import heroImage from '../assets/Girl Image.png'// Replace with the actual path to your shoe image

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

const scrollRight = () => {
  document.getElementById('product-container').scrollBy({ left: 300, behavior: 'smooth' });
};

const scrollLeft = () => {
  document.getElementById('product-container').scrollBy({ left: -300, behavior: 'smooth' });
};

export default function ProductShowcase() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      
      {/* --- HERO BANNER --- */}
      <div className="relative bg-[#1e1e1e] text-white rounded-3xl overflow-hidden flex flex-col md:flex-row items-center mb-10 shadow-xl">
        {/* Left Side Image */}
        <div className="w-full md:w-1/3 h-64 md:h-80 relative">
          <img 
            src={heroImage} 
            alt="Model" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide uppercase mb-4 leading-tight">
            OUTFITS FOR <br />
            <span className="text-[#d8f832]">BENEFITS</span>
          </h2>

          <p className="text-sm md:text-base text-gray-200 mb-2">
            <span className="text-[#d8f832] font-semibold">60% OFF + free shipping:</span> only for adiClub members.
          </p>

          <p className="text-sm text-gray-300 mb-8">
            Check your account and start buying for benefits on <span className="text-[#d8f832] font-semibold">adiWeek</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-6">
            <button className="flex items-center gap-2 font-bold tracking-wider text-sm hover:opacity-80 transition">
              <span>➔</span> BUY NOW
            </button>
            <button className="flex items-center gap-2 font-bold tracking-wider text-sm hover:opacity-80 transition">
              <span>↓</span> WHAT IS ADIDAS?
            </button>
          </div>
        </div>
      </div>

      {/* --- PRODUCT SECTION HEADER --- */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Do you still like these products?</h3>
        <div className="flex gap-2">
          <button onClick={scrollLeft} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 text-lg flex items-center justify-center w-8 h-8">&lt;</button>
          <button onClick={scrollRight} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 text-lg flex items-center justify-center w-8 h-8">&gt;</button>
        </div>
      </div>

      {/* --- HORIZONTAL SCROLL PRODUCT LIST --- */}
      <div 
        id="product-container"
        className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[240px] max-w-[240px] flex-shrink-0 flex flex-col group">
            
            {/* Image Box */}
            <div className="relative bg-[#ebebeb] rounded-lg p-4 flex flex-col justify-between h-64 mb-3 transition hover:shadow-md">
              {/* Heart / Favorite Button */}
              <button 
                onClick={() => toggleFavorite(product.id)} 
                className="self-end text-gray-700 hover:text-black transition"
              >
                <svg 
                  className="w-6 h-6" 
                  fill={favorites[product.id] ? "currentColor" : "none"} 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              {/* Shoe Image */}
              <div className="flex-1 flex items-center justify-center py-2">
                <img 
                  src={shoeImg} 
                  alt={product.name} 
                  className="max-h-36 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Price Tag Overlay inside Gray Box */}
              <div>
                <p className="text-xs font-bold text-gray-900">{product.price}</p>
                <p className="text-[10px] text-gray-500">{product.shipping}</p>
              </div>
            </div>

            {/* Product Details Below Gray Box */}
            <div className="px-1">
              <h4 className="font-bold text-sm text-gray-900 leading-snug">{product.name}</h4>
              <p className="text-xs text-gray-500">{product.category}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}