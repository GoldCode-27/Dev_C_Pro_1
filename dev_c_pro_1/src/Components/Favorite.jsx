import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

const images = [
  { src: img1, alt: 'Description of image 1' },
  { src: img2, alt: 'Description of image 2' },
  { src: img3, alt: 'Description of image 3' },
  { src: img4, alt: 'Description of image 4' },
];

export default function Favorite() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10 font-sans">
      {/* SECTION TITLE */}
      <h2 className="text-2xl font-black tracking-wide text-gray-900 uppercase mb-6">
        Most Interesting
      </h2>

      {/* 4-COLUMN IMAGE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map(({ src, alt }, i) => (
          <div key={i} className="group overflow-hidden">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
}