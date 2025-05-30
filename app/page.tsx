'use client';

import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// @ts-expect-error TS2307
import AOS from 'aos';
import 'aos/dist/aos.css';
import Herohome from '../components/herohome';
import Wsus from '@/components/wsus';
import Makeupservice from '@/components/makeupservice';
import Testimonials from '@/components/testimonials';
import Abouthome from '@/components/abouthome';
import FixedContactIcons from '@/components/elements/FixedContactIcons';
import ContactPopup from '@/components/elements/ContactPopup';
import Footer from '@/components/footer';

// Custom SVG components
const ScissorsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-8 sm:w-48">
    <path d="M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM20 7l-8.5 8.5M15 4l5 5m0 5l-5 5m-8.5-8.5l7 7" />
  </svg>
);

const LipstickIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-8 sm:w-48">
    <path d="M7 13h10v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8z" />
    <path d="M12 13V3m0 0L9 6m3-3l3 6" />
  </svg>
);

const NailPolishIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" className="w-8 sm:w-48">
    <path d="M12 12v.01M12 6v.01M12 18v.01" />
    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
  </svg>
);

const FlowerIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-8 sm:w-48">
    <path d="M6 6h12v2H6V6zm0 2h12v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8zm6 8v6" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-8 sm:w-48">
    <path d="M8 6h8v2H8V6zm0 2h8v10a2 2 0 01-2 2H10a2 2 0 01-2-2V8zm4-2v2" />
  </svg>
);

const CrownIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="w-8 sm:w-48">
    <path d="M6 15h4l2-3h5a2 2 0 012 2v2a2 2 0 01-2 2h-5l-2-3H6a2 2 0 01-2-2v-2a2 2 0 012-2zM10 15v4" />
  </svg>
);

export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [loadingComplete, setLoadingComplete] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [showIcons, setShowIcons] = useState<boolean>(false);
  const loadingContainerRef = useRef<HTMLDivElement>(null);
  const loadingRectRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLParagraphElement>(null);
  const decorRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (loadingComplete) {
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out-quad',
      });

      setTimeout(() => setShowContent(true), 100);
      setTimeout(() => setShowIcons(true), 300);
    }
  }, [loadingComplete]);

  useEffect(() => {
    const warnesLink = document.createElement('link');
    warnesLink.href = 'https://fonts.googleapis.com/css2?family=Warnes&display=swap';
    warnesLink.rel = 'stylesheet';
    document.head.appendChild(warnesLink);

    const countInterval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(countInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    const isMobile = window.innerWidth < 640;
    const initialWidth = isMobile ? '90vw' : '80vw';
    const initialHeight = isMobile ? '70vh' : '60vh';

    gsap.set(loadingRectRef.current, {
      width: initialWidth,
      height: initialHeight,
      x: '-50%',
      y: '-50%',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '16px',
    });

    const tl = gsap.timeline({
      onComplete: () => {
        setLoadingComplete(true);
        document.head.removeChild(warnesLink);
      },
    });

    tl.to(loadingRectRef.current, {
      width: '100vw',
      height: '100vh',
      borderRadius: '0px',
      duration: 3,
      ease: 'power3.inOut',
    })
      .to(
        counterRef.current,
        { fontSize: isMobile ? '10vh' : '18vh', opacity: 1, duration: 1 },
        0,
      )
      .from(
        decorRefs.current,
        {
          opacity: 0,
          y: isMobile ? 10 : 20,
          stagger: 0.1,
          duration: 1.5,
        },
        0.5,
      )
      .to(loadingContainerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => {
          if (loadingContainerRef.current) {
            loadingContainerRef.current.style.display = 'none';
          }
        },
      }, '+=0.3');

    return () => {
      clearInterval(countInterval);
      tl.kill();
    };
  }, []);

  const addDecorRef = (el: HTMLDivElement | null, index: number) => {
    decorRefs.current[index] = el;
  };

  return (
    <>
      <Head>
        <title>KRUNAL&apos;S ACADEMY | The School Of Hair, Skin, Make up & Nail</title>
        <meta name="description" content="Empowering Beauty Professionals" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {!loadingComplete && (
        <div
          ref={loadingContainerRef}
          className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center overflow-x-hidden"
        >
          <div
            ref={loadingRectRef}
            className="absolute top-1/2 left-1/2 flex items-center justify-center overflow-hidden"
          >
            <p
              ref={counterRef}
              className="text-[10vh] sm:text-[12vh] md:text-[18vh] font-bold text-[#D4AF37] opacity-0 z-10"
              style={{ fontFamily: "'Warnes', cursive", textShadow: '0 0 15px rgba(212, 175, 55, 0.7)' }}
            >
              {counter}%
            </p>

            <div ref={(el) => addDecorRef(el, 0)} className="absolute top-[15%] left-[15%] sm:top-1/4 sm:left-1/4 opacity-70">
              <ScissorsIcon />
            </div>
            <div ref={(el) => addDecorRef(el, 1)} className="absolute bottom-[15%] right-[15%] sm:bottom-1/4 sm:right-1/4 opacity-70">
              <LipstickIcon />
            </div>
            <div ref={(el) => addDecorRef(el, 2)} className="absolute top-[20%] right-[20%] sm:top-1/3 sm:right-1/3 opacity-60">
              <NailPolishIcon />
            </div>
            <div ref={(el) => addDecorRef(el, 3)} className="absolute bottom-[20%] left-[20%] sm:bottom-1/3 sm:left-1/3 opacity-60">
              <FlowerIcon />
            </div>
            <div ref={(el) => addDecorRef(el, 4)} className="absolute top-[10%] right-[10%] sm:top-1/5 sm:right-1/5 opacity-50">
              <SparkleIcon />
            </div>
            <div ref={(el) => addDecorRef(el, 5)} className="absolute bottom-[10%] left-[10%] sm:bottom-1/5 sm:left-1/5 opacity-50">
              <CrownIcon />
            </div>
          </div>
        </div>
      )}

      {showContent && (
        <div
          className="content overflow-x-hidden overflow-y-hidden"
          style={{
            backgroundColor: '#ffffff',
            color: '#1a1a1a',
            minHeight: '100vh',
            fontFamily: 'sans-serif',
            opacity: showContent ? 1 : 0,
            transition: 'opacity 500ms ease-out',
          }}
        >
          <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

          {showIcons && <FixedContactIcons />}

          <div data-aos="fade-up" data-aos-delay="200">
            <Herohome />
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <Abouthome />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <Wsus />
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <Makeupservice />
          </div>
          <section className="py-16 px-8 bg-gray-50" data-aos="fade-up" data-aos-delay="600">
            <h2 className="text-4xl text-center mb-12 text-gray-900">
              Academy Milestones
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
              {[
                { number: '500+', label: 'Students Trained' },
                { number: '50+', label: 'Industry Experts' },
                { number: '10+', label: 'Years Experience' },
                { number: '95%', label: 'Placement Rate' },
              ].map((highlight, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={700 + index * 100}
                  className="bg-white/80 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="text-4xl font-bold text-[#D4AF37] mb-2">
                    {highlight.number}
                  </p>
                  <p className="text-gray-700">{highlight.label}</p>
                </div>
              ))}
            </div>
          </section>
          <div data-aos="fade-up" data-aos-delay="500">
            <Testimonials />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}