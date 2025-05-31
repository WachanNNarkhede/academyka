'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaInfoCircle, FaHotel, FaImages, FaBook, FaInstagram, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
// @ts-expect-error TS2307
import AOS from 'aos';
import 'aos/dist/aos.css';

const navLinks = [
  { label: 'Home', path: '/', icon: <FaHome className="text-[#00BCD4] mr-1" /> },
  { label: 'About', path: '/about', icon: <FaInfoCircle className="text-[#00BCD4] mr-1" /> },
  { label: 'Accommodation', path: '/accommodation', icon: <FaHotel className="text-[#00BCD4] mr-1" /> },
  { label: 'Gallery', path: '/gallery', icon: <FaImages className="text-[#00BCD4] mr-1" /> },
  { label: 'Courses', path: '/courses', icon: <FaBook className="text-[#00BCD4] mr-1" /> },
];

const socialLinks = [
{ 
  label: 'Justdial', 
  href: 'https://www.justdial.com/Pune/Krunals-Academy/020PXX20-XX20-230324040426-B1E4_BZDET', 
  icon: <FaStar className="text-[#00BCD4] mr-1" /> 
},
  { label: 'Instagram', href: 'https://www.instagram.com/krunals_academy/?hl=en', icon: <FaInstagram className="text-[#00BCD4] mr-1" /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/krunal-s-academy/?originalSubdomain=in', icon: <FaLinkedin className="text-[#00BCD4] mr-1" /> },
  { label: 'Facebook', href: 'https://www.facebook.com/krunalsacademy/', icon: <FaFacebook className="text-[#00BCD4] mr-1" /> },
];

const contactInfo = [
  { label: 'krunalgaikwad21@gmail.com', icon: <FaEnvelope className="text-[#00BCD4] mr-1" /> },
  { label: '8637707077', icon: <FaPhone className="text-[#00BCD4] mr-1" /> },
  { 
    label: 'Location on Map', 
    icon: <FaMapMarkerAlt className="text-[#00BCD4] mr-1" />, 
    href: 'https://maps.app.goo.gl/FfhsNyANfLcwvJj2A' 
  },
];

function Footer() {
  useEffect(() => {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        delay: 100,
        duration: 600,
        easing: 'ease-in-out',
        once: true,
      });
      AOS.refresh();
    }
  }, []);

  return (
    <footer className="relative bg-[#1A1A1A] text-white py-6 px-4 sm:px-6 lg:px-8 max-h-[400px] lg:max-h-[280px] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 flex-col">
          {/* Logo/Branding */}
          <div className="flex flex-col items-center md:items-start min-h-[40px] border-b border-[#D4AF37]/70 pb-3 sm:pb-0 sm:border-b-0 sm:border-r" data-aos="fade-up">
            <Link href="/" className="relative">
              <Image
                src="/1000134308-removebg-preview.png"
                alt="Krunal's Academy Logo"
                width={100}
                height={30}
                className="object-contain sm:w-[120px] sm:h-[40px] md:w-[160px] md:h-[50px]"
                priority
              />
            </Link>
            <p className="mt-2 text-[#666666] text-[10px] sm:text-xs text-center md:text-left">
              Empowering Beauty Since 2010
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start min-h-[40px] border-b border-[#D4AF37]/70 py-3 sm:py-2 sm:border-b-0 sm:border-r" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-sm sm:text-base font-semibold text-[#D4AF37] mb-1 font-['Warnes',cursive]">Explore</h3>
            <ul className="flex flex-row flex-wrap justify-center md:flex-col gap-1.5 md:gap-1">
              {navLinks.map((link) => (
                <li key={link.path} className="flex items-center">
                  {link.icon}
                  <Link
                    href={link.path}
                    className="text-[#FFFFFF] text-[10px] sm:text-xs hover:text-[#D4AF37] transition-all duration-200 hover:shadow-[0_0_4px_#D4AF37] px-1.5 py-0.5 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start min-h-[40px] border-b border-[#D4AF37]/70 py-3 sm:py-2 sm:border-b-0 sm:border-r" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-sm sm:text-base font-semibold text-[#D4AF37] mb-1 font-['Warnes',cursive]">
              Connect
            </h3>
            <ul className="flex flex-row flex-wrap justify-center md:flex-col gap-1.5 md:gap-1">
              {socialLinks.map((link) => (
                <li key={link.label} className="flex items-center">
                  {link.icon}
                  <a
                    href={link.href}
                    className="text-[#FFFFFF] text-[10px] sm:text-xs hover:text-[#D4AF37] transition-all duration-200 hover:shadow-[0_0_4px_#D4AF37] px-1.5 py-0.5 rounded"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start min-h-[40px] py-3 sm:py-2" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-sm sm:text-base font-semibold text-[#D4AF37] mb-1 font-['Warnes',cursive]">Get in Touch</h3>
            <ul className="space-y-0.5 flex flex-row gap-4 md:flex-col justify-center md:justify-start">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center text-[#666666] text-[10px] sm:text-xs">
                  {info.icon}
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D4AF37] transition-all duration-200"
                    >
                      {info.label}
                    </a>
                  ) : (
                    <span>{info.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Decorative Wave Line */}
        <div className="my-2 sm:my-10 overflow-hidden hidden sm:block">
          <div className="my-4">
            <svg className="w-full h-2 text-[#D4AF37] opacity-50" viewBox="0 0 100 2" preserveAspectRatio="none">
              <path d="M0 1 H25 L30 0 L35 2 L40 0 H75 L80 2 L85 0 L90 2 H100" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="text-center text-[#666666] text-[10px] sm:text-xs border-t border-[#D4AF37]/20 pt-2"
        data-aos="fade-in"
        data-aos-delay="400"
      >
        <p>© {new Date().getFullYear()} Krunal&apos;s Academy. All rights reserved.</p>
      </div>

      {/* Decorative Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#D4AF37]/10 blur-2xl"
        data-aos="fade-in"
        data-aos-delay="500"
      />

      {/* Decorative SVGs */}
      <svg className="absolute top-3 right-3 h-6 w-6 text-[#00BCD4] opacity-30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3l-2 6h4l-2-6zm0 12l-2 6h4l-2-6z" fill="currentColor" />
      </svg>
      <svg className="absolute top-3 left-3 h-6 w-6 text-[#00BCD4] opacity-30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 18l6-12 6 12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>

      {/* Scoped Inline Styles */}
      <style>{`
        .footer-container {
          position: relative;
          z-index: 1;
        }

        @media (min-width: 1024px) {
          .footer-container .grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
          .footer-container .text-base {
            font-size: 1rem;
          }
          .footer-container .text-xs {
            font-size: 0.75rem;
          }
          .footer-container .my-2 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .footer-container {
            padding: 1.25rem;
          }
          .footer-container .grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
          .footer-container .text-base {
            font-size: 0.875rem;
          }
          .footer-container .text-xs {
            font-size: 0.65rem;
          }
          .footer-container .my-2 {
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
          }
          .footer-container .pt-2 {
            padding-top: 0.25rem;
          }
        }

        @media (max-width: 639px) {
          .footer-container {
            padding: 0.75rem;
            max-height: 400px;
          }
          .footer-container .grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
            display: flex;
            flex-direction: column;
            justify-items: center;
          }
          .footer-container .text-base {
            font-size: 0.75rem;
          }
          .footer-container .text-xs {
            font-size: 0.6rem;
          }
          .footer-container .my-2 {
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
          }
          .footer-container .pt-2 {
            padding-top: 0.25rem;
          }
          .footer-container .w-32 {
            width: 24vw;
            height: 24vw;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
