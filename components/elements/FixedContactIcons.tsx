'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const FixedContactIcons = () => {
  const [mounted, setMounted] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const phoneNumber = '+91 8637707077'; // Replace with your actual phone number
  const formattedNumber = '+91 863 770 7077'; // Format it as you prefer

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleNumberDisplay = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setShowNumber(!showNumber);
  };

  return (
     <div className="fixed right-0 bottom-4 z-[60] flex flex-col gap-3 animate-fade-in transform -translate-x-4">
      {/* WhatsApp Button */}
      <div className="pointer-events-auto">
        <Link
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-white shadow-lg hover:bg-[#128C7E] transition-all duration-300 group relative overflow-hidden"
          aria-label="Join WhatsApp Community"
        >
          <span className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-300"></span>
          <div className="group-hover:animate-bounce flex items-center justify-center w-8 h-8">
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="whatsappGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1df47c" />
                  <stop offset="31%" stopColor="#12df63" />
                  <stop offset="75%" stopColor="#05c443" />
                  <stop offset="100%" stopColor="#00ba37" />
                </linearGradient>
              </defs>
              <path
                d="M16 0C7.16 0 0 7.16 0 16C0 19.37 1.03 22.52 2.91 25.11L0.16 31.52L6.8 29.04C9.38 30.72 12.54 31.68 16 31.68C24.84 31.68 32 24.52 32 16C32 7.16 24.84 0 16 0Z"
                fill="url(#whatsappGradient)"
              />
              <path
                d="M25.6 21.44C25.24 21.28 23.06 20.18 22.76 20.06C22.46 19.94 22.26 19.9 22.04 20.2C21.82 20.5 21.04 21.42 20.82 21.66C20.6 21.9 20.4 21.92 20.04 21.76C19.68 21.6 18.54 21.24 17.14 19.96C16.04 18.98 15.34 17.84 15.1 17.48C14.86 17.12 15.04 16.96 15.2 16.8C15.34 16.64 15.56 16.36 15.7 16.14C15.84 15.92 15.9 15.76 16.02 15.52C16.14 15.28 16.06 15.08 15.98 14.92C15.9 14.76 15.02 12.54 14.66 11.66C14.3 10.78 13.94 10.92 13.66 10.9C13.4 10.88 13.12 10.88 12.82 10.88C12.52 10.88 12.04 10.98 11.62 11.44C11.2 11.9 9.84 13.18 9.84 15.28C9.84 17.38 11.46 19.34 11.7 19.6C11.94 19.86 14.6 23.12 18.14 24.36C21.68 25.6 21.68 24.48 22.28 24.46C22.88 24.44 24.08 23.74 24.42 23.2C24.76 22.66 24.76 22.16 24.66 21.98C24.56 21.8 24.4 21.6 24.12 21.52L25.6 21.44Z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <span className="sr-only">WhatsApp</span>
        </Link>
      </div>

      {/* Call Button */}
      <div className="relative pointer-events-auto">
        <div 
          className={`absolute right-full mr-3 px-3 py-2 bg-gray-800 text-white text-sm rounded whitespace-nowrap transition-opacity duration-200 flex items-center ${
            showNumber ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <span>{formattedNumber}</span>
          <div className="ml-2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-white"></div>
        </div>
        
        <Link
          href={`tel:${phoneNumber}`}
          onClick={toggleNumberDisplay}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#D4AF37] text-white shadow-lg hover:bg-[#ff4785] transition-all duration-300 relative overflow-hidden group"
          aria-label="Call Now"
        >
          <span className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-300"></span>
          <div className={`${showNumber ? 'animate-pulse' : 'group-hover:animate-pulse'} flex items-center justify-center w-8 h-8`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="scale-100"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <span className="sr-only">Call Now</span>
        </Link>
      </div>
    </div>
  );
};

export default FixedContactIcons;