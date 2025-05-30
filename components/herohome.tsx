'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const beautyModels = [
  '/model1.png',
  '/model2.png',
  '/model3.png',
  '/model4.png',
  '/model3.png',
];

function Herohome() {
  const [isHoveredPrimary, setIsHoveredPrimary] = useState(false);
  // const [isHoveredSecondary, setIsHoveredSecondary] = useState(false);
  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentModelIndex((prev) => (prev + 1) % beautyModels.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative SVG elements */}
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        {/* Subtle decorative shapes */}
        <svg className="absolute left-10 top-20 h-16 w-16 opacity-50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="1" fill="none" />
        </svg>
        <svg className="absolute right-12 top-1/3 h-12 w-12 opacity-40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 6L18 18M18 6L6 18" stroke="#06B6D4" strokeWidth="1" />
        </svg>
        <svg className="absolute left-1/4 bottom-1/4 h-10 w-10 opacity-50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="16" height="16" rx="4" fill="#D4AF37" fillOpacity="0.2" />
        </svg>
        
        {/* Soft glow effects */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gray-200/20 blur-[100px]"></div>
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan-200/20 blur-[100px]"></div>
      </div>

      {/* Image Slider - Centered */}
      <div className="absolute z-10 flex h-full w-full items-center justify-center">
        {beautyModels.map((model, index) => (
          <div
            key={index}
            className={`absolute flex h-full w-full items-center justify-center transition-opacity duration-1000 ease-in-out ${
              index === currentModelIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-[65vh] w-full max-w-lg overflow-hidden">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-50/80 via-transparent to-transparent h-full w-full pointer-events-none"></div>
              <Image
                src={model}
                alt={`Makeup model ${index + 1}`}
                fill
                className="object-contain"
                quality={100}
                priority={index === 0}
              />
              <div className="absolute -inset-6 -z-10 rounded-full bg-gray-100/30 blur-lg"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Glass Morphism Text Box - Refined positioning */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center">
        <div className="w-[85%] sm:w-[90%] h-[35vh] sm:h-auto max-w-5xl rounded-t-3xl border border-gray-200/50 bg-white/60 p-8 backdrop-blur-lg shadow-xl shadow-gray-200/30 md:p-12">
          <div className="text-center">
            <h1 className="mb-4 text-4xl whitespace-nowrap font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                KRUNAL’S ACADEMY
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 md:text-lg">
              The Premier School of Hair, Skin, Makeup & Nail Artistry
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/courses" className="">
              <button
              
                className={`rounded-lg bg-black px-10 py-3 font-medium text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl ${
                  isHoveredPrimary ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setIsHoveredPrimary(true)}
                onMouseLeave={() => setIsHoveredPrimary(false)}
              >
                Explore Courses
              </button>
              </Link>
              {/* <button
                className={`rounded-lg border-2 border-cyan-500 bg-white px-10 py-3 font-medium text-cyan-500 shadow-lg transition-all hover:bg-cyan-50 hover:shadow-xl ${
                  isHoveredSecondary ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setIsHoveredSecondary(true)}
                onMouseLeave={() => setIsHoveredSecondary(false)}
              >
                Book Consultation
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements - Makeup brushes */}
      <div className="absolute bottom-0 left-0 right-0 hidden h-32 md:block">
        <svg className="absolute -left-16 bottom-12 h-20 w-20 rotate-30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L12 22L14 20L14 4L12 2Z" stroke="#D4AF37" strokeWidth="1" />
        </svg>
        <svg className="absolute -right-16 bottom-16 h-16 w-16 -rotate-15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L12 22L14 20L14 4L12 2Z" stroke="#06B6D4" strokeWidth="1" />
        </svg>
        <svg className="absolute left-1/3 bottom-8 h-12 w-12 rotate-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" stroke="#D4AF37" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

export default Herohome;