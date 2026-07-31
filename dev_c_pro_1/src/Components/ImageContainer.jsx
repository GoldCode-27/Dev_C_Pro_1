import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SiAdidas } from 'react-icons/si';
import coverImage from '../assets/Cover Image.png';

function ImageContainer() {
  return (
    <div className="relative w-full min-h-[550px] sm:min-h-[600px] lg:h-[calc(100vh-80px)] overflow-hidden bg-black flex items-center">
      
      {/* 1. Background Hero Image */}
      <img
        src={coverImage}
        alt="Adidas Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* 2. Dark Overlay Gradient for High Text Readability on Mobile & Desktop */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0" />

      {/* 3. Responsive Adidas Logo Watermark */}
      <div className="absolute top-6 left-6 sm:top-12 sm:left-12 text-black/60 pointer-events-none z-0">
        <SiAdidas className="w-24 h-24 sm:w-48 sm:h-48 lg:w-64 lg:h-64 opacity-50 sm:opacity-75" />
      </div>

      {/* 4. Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 py-12">
        <div className="max-w-xl text-left">
          
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-red-600 tracking-tight uppercase leading-none mb-4">
            ADICLUB <br />
            <span>IS SHOWING OFF.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-8 max-w-sm sm:max-w-md">
            Exclusive releases for our members and more ways to unlock those things that you love.
          </p>

          {/* Action Button Links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#"
              className="group flex items-center justify-center sm:justify-start gap-3 bg-white text-black px-6 py-3.5 font-bold text-sm sm:text-base tracking-wider hover:bg-black hover:text-white border border-white transition-all duration-200"
            >
              <span>SEE MORE</span>
              <ArrowRight size={20} className="stroke-[2.5] transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#"
              className="group flex items-center justify-center sm:justify-start gap-3 bg-red-600 text-white px-6 py-3.5 font-bold text-sm sm:text-base tracking-wider hover:bg-red-700 transition-colors duration-200"
            >
              <span>BUY NOW</span>
              <ArrowRight size={20} className="stroke-[2.5] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ImageContainer;