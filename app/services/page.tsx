'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// @ts-expect-error TS2307
import AOS from 'aos';
import 'aos/dist/aos.css';
import FixedContactIcons from '@/components/elements/FixedContactIcons';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 100,
      duration: 800,
      easing: 'ease-out',
      once: true,
      mirror: false,
      anchorPlacement: 'top-center',
    });
    AOS.refreshHard();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  const serviceCategories = [
    {
      title: 'Hair Services',
      services: [
        'Haircut',
        'Hair Highlights',
        'Hair Balayage',
        'Blowdry',
        'Tongs',
        'Ironing',
        'Hair Spa',
        'Hairfall Treatment',
        'Dandruff Treatment',
        'Hair Botox',
        'Hair Keratin',
        'Hair Nanoplasty',
        'SMOOTHENING',
        'Straightening'
      ],
      image: '/hair-service.jpg',
      description: 'Transform your hair with our expert services ranging from cuts to advanced treatments.'
    },
    {
      title: 'Skin Services',
      services: [
        'Threading',
        'Waxing',
        'Cleanup',
        'Bleach',
        'Dtan',
        'Facial',
        'Manicure',
        'Pedicure'
      ],
      image: '/skin-service.jpg',
      description: 'Reveal your most radiant skin with our professional skincare treatments.'
    },
    {
      title: 'Make Up',
      services: [
        'Party Make Up',
        'Bridal Make Up',
        'Reception Make Up',
        'Russian Upstyle',
        'Indian Up do\'s',
        'Open Hair Style',
        'Saree Draping',
        'Groom Make Up'
      ],
      image: '/makeup-service.jpg',
      description: 'Perfect your look for any occasion with our professional makeup services.'
    },
    {
      title: 'Nail Services',
      services: [
        'Nail art',
        'Gel polish',
        'Gel extensions',
        'Overlays',
        'Refill',
        'Gel polish removal',
        'Gel extensions removal'
      ],
      image: '/nail-service.jpg',
      description: 'Express your style with our creative nail designs and treatments.'
    }
  ];

  return (
    <div className="bg-[#ffffff] text-[#1c0a12] min-h-screen">
      <FixedContactIcons />

      {/* Hero Section */}
      <section className="relative h-[50vh]  sm:h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute  inset-0">
          <Image
            src="/beauty-services-hero.jpg"
            alt="Beauty Academy Services"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fff785]/80 to-[#e91e63]/80"></div>
        </div>
        <div className="relative mt-16 text-center px-4 max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight">
            Professional Beauty Services
          </h1>
          <p className="text-xl md:text-2xl text-[#ffffff]/90 mb-10 max-w-3xl mx-auto">
            Experience top-quality beauty treatments performed by our skilled professionals.
          </p>
        <motion.button
  whileHover={{ scale: 1.05, backgroundColor: '#ff5c8d', color: '#ffffff' }}
  whileTap={{ scale: 0.95 }}
  className="bg-[#ff8ab5] text-[#ffffff] font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300 text-sm md:text-base whitespace-nowrap"
  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
  aria-label="Book Appointment"
  data-aos="zoom-in"
  data-aos-delay="300"
>
  Book Your Appointment
</motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-36 px-4 sm:px-6 lg:px-8 bg-[#fff5f9] relative">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#1c0a12]">
              Our Comprehensive Services
            </h2>
            <p className="text-lg md:text-xl text-[#b7849a] max-w-3xl mx-auto">
              Explore our wide range of professional beauty treatments and services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
                whileHover={{ y: -12, boxShadow: '0 16px 32px rgba(0, 0, 0, 0.2)' }}
                className="bg-[#ffffff] rounded-3xl overflow-hidden shadow-xl border border-[#ffe4ec] flex flex-col transition-all duration-300 aos-reset"
              >
                <div className="relative h-64">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c0a12]/70 to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#ff8ab5] mb-3">{category.title}</h3>
                  <p className="text-[#b7849a] mb-4 text-sm md:text-base">{category.description}</p>
                  <div className="mb-6 flex-grow">
                    <ul className="space-y-2">
                      {category.services.map((service, i) => (
                        <li key={i} className="text-[#1c0a12] text-sm md:text-base">
                          • {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#ff5c8d', color: '#ffffff' }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#fff5f9] border-2 border-[#ff8ab5] text-[#ff8ab5] font-semibold py-3 px-8 rounded-full transition-all duration-300"
                  >
                    Book Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#ff8ab5]/10">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1c0a12]">
            Ready for Your Transformation?
          </h2>
          <p className="text-lg text-[#b7849a] mb-8 max-w-3xl mx-auto">
            Book your appointment today and experience professional beauty services at our academy.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#ff5c8d', color: '#ffffff' }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ff8ab5] text-[#ffffff] font-semibold py-4 px-12 rounded-full shadow-xl transition-all duration-300 text-lg"
          >
            Schedule Now
          </motion.button>
        </div>
      </section>

      {/* CSS Reset for AOS Elements */}
      <style jsx>{`
        .aos-reset {
          transform: none !important;
          transition: transform 0s !important;
        }
        .aos-animate.aos-reset {
          transform: none !important;
        }
      `}</style>
    </div>
  );
};
export default ServicesPage;