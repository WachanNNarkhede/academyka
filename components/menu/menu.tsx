'use client';

import React, { useState, useRef, useEffect, JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ContactPopup from '@/components/elements/ContactPopup';
import {
  FaFacebook, FaInstagram, FaLinkedin, FaStar,
  FaHome, FaInfoCircle, FaServicestack, FaBook, FaBed, FaImages, FaEnvelope,
  FaTrophy
} from 'react-icons/fa';

interface MenuLink {
  label: string;
  path: string;
  icon: JSX.Element;
  isPopup?: boolean;
}

const menuLinks: MenuLink[] = [
  { label: 'Home', path: '/', icon: <FaHome /> },
  { label: 'About', path: '/about', icon: <FaInfoCircle /> },
  { label: 'Services', path: '/services', icon: <FaServicestack /> },
  { label: 'Courses', path: '/courses', icon: <FaBook /> },
  { label: 'Accommodation', path: '/accommodation', icon: <FaBed /> },
  { label: 'Gallery', path: '/gallery', icon: <FaImages /> },
  { label: 'Contact Us', path: '#', icon: <FaEnvelope />, isPopup: true },
];

const openingHours = [
  { day: 'Mon - Fri', open: '09:00', close: '18:00' },
  { day: 'Saturday', open: '10:00', close: '16:00' },
  { day: 'Sunday', open: 'Closed', close: '' },
];

// Animated hamburger/X button
const MenuToggleButton: React.FC<{
  isActive: boolean;
  onClick: () => void;
  className?: string;
  label?: string;
}> = ({ isActive, onClick, className = '', label = 'Menu' }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 group focus:outline-none ${className}`}
    aria-label={label}
    type="button"
  >
    <span
      className={`text-base font-medium tracking-wider transition-all duration-300 ${
        isActive ? 'text-[#D4AF37]' : 'group-hover:text-[#D4AF37]'
      }`}
    >
      {isActive ? 'CLOSE' : 'MENU'}
    </span>
    <div className="relative w-7 h-7 flex flex-col justify-center items-center">
      <span
        className={`absolute h-[2px] w-6 bg-gray-900 rounded transition-all duration-300 ${
          isActive ? 'rotate-45 top-3.5' : 'top-2'
        }`}
      ></span>
      <span
        className={`absolute h-[2px] w-6 bg-gray-900 rounded transition-all duration-300 ${
          isActive ? '-rotate-45 top-3.5' : 'bottom-2'
        }`}
      ></span>
    </div>
  </button>
);

const Menu: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linkHoldersRef = useRef<(HTMLLIElement | null)[]>([]);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const openPopup = () => {
    setIsPopupOpen(true);
    setIsMenuOpen(false);
  };

  useGSAP(() => {
    if (tl.current) tl.current.kill();
    gsap.set(linkHoldersRef.current, { y: 60, opacity: 0 });
    if (overlayRef.current) {
      gsap.set(overlayRef.current, {
        clipPath: 'circle(0% at 100% 0%)',
        opacity: 0,
        visibility: 'hidden',
      });
    }
    tl.current = gsap
      .timeline({ paused: true })
      .to(overlayRef.current, { visibility: 'visible', duration: 0.01 })
      .to(overlayRef.current, { opacity: 1, duration: 0.2, ease: 'power2.inOut' })
      .to(
        overlayRef.current,
        {
          clipPath: 'circle(150% at 50% 50%)',
          duration: 0.7,
          ease: 'power4.inOut',
        },
        '-=0.1'
      )
      .to(
        linkHoldersRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power4.out',
        },
        '-=0.5'
      );
    return () => {
      tl.current?.kill();
    };
  }, { scope: container });

  useEffect(() => {
    if (!tl.current) return;
    if (isMenuOpen) {
      gsap.set(linkHoldersRef.current, { y: 60, opacity: 0 });
      if (overlayRef.current) {
        gsap.set(overlayRef.current, {
          clipPath: 'circle(0% at 100% 0%)',
          opacity: 0,
          visibility: 'hidden',
        });
      }
      tl.current.play(0);
    } else {
      gsap.to(linkHoldersRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.in',
        onComplete: () => {
          if (overlayRef.current) {
            gsap.to(overlayRef.current, {
              clipPath: 'circle(0% at 100% 0%)',
              opacity: 0,
              duration: 0.2,
              ease: 'power2.inOut',
              onComplete: () => {
                if (overlayRef.current) {
                  gsap.set(overlayRef.current, { visibility: 'hidden' });
                }
              },
            });
          }
        },
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
      setIsPopupOpen(false);
    };
    window.addEventListener('beforeunload', handleRouteChange);
    return () => {
      window.removeEventListener('beforeunload', handleRouteChange);
    };
  }, []);

  return (
    <div ref={container}>
      {/* Top Bar */}
      <header className="fixed top-0 left-0 w-full z-30 bg-white/90 backdrop-blur shadow-sm h-20 flex items-center px-4 md:px-10 justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 ">
          <div className="relative w-20 lg:ml-0 ml-4 h-20 md:w-24 md:h-24">
            <Image
              src="/1000134308-removebg-preview.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Center: Tagline or Achievements */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-6">
          <span className="text-sm text-[#D4AF37] font-semibold tracking-wide">
            Empowering Minds. Shaping Futures.
          </span>
          <span className="flex items-center gap-2 text-xs text-gray-600">
            <FaTrophy className="text-[#D4AF37]" /> 20+ Years Excellence
            <FaStar className="text-[#D4AF37]" /> 4.9/5 Google
            <span className="bg-[#ffe082] text-[#b38f2f] px-2 py-0.5 rounded-full font-bold ml-2">ISO Certified</span>
          </span>
        </div>

        {/* Right: Socials, Contact & Menu */}
        <div className="flex items-center gap-4 ml-auto mr-10 lg:mr-18">
          {/* Social Icons and Contact Button (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-4 mr-4">
            <a href="https://www.instagram.com/krunals_academy/?hl=en" className="hover:text-[#D4AF37] transition" aria-label="Instagram">
              <FaInstagram className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/company/krunal-s-academy/?originalSubdomain=in" className="hover:text-[#D4AF37] transition" aria-label="LinkedIn">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://www.facebook.com/krunalsacademy/" className="hover:text-[#D4AF37] transition" aria-label="Facebook">
              <FaFacebook className="text-xl" />
            </a>
         
          </div>
          {/* Menu Button */}
          <MenuToggleButton
            isActive={isMenuOpen}
            onClick={toggleMenu}
            className="ml-2"
          />
        </div>
      </header>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 bg-gradient-to-br from-white/95 via-[#f7f6f2]/95 to-[#f1e9d7]/95 backdrop-blur-2xl flex flex-col md:flex-row transition-all duration-500"
        style={{ visibility: 'hidden', opacity: 0 }}
      >
        {/* Overlay Close Button */}
        <div className="absolute top-6 right-9 z-50">
          <MenuToggleButton
            isActive={isMenuOpen}
            onClick={toggleMenu}
            className=""
            label="Close menu"
          />
        </div>

        {/* Decorative SVG pattern */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="180" stroke="#D4AF37" strokeWidth="10" />
        </svg>

        {/* Main Content */}
        <main className="flex-1 flex flex-col justify-center items-center px-6 py-14 md:py-0">
          {/* Main Links with Icons */}
          <nav className="w-full max-w-xl mb-10">
            <ul className="flex flex-col  gap-7 md:gap-8">
              {menuLinks.map((link, index) => (
                <li
                  key={index}
                  ref={el => { linkHoldersRef.current[index] = el; }}
                >
                  {link.isPopup ? (
                    <button
                      onClick={openPopup}
                      className="flex ml-28 sm:ml-28 md:ml-30 lg:ml-32 gap-4 text-gray-900 text-2xl md:text-4xl font-extrabold hover:text-[#D4AF37] transition-colors tracking-wide group"
                    >
                      <span className="text-[#D4AF37] group-hover:scale-110 transition-transform">
                        {link.icon}
                      </span>
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.path}
                      className="flex ml-28 lg:mb-4 sm:ml-28 md:ml-30 lg:ml-32 gap-4 text-gray-900 text-2xl md:text-4xl font-extrabold hover:text-[#D4AF37] transition-colors tracking-wide group"
                      onClick={toggleMenu}
                    >
                      <span className="text-[#D4AF37] group-hover:scale-110 transition-transform">
                        {link.icon}
                      </span>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile: Contact & Social Block */}
          <div className="md:hidden w-full max-w-xs mx-auto mt-8">
            <div className="px-6 py-6 bg-white/90 rounded-lg shadow-lg">
              <div className="mb-4 text-center font-bold text-lg text-[#D4AF37]">
                Contact & Social
              </div>
              <div className="flex justify-center gap-6 mb-4">
                <a
                  href="https://www.instagram.com/krunals_academy/?hl=en"
                  className="hover:text-[#D4AF37] transition"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/company/krunal-s-academy/?originalSubdomain=in"
                  className="hover:text-[#D4AF37] transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://www.facebook.com/krunalsacademy/"
                  className="hover:text-[#D4AF37] transition"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-2xl" />
                </a>
                <a
                  href="https://www.justdial.com/Pune/Krunals-Academy/020PXX20-XX20-230324040426-B1E4_BZDET"
                  className="hover:text-[#D4AF37] transition"
                  aria-label="Justdial"
                >
                  <FaStar className="text-2xl" />
                </a>
              </div>
              <div className="text-center text-gray-700 text-base">
                <div>Krunal's Academy</div>
                <div>4th Floor, Krushkunj Building, Ghole Road, Above Union Bank, Shivaji Nagar, Pune (Municipal Corporation Pune City, Pune -411004, India</div>
                <div>+91-1234567890</div>
              </div>
            </div>
          </div>

          {/* Opening Hours (Hidden on Mobile) */}
        
        </main>

        {/* Sidebar (desktop/tablet) */}
        <aside className="hidden md:flex flex-col justify-between w-full max-w-[360px] lg:max-w-[460px] bg-white/95 border-l border-gray-200 p-8 lg:p-10 overflow-auto">
          <div>
            <div className="flex items-center gap-3 lg:mt-10 mb-8">
              <div className="relative w-16 h-12">
                <Image
                  src="/1000134308-removebg-preview.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-lg font-bold text-gray-800">
                Krunal&apos;s Academy
              </span>
            </div>
            <div className="space-y-2 text-gray-700 text-base mb-6">
              <div>th Floor, Krushkunj Building, Ghole Road, Above Union Bank, Shivaji Nagar, Pune Municipal Corporation Pune City, Pune -411004, India</div>
              <div>+91-1234567890</div>
            </div>
            <div className="bg-[#fff8e1] rounded-xl p-4 shadow-inner mb-6 border border-[#ffe082]">
              <div className="text-[#D4AF37] font-bold text-lg mb-2 text-center">
                Opening Hours
              </div>
              <ul className="text-gray-700 text-sm space-y-1">
                {openingHours.map((h, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{h.day}</span>
                    <span>
                      {h.open === 'Closed' ? (
                        <span className="text-red-500 font-semibold">
                          Closed
                        </span>
                      ) : (
                        <span>
                          {h.open}{' '}
                          <span className="mx-1 text-gray-400">/</span>{' '}
                          {h.close}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="flex gap-5 mt-8 justify-center">
              <a
                href="https://www.instagram.com/krunals_academy/?hl=en"
                className="hover:text-[#D4AF37] transition"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/krunal-s-academy/?originalSubdomain=in"
                className="hover:text-[#D4AF37] transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/krunalsacademy/"
                className="hover:text-[#D4AF37] transition"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://www.justdial.com/Pune/Krunals-Academy/020PXX20-XX20-230324040426-B1E4_BZDET"
                className="hover:text-[#D4AF37] transition"
                aria-label="Justdial"
              >
                <FaStar className="text-2xl" />
              </a>
            </div>
          </div>
        </aside>
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
