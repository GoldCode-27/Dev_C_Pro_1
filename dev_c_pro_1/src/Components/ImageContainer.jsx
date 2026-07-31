import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SiAdidas } from 'react-icons/si'; // Imported Adidas icon from react-icons
import coverImage from '../assets/Cover Image.png';

function ImageContainer() {
  return (
    <div className="relative w-full h-[calc(100vh-80px)] min-h-[500px] overflow-hidden bg-black">
      {/* Background Hero Image */}
      <img
        src={coverImage}
        alt="Adidas Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Decorative Adidas Logo Watermark replacing the CSS stripes */}
      <div className="absolute top-[5%] left-[8%] sm:left-[0%] text-black/80 pointer-events-none z-0 ml-[12%]">
        <SiAdidas size={100} className="sm:w-[250px] sm:h-[350px] pl-10 " />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-16 md:px-24 max-w-xl text-left">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-red-700 tracking-wide uppercase leading-none mb-4">
          ADICLUB <br />
          <span className="text-red-700">IS SHOWING OFF.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white text-sm sm:text-base font-normal leading-snug mb-8 max-w-sm">
          Exclusive releases for our members and more ways to unlock those things that you love.
        </p>

        {/* Action Links */}
        <div className="flex flex-col gap-4">
          <a
            href="#"
            className="group flex items-center gap-3 text-white font-bold text-base sm:text-lg tracking-wider hover:opacity-80 transition-opacity w-fit"
          >
            <ArrowRight size={24} className="stroke-[2.5]" />
            <span>SEE MORE</span>
          </a>

          <a
            href="#"
            className="group flex items-center gap-3 text-white font-bold text-base sm:text-lg tracking-wider hover:opacity-80 transition-opacity w-fit"
          >
            <ArrowRight size={24} className="stroke-[2.5]" />
            <span>BUY NOW</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImageContainer;