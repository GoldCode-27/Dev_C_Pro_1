import React from 'react';
import heroPersonImg from '../assets/heroPersonImg.png';

export default function Footer() {
  return (
    <section className="relative w-full bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 text-white overflow-hidden py-12 px-6 md:px-16 font-sans">
      
      {/* MAIN CONTENT AREA */}
      <div className="relative max-w-6xl mx-auto min-h-[480px] flex items-center justify-center pt-8">
        
        {/* 1. TEXT IN THE BACKGROUND (Behind the person) */}
        <div className="absolute top-0 inset-x-0 text-center z-0 pointer-events-none">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-wider text-white opacity-90 drop-shadow-lg whitespace-nowrap">
            History and Grace
          </h1>
        </div>

        {/* 2. CENTERED PERSON IMAGE (In front of the title) */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <img 
            src={heroPersonImg} 
            alt="History and Grace Athlete" 
            className="h-full max-h-[460px] object-contain object-bottom drop-shadow-2xl"
          />
        </div>

        {/* 3. TEXT PARAGRAPHS (In front of everything) */}
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 text-sm md:text-base leading-relaxed text-gray-100 font-light drop-shadow-md w-full">
          
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

      {/* 4. BOTTOM CENTERED STATEMENT */}
      <div className="relative z-20 text-center mt-10">
        <p className="text-base md:text-lg font-bold tracking-wide text-white drop-shadow">
          To improve performances. Improve lives <br className="hidden sm:inline" /> and change the world.
        </p>
      </div>

    </section>
  );
}