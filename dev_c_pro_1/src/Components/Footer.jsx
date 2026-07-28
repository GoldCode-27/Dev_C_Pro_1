import React from 'react';
import heroPersonImg from '../assets/heroPersonImg.png'
// Import your central image from your assets folder:
// import heroPersonImg from '../assets/hero-person.png';

export default function Footer() {
  return (
    <section className="relative w-full bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 text-white overflow-hidden py-12 px-6 md:px-16 font-sans">
      
      {/* 1. TOP HEADER */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-4xl md:text-6xl  font-black uppercase tracking-wider drop-shadow-md">
          History and Grace
        </h1>
      </div>

      {/* 2. MAIN CONTENT AREA (Grid with Background Person Image) */}
      <div className="relative max-w-6xl mx-auto min-h-[420px] flex items-center justify-center">
        
        {/* Centered Person Image */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none mt-0">
          <img 
            src={heroPersonImg} 
            alt="History and Grace Athlete" 
            className="h-full max-h-[420px] object-contain object-bottom opacity-90 drop-shadow-2xl"
          />
        </div>

        {/* 2-Column Text Grid Overlaid on top of image */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 text-sm md:text-base leading-relaxed text-gray-100 font-light drop-shadow">
          
          {/* Left Column */}
          <div className="space-y-6 text-left max-w-md">
            <p>
              At adidas, we believe that sports have the power to transform lives. It's not just about keeping your body and mind fit; it's about bringing people together and creating a community of individuals who share the same passion for excellence.
            </p>
            <p>
              We draw inspiration from the athletes who push themselves to their limits every day, and from the technology we develop to help them achieve their goals.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6 text-right md:text-right max-w-md ml-auto">
            <p>
              Whether you're a runner, a basketball player, a soccer player, or someone who loves to train, you'll find a home with us. Our products are designed to meet your needs, no matter what your preferred form of exercise may be.
            </p>
            <p>
              We're not just present on the playing field, either. You'll find the three stripes at music festivals, on stages, and in the city streets.
            </p>
          </div>

        </div>
      </div>

      {/* 3. BOTTOM CENTERED STATEMENT */}
      <div className="relative z-10 text-center mt-8">
        <p className="text-base md:text-lg font-bold tracking-wide text-white drop-shadow">
          To improve performances. Improve lives <br className="hidden sm:inline" /> and change the world.
        </p>
      </div>

    </section>
  );
}