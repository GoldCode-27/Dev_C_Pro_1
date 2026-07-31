import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

const images = [
  { id: 1, src: img1, alt: 'Featured item 1' },
  { id: 2, src: img2, alt: 'Featured item 2' },
  { id: 3, src: img3, alt: 'Featured item 3' },
  { id: 4, src: img4, alt: 'Featured item 4' },
];

export default function Favorite() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-sans">
      
      {/* SECTION TITLE */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-wide text-gray-900 uppercase">
          Most Interesting
        </h2>
        {/* Optional Section Link */}
        <a 
          href="#" 
          className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-600 hover:text-black transition-colors underline-offset-4 hover:underline"
        >
          See All
        </a>
      </div>

      {/* RESPONSIVE GRID / CAROUSEL CONTAINER */}
      {/* Mobile: Horizontal scroll with snap points | Tablet/Desktop: 2 to 4 Column Grid */}
      <div className="flex sm:grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
        {images.map(({ id, src, alt }) => (
          <div
            key={id}
            className="group relative flex-shrink-0 w-64 sm:w-auto snap-start overflow-hidden rounded-xl bg-gray-100 focus-within:ring-2 focus-within:ring-black"
          >
            {/* Aspect Ratio Box (Maintains 4:5 vertical shoe/gear aspect ratio) */}
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Subtle Overlay Accent on Hover */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>

    </section>
  );
}