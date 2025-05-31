'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ContactPopup from '@/components/elements/ContactPopup';
import { FaFacebook, FaInstagram, FaLinkedin, FaStar } from 'react-icons/fa';

interface MenuLink {
  label: string;
  path: string;
  isPopup?: boolean;
}

const menuLinks: MenuLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Courses', path: '/courses' },
  { label: 'Accommodation', path: '/accommodation' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '#', isPopup: true },
];

const Menu: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linkHoldersRef = useRef<(HTMLDivElement | null)[]>([]);

  const menuStateRef = useRef<boolean>(isMenuOpen);
  menuStateRef.current = isMenuOpen;

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openPopup = (): void => {
    setIsPopupOpen(true);
    setIsMenuOpen(false);
  };

  useGSAP(() => {
    if (tl.current) {
      tl.current.kill();
    }

    gsap.set(linkHoldersRef.current, { y: 75, opacity: 0 });
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        opacity: 0,
        visibility: 'hidden'
      });
    }

    tl.current = gsap.timeline({ paused: true })
      .to(overlayRef.current, {
        visibility: 'visible',
        duration: 0.01
      })
      .to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.inOut'
      })
      .to(overlayRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 1,
        ease: 'power4.inOut'
      })
      .to(linkHoldersRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out'
      }, '-=0.8');

    return () => {
      tl.current?.kill();
    };
  }, { scope: container });

  useEffect(() => {
    if (!tl.current) return;

    if (isMenuOpen) {
      gsap.set(linkHoldersRef.current, { y: 75, opacity: 0 });
      if (overlayRef.current) {
        gsap.set(overlayRef.current, { 
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          opacity: 0,
          visibility: 'hidden'
        });
      }
      tl.current.play(0);
    } else {
      gsap.to(linkHoldersRef.current, {
        y: 75,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'bounce.out',
        onComplete: () => {
          if (overlayRef.current) {
            gsap.to(overlayRef.current, {
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
              opacity: 0,
              duration: 0.3,
              ease: 'power2.inOut',
              onComplete: () => {
                if (overlayRef.current) {
                  gsap.set(overlayRef.current, { visibility: 'hidden' });
                }
              }
            });
          }
        }
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleRouteChange = (): void => {
      if (menuStateRef.current) {
        setIsMenuOpen(false);
      }
      setIsPopupOpen(false);
    };

    window.addEventListener('beforeunload', handleRouteChange);
    return () => {
      window.removeEventListener('beforeunload', handleRouteChange);
    };
  }, []);

  return (
    <div ref={container}>
      {/* Top Menu Bar */}
      <div className="fixed top-0 left-0 w-full flex items-center justify-between z-20 bg-white shadow-sm px-4 sm:px-6 md:px-8 lg:px-12 h-20 sm:h-20 md:h-24 lg:h-24">
        <div className="flex items-center justify-between w-full">
          <div className="relative w-20 sm:w-24 md:w-28 lg:w-32 h-10 sm:h-12 md:h-14 lg:h-16 -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-12">
           <Link href="/" className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/1000134308-removebg-preview.png"
              alt="Logo"
              fill
              className="object-contain"
              
              priority
            />
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="relative flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 mr-4 sm:mr-6 md:mr-8 lg:mr-12"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`text-xs sm:text-sm md:text-base lg:text-md font-medium text-gray-900 tracking-wider transition-all duration-300 ${
              isMenuOpen ? 'text-[#D4AF37]' : 'group-hover:text-[#D4AF37]'
            }`}>
              {isMenuOpen ? 'CLOSE' : 'MENU'}
            </span>
            
            <div className="relative mr-8 w-5 sm:w-6 md:w-7 lg:w-8 h-4 sm:h-4 md:h-4 lg:h-5 flex flex-col justify-center">
              <span className={`absolute h-[2px] w-full bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-1/2' : 'top-0'
              }`}></span>
              <span className={`absolute h-[1px] w-full bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-1/2' : 'bottom-0'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        ref={overlayRef}
        className="menu-overlay fixed top-0 left-0 w-full h-full flex flex-col z-20 overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-4 sm:pt-6 md:pt-8 lg:pt-12 bg-gray-50"
      >
        {/* Decorative SVG */}
        <svg className="absolute top-150 left-4 h-12 w-12 opacity-30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="1" fill="none" />
        </svg>
 <svg className="absolute top-162 left-20 h-8 w-12 opacity-30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="1" fill="none" />
        </svg>
         <svg className="absolute top-170 left-30 h-7 w-12 opacity-30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="1" fill="none" />
        </svg>

        <div className="menu-overlay-bar mt-2 flex justify-between mr-6 mb-20 sm:mb-8 md:mb-10 lg:mb-12 ml-10 sm:-ml-6 md:-ml-8 lg:-ml-12">
          <div className="relative w-20  lg:-ml-0 -ml-10 lg:-translate-y-6 sm:w-24 md:w-28 lg:w-32 h-10 sm:h-12 md:h-14 lg:h-16">
            <Image
              src="/1000134308-removebg-preview.png"
              alt="Logo"
              fill
              className="object-contain ml-4"
              priority
            />
          </div>

          <button
            onClick={toggleMenu}
            className="relative flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 mr-4 sm:mr-6 md:mr-8 lg:mr-12"
            aria-label="Close menu"
          >
            <span className="text-sm lg:-translate-y-6 sm:text-base md:text-lg lg:text-xl font-900 text-gray-900 tracking-wider transition-all duration-300 group-hover:text-[#D4AF37]">
              CLOSE
            </span>
            
            <div className="relative w-5 lg:-translate-y-6 sm:w-6 md:w-7 lg:w-8 h-5 sm:h-6 md:h-7 lg:h-8 flex items-center justify-center">
              <span className="absolute h-[1px] w-full bg-gray-900 transition-all duration-300 group-hover:bg-[#D4AF37] rotate-45"></span>
              <span className="absolute h-[1px] w-full bg-gray-900 transition-all duration-300 group-hover:bg-[#D4AF37] -rotate-45"></span>
            </div>
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col   mt-0 lg:mr-30 sm:mt-[-10px] md:mt-[-40px] lg:mt-[-50px]">
          <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 ml-[30%] sm:ml-[35%] md:ml-[38%] lg:ml-[43%]">
            {menuLinks.map((link, index) => (
              <div className="" key={index}>
                <div
                  ref={(el) => {
                    linkHoldersRef.current[index] = el;
                  }}
                  className="relative"
                  onClick={() => {
                    if (link.isPopup) {
                      openPopup();
                    } else {
                      toggleMenu();
                    }
                  }}
                >
                  {link.isPopup ? (
                    <button className="text-gray-900 text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hover:text-[#D4AF37] transition-colors block py-1 sm:py-1.5 md:py-2 lg:py-2.5">
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.path}
                      className="text-gray-900 text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold hover:text-[#D4AF37] transition-colors block py-1 sm:py-1.5 md:py-2 lg:py-2.5"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
      <div className="menu-footer mt-auto">
  <div className="menu-info flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-4 sm:mb-6 md:mb-8 lg:mb-12" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-out">
    <div className="menu-info-col mb-8 flex flex-wrap gap-2 sm:gap-4 md:gap-5 lg:gap-6 justify-end space-y-0 text-gray-900 text-xs sm:text-sm md:text-base lg:text-lg">
      <a className="flex items-center hover:text-[#D4AF37] hover:shadow-[0_0_4px_#D4AF37] transition-all duration-300" href="https://www.justdial.com/Pune/Krunals-Academy/020PXX20-XX20-230324040426-B1E4_BZDET">
        <FaStar className="text-[#00BCD4] mr-1 sm:mr-2 text-xs sm:text-sm md:text-base lg:text-lg" />
        Justdial ↗
      </a>
      <a className="flex items-center hover:text-[#D4AF37] hover:shadow-[0_0_4px_#D4AF37] transition-all duration-300" href="https://www.instagram.com/krunals_academy/?hl=en">
        <FaInstagram className="text-[#00BCD4] mr-1 sm:mr-2 text-xs sm:text-sm md:text-base lg:text-lg" />
        Instagram ↗
      </a>
      <a className="flex items-center hover:text-[#D4AF37] hover:shadow-[0_0_4px_#D4AF37] transition-all duration-300" href="https://www.linkedin.com/company/krunal-s-academy/?originalSubdomain=in">
        <FaLinkedin className="text-[#00BCD4] mr-1 sm:mr-2 text-xs sm:text-sm md:text-base lg:text-lg" />
        Linkedin ↗
      </a>
      <a className="flex items-center hover:text-[#D4AF37] hover:shadow-[0_0_4px_#D4AF37] transition-all duration-300" href="https://www.facebook.com/krunalsacademy/">
        <FaFacebook className="text-[#00BCD4] mr-1 sm:mr-2 text-xs sm:text-sm md:text-base lg:text-lg" />
        Facebook ↗
      </a>
    </div>
  </div>
        </div>
      </div>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};

export default Menu;
