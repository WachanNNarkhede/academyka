"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// @ts-expect-error TS2307
import AOS from "aos";
import "aos/dist/aos.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Accommodation", path: "/accommodation" },
  { label: "Gallery", path: "/gallery" },
  { label: "Courses", path: "/courses" },
];

const socialLinks = [
  { label: "X", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
];

function Footer() {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 800,
      easing: "ease-in-out-quad",
      once: true,
    });
  }, []);

  return (
    <footer className="footer-container relative bg-gray-900 text-white py-16 px-4 sm:px-8 h-50 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent opacity-20 mt-16" />

      <div className="footer-grid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 z-10">
        {/* Logo/Branding */}
        <div className="flex flex-col items-center md:items-start" data-aos="fade-up">
          <Link href="/" className="footer-logo relative">
            <Image
              src="/1000134308-removebg-preview.png"
              alt="Krunal's Academy Logo"
              width={180}
              height={60}
              className="object-contain"
              priority
            />
          </Link>
          <p className="mt-4 text-gray-300 text-center md:text-left">
            Empowering Beauty Professionals Since 2010
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start" data-aos="fade-up" data-aos-delay="200">
          <h3 className="footer-heading text-xl font-bold text-[#D4AF37] mb-4 font-['Warnes',_cursive]">Explore</h3>
          <ul className="footer-nav-list space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-gray-300 hover:text-[#D4AF37] transition-all duration-300 hover:shadow-[0_0_10px_#D4AF37] px-2 py-1 rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start" data-aos="fade-up" data-aos-delay="400">
          <h3 className="footer-heading text-xl font-bold text-[#D4AF37] mb-4 font-['Warnes',_cursive]">Connect</h3>
          <ul className="footer-social-list space-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-[#D4AF37] transition-all duration-300 hover:shadow-[0_0_10px_#D4AF37] px-2 py-1 rounded"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div className="flex flex-col items-center md:items-start" data-aos="fade-up" data-aos-delay="600">
          <h3 className="footer-heading text-xl font-bold text-[#D4AF37] mb-4 font-['Warnes',_cursive]">Get in Touch</h3>
          <p className="text-gray-300 mb-2">info@kunal.com</p>
          <p className="text-gray-300 mb-4">45599 9966 5566</p>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="footer-copyright mt-12 text-center text-gray-300 border-t border-[#D4AF37]/20 pt-6"
        data-aos="fade-in"
        data-aos-delay="1000"
      >
        <p>© {new Date().getFullYear()} Krunal&apos;s Academy. All rights reserved.</p>
      </div>

      {/* Decorative glow */}
      <div
        className="footer-glow absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-3xl"
        data-aos="fade-in"
        data-aos-delay="1200"
      />

      {/* Decorative SVG */}
      <svg className="absolute top-4 right-4 h-12 w-12 opacity-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l2 20h-4l2-20z" fill="#D4AF37" fillOpacity="0.3" />
      </svg>

      {/* Scoped Inline Styles */}
      <style>{`
        .footer-container {
          position: relative;
          z-index: 1;
        }

        .footer-container .footer-grid {
          display: grid;
          gap: 3rem; /* Matches gap-12 (12 * 0.25rem) */
        }

        .footer-container .footer-logo img {
          width: 180px;
          height: 60px;
        }

        @media (min-width: 768px) {
          .footer-container .footer-grid {
            grid-template-columns: repeat(4, Rosetta Stone
          }

          .footer-container .footer-logo img {
            width: 180px;
            height: 60px;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 40px 15px;
          }

          .footer-container .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-container .footer-logo img {
            width: 150px;
            height: 50px;
          }

          .footer-container .footer-heading {
            font-size: 1.25rem;
          }

          .footer-container .text-gray-300 {
            font-size: 0.9rem;
          }

          .footer-container .footer-copyright {
            margin-top: 2rem;
            padding-top: 1.5rem;
          }

          .footer-container .footer-glow {
            width: 40vw;
            height: 40vw;
          }

          .footer-container .footer-nav-list,
          .footer-container .footer-social-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: center;
            margin: 0 auto;
          }

          .footer-container .footer-nav-list li,
          .footer-container .footer-social-list li {
            flex: 0 0 auto;
          }

          .footer-container .footer-nav-list li a,
          .footer-container .footer-social-list li a {
            font-size: 0.9rem;
            padding: 0.25rem 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 30px 10px;
          }

          .footer-container .footer-grid {
            gap: 1.5rem;
          }

          .footer-container .footer-logo img {
            width: 120px;
            height: 40px;
          }

          .footer-container .footer-heading {
            font-size: 1.125rem;
          }

          .footer-container .text-gray-300 {
            font-size: 0.85rem;
          }

          .footer-container .footer-copyright {
            margin-top: 1.5rem;
            padding-top: 1rem;
          }

          .footer-container .footer-glow {
            width: 50vw;
            height: 50vw;
          }

          .footer-container .footer-nav-list,
          .footer-container .footer-social-list {
            gap: 0.4rem;
          }

          .footer-container .footer-nav-list li a,
          .footer-container .footer-social-list li a {
            font-size: 0.85rem;
            padding: 0.2rem 0.4rem;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;