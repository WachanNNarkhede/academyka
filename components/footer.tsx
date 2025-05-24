"use client";
import React, { useEffect } from "react";
import Link from "next/link";
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
    <footer className="footer-container relative bg-[#1a0a12] text-white py-16 px-4 sm:px-8 h-50 overflow-hidden">
      {/* Pink background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#ff4785]/10 to-transparent opacity-20 mt-16" />

      <div className="footer-grid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 z-10">
        {/* Logo/Branding */}
        <div className="flex flex-col items-center md:items-start" data-aos="fade-up">
          <Link
            href="/"
            className="footer-logo text-3xl font-bold text-[#ff85a2] font-['Warnes',_cursive] tracking-wide relative"
          >
            Krunal&apos;s Academy
          </Link>
          <p className="mt-4 text-[#d4a8b8] text-center md:text-left">
            Empowering Beauty Professionals Since 2010
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start" data-aos="fade-up" data-aos-delay="200">
          <h3 className="footer-heading text-xl font-bold text-[#ff85a2] mb-4 font-['Warnes',_cursive]">Explore</h3>
          <ul className="footer-nav-list space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-[#d4a8b8] hover:text-[#ff4785] transition-all duration-300 hover:shadow-[0_0_10px_#ff85a2] px-2 py-1 rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start" data-aos="fade-up" data-aos-delay="400">
          <h3 className="footer-heading text-xl font-bold text-[#ff85a2] mb-4 font-['Warnes',_cursive]">Connect</h3>
          <ul className="footer-social-list space-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[#d4a8b8] hover:text-[#ff4785] transition-all duration-300 hover:shadow-[0_0_10px_#ff85a2] px-2 py-1 rounded"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div className="flex flex-col items-center md:items-start" data-aos="fade-up" data-aos-delay="600">
          <h3 className="footer-heading text-xl font-bold text-[#ff85a2] mb-4 font-['Warnes',_cursive]">Get in Touch</h3>
          <p className="text-[#d4a8b8] mb-2">info@kunal.com</p>
          <p className="text-[#d4a8b8] mb-4">45599 9966 5566</p>
          <div className="footer-newsletter w-full max-w-xs">
            <input
              type="email"
              placeholder="Join our newsletter"
              className="w-full p-3 bg-[#2a121f] text-[#d4a8b8] border border-[#ff85a2]/30 rounded focus:outline-none focus:border-[#ff85a2] focus:shadow-[0_0_10px_#ff85a2] transition-all duration-300"
            />
            <button
              className="mt-3 w-full p-3 bg-[#ff85a2] text-[#1a0a12] font-bold rounded hover:bg-[#ff4785] hover:shadow-[0_0_15px_#ff85a2] transition-all duration-300"
              data-aos="pulse"
              data-aos-delay="800"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="footer-copyright mt-12 text-center text-[#d4a8b8] border-t border-[#ff85a2]/20 pt-6"
        data-aos="fade-in"
        data-aos-delay="1000"
      >
        <p>© {new Date().getFullYear()} Krunal&apos;s Academy. All rights reserved.</p>
      </div>

      {/* Decorative pink glow */}
      <div
        className="footer-glow absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-[#ff4785]/10 blur-3xl"
        data-aos="fade-in"
        data-aos-delay="1200"
      />

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

        @media (min-width: 768px) {
          .footer-container .footer-grid {
            grid-template-columns: repeat(4, 1fr);
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

          .footer-container .footer-logo {
            font-size: 1.8rem;
          }

          .footer-container .footer-heading {
            font-size: 1.25rem;
          }

          .footer-container .text-[#d4a8b8] {
            font-size: 0.9rem;
          }

          .footer-container .footer-newsletter {
            max-width: 100%;
          }

          .footer-container .footer-newsletter input {
            padding: 0.75rem;
            font-size: 0.9rem;
          }

          .footer-container .footer-newsletter button {
            padding: 0.75rem;
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

          .footer-container .footer-logo {
            font-size: 1.5rem;
          }

          .footer-container .footer-heading {
            font-size: 1.125rem;
          }

          .footer-container .text-[#d4a8b8] {
            font-size: 0.85rem;
          }

          .footer-container .footer-newsletter input {
            padding: 0.6rem;
            font-size: 0.85rem;
          }

          .footer-container .footer-newsletter button {
            padding: 0.6rem;
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