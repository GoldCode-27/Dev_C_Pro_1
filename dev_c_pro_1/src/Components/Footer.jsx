import React from 'react';
import heroPersonImg from '../assets/heroPersonImg.png';

export default function HistoryAndGrace() {
  return (
    <section className="relative w-full bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 text-white overflow-hidden py-10 sm:py-16 px-4 sm:px-8 md:px-12 font-sans">
      
      <div className="relative max-w-7xl mx-auto flex flex-col items-center">
        
        {/* 1. BACKGROUND TITLE (Scales Down on Mobile to Prevent Overflow) */}
        <div className="w-full text-center z-0 pointer-events-none mb-4 lg:mb-0 lg:absolute lg:top-0 lg:inset-x-0">
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-white opacity-90 drop-shadow-lg leading-tight">
            History and Grace
          </h1>
        </div>

        {/* 2. MAIN LAYOUT (Stacked on Mobile/Tablet, Layered Grid on Desktop) */}
        <div className="relative z-10 w-full min-h-0 lg:min-h-[500px] flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-32 items-center justify-between pt-4 sm:pt-8 lg:pt-12">
          
          {/* Left Text Column */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left text-xs sm:text-sm md:text-base leading-relaxed text-gray-100 font-light drop-shadow-md max-w-md w-full z-20 bg-black/10 lg:bg-transparent p-4 sm:p-0 rounded-xl">
            <p>
              At adidas, we believe that sports have the power to transform lives. It's not just about keeping your body and mind fit; it's about bringing people together and creating a community of individuals who share the same passion for excellence.
            </p>
            <p>
              We draw inspiration from the athletes who push themselves to their limits every day, and from the technology we develop to help them achieve their goals.
            </p>
          </div>

          {/* Centered Image (Fixed-height on mobile, absolute overlay on desktop) */}
          <div className="my-4 lg:my-0 lg:absolute lg:inset-0 flex items-center justify-center z-10 pointer-events-none">
            <img 
              src={heroPersonImg} 
              alt="History and Grace Athlete" 
              className="h-64 sm:h-80 md:h-[420px] lg:h-full lg:max-h-[480px] object-contain object-bottom drop-shadow-2xl"
            />
          </div>

          {/* Right Text Column */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-right text-xs sm:text-sm md:text-base leading-relaxed text-gray-100 font-light drop-shadow-md max-w-md w-full ml-auto z-20 bg-black/10 lg:bg-transparent p-4 sm:p-0 rounded-xl">
            <p>
              Whether you're a runner, a basketball player, a soccer player, or someone who loves to train, you'll find a home with us. Our products are designed to meet your needs, no matter what your preferred form of exercise may be.
            </p>
            <p>
              We're not just present on the playing field, either. You'll find the three stripes at music festivals, on stages, and in the city streets.
            </p>
          </div>

        </div>

        {/* 3. BOTTOM CENTERED STATEMENT */}
        <div className="relative z-20 text-center mt-8 sm:mt-12">
          <p className="text-sm sm:text-base md:text-lg font-bold tracking-wide text-white drop-shadow">
            To improve performances. Improve lives <br className="hidden sm:inline" /> and change the world.
          </p>
        </div>

      </div>

    </section>
  );
}