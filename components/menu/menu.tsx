'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ContactPopup from '@/components/elements/ContactPopup';

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

  const colors = {
    primary: '#ff4785',
    light: '#fff0f5',
    dark: '#1a0a12',
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
      {/* Top Menu Bar - Only added fixed height for mobile */}
      <div className="menu-bar fixed top-0 left-0 w-full p-[2em] flex items-center justify-between z-10 bg-white shadow-sm h-[30px] sm:h-[30px] ">
        <div className="flex items-center justify-between w-full px-6 py-5 mr-9">
          <div className="relative w-28 -ml-8 h-22">
            <Image
              src="/1000134308-removebg-preview.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={toggleMenu}
            className="relative flex items-center gap-3 group"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`text-sm font-medium text-[#1a0a12] tracking-wider transition-all duration-300 mr-5 ${
              isMenuOpen ? 'text-[#ff4785]' : 'group-hover:text-[#ff4785]'
            }`}>
              {isMenuOpen ? 'CLOSE' : 'MENU'}
            </span>
            
            <div className="relative w-6 h-5 flex flex-col justify-center">
              <span className={`absolute h-[1px] w-6 bg-[#1a0a12] transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-1/2' : 'top-0'
              }`}></span>
              <span className={`absolute h-[1px] w-6 bg-[#1a0a12] transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-1/2' : 'bottom-0'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Menu Overlay - Only added overflow-y-auto for mobile */}
      <div
        ref={overlayRef}
        className="menu-overlay fixed top-0 left-0 w-full h-full p-[2em] flex flex-col z-20 overflow-y-auto"
        style={{ background: colors.light }}
      >
        <div className="menu-overlay-bar flex justify-between -ml-8 sm:mr-0 px-6 py-5">
          <div className="relative w-28 h-22">
            <Image
              src="/1000134308-removebg-preview.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={toggleMenu}
            className="relative flex items-center gap-3 group mr-8"
            aria-label="Close menu"
          >
            <span className="text-xl font-900 text-[#1a0a12] tracking-wider transition-all duration-300 group-hover:text-[#ff4785]">
              CLOSE
            </span>
            
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className="absolute h-[1px] w-6 bg-[#1a0a12] transition-all duration-300 group-hover:bg-[#ff4785] rotate-45"></span>
              <span className="absolute h-[1px] w-6 bg-[#1a0a12] transition-all duration-300 group-hover:bg-[#ff4785] -rotate-45"></span>
            </div>
          </button>
        </div>

        {/* Menu Links - Only adjusted ml for mobile */}
        <div className="flex flex-col justify-start flex-grow sm:mt-[-50px]">
          <div className="menu-links flex flex-col space-y-4 ml-0 sm:ml-[48vh]">
            {menuLinks.map((link, index) => (
              <div className="menu-link-items" key={index}>
                <div
                  ref={(el) => {
                    linkHoldersRef.current[index] = el;
                  }}
                  className="menu-link-item-holder relative"
                  onClick={() => {
                    if (link.isPopup) {
                      openPopup();
                    } else {
                      toggleMenu();
                    }
                  }}
                >
                  {link.isPopup ? (
                    <button className="text-[#1a0a12] text-3xl md:text-5xl font-bold hover:text-[#ff4785] transition-colors block py-1">
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.path}
                      className="text-[#1a0a12] text-3xl md:text-5xl font-bold hover:text-[#ff4785] transition-colors block py-1"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer - Only adjusted layout for mobile */}
        <div className="menu-footer mt-auto">
          <div className="menu-info flex flex-col sm:flex-row justify-between gap-8 mt-8 mb-8">
            {/* <div className="menu-info-col flex flex-row flex-wrap gap-5 justify-end space-y-0 text-[#1a0a12]">
              <a className="hover:text-[#ff4785] transition-colors" href="#">X ↗</a>
              <a className="hover:text-[#ff4785] transition-colors" href="#">Instagram ↗</a>
              <a className="hover:text-[#ff4785] transition-colors" href="#">Linkedin ↗</a>
              <a className="hover:text-[#ff4785] transition-colors" href="#">Facebook ↗</a>
            </div> */}
            <div className="menu-info-col flex flex-wrap gap-5 mr-0 sm:mr-28 text-[#1a0a12]">
              <p>info@kunal.com</p>
              <p>45599 9966 5566</p>
            </div>
          </div>

          <div className="menu-preview text-[#1a0a12] text-sm">
            <p>Preview</p>
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