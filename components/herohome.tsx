'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const beautyModels = [
  '/model1.png',
  '/model2.png',
  '/model3.png',
  '/model4.png',
  '/model3.png',
];

function Herohome() {
  const [isHoveredPrimary, setIsHoveredPrimary] = useState(false);
  const [isHoveredSecondary, setIsHoveredSecondary] = useState(false);
  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentModelIndex((prev) => (prev + 1) % beautyModels.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden overflow-y-hidden bg-gradient-to-b from-pink-50 to-white">
      {/* Decorative elements */}
        
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        {/* Floating cosmetic items */}
        <div className="absolute left-1/4 top-1/4 h-12 w-12 rotate-12 rounded-full bg-pink-100/70 shadow-md"></div>
        <div className="absolute right-1/3 top-1/3 h-8 w-20 -rotate-6 rounded bg-pink-200/60 shadow-md"></div>
        <div className="absolute right-1/4 bottom-1/3 h-10 w-10 rotate-45 rounded bg-pink-300/50 shadow-md"></div>
        
        {/* Soft glow effects */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-pink-100/40 blur-[90px]"></div>
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-pink-200/30 blur-[90px]"></div>
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
            <div className="relative h-[60vh] w-full max-w-md overflow-hidden">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/70 via-transparent to-transparent h-full w-full pointer-events-none"></div>
              <Image
                src={model}
                alt={`Makeup model ${index + 1}`}
                fill
                className="object-contain"
                quality={100}
                priority={index === 0}
              />
              <div className="absolute -inset-8 -z-10 rounded-full bg-pink-100/30 blur-xl"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Glass Morphism Text Box - Properly positioned */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center">
        <div className=" w-[80%] sm:w-[90%] h-[33vh] sm:h-auto max-w-4xl rounded-t-2xl border border-pink-100/60 bg-white/40 p-8 backdrop-blur-xl shadow-2xl shadow-pink-100/20 md:p-10">
          <div className="text-center">
            <h1 className="mb-4 text-4xl whitespace-nowrap font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent ">
KRUNAL’S   ACADEMY             </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-2xl text-gray-700 md:text-xl">
             The School Of Hair, Skin, Make up & Nail
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className={`rounded-lg bg-pink-600 px-8 py-3 font-medium text-white shadow-lg transition-all hover:bg-pink-700 hover:shadow-xl ${
                  isHoveredPrimary ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setIsHoveredPrimary(true)}
                onMouseLeave={() => setIsHoveredPrimary(false)}
              >
                Explore Courses
              </button>
              <button
                className={`rounded-lg border-2 border-pink-600 bg-white px-8 py-3 font-medium text-pink-700 shadow-lg transition-all hover:bg-pink-50 hover:shadow-xl ${
                  isHoveredSecondary ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setIsHoveredSecondary(true)}
                onMouseLeave={() => setIsHoveredSecondary(false)}
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative makeup brushes */}
      <div className="absolute bottom-0 left-0 right-0 hidden h-32 md:block">
        <div className="absolute -left-20 bottom-10 h-24 w-24 rotate-45 rounded-lg bg-pink-200/40 shadow-lg"></div>
        <div className="absolute -right-20 bottom-20 h-20 w-20 -rotate-12 rounded-lg bg-pink-300/40 shadow-lg"></div>
        <div className="absolute left-1/4 bottom-5 h-16 w-16 rotate-12 rounded-lg bg-pink-100/50 shadow-lg"></div>
        <div className="absolute right-1/4 bottom-10 h-14 w-14 -rotate-6 rounded-lg bg-pink-200/50 shadow-lg"></div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

export default Herohome;