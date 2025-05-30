'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// @ts-expect-error TS2307
import AOS from 'aos';
import 'aos/dist/aos.css';
import FixedContactIcons from '@/components/elements/FixedContactIcons';
import Footer from '@/components/footer';

const ServicesPage: React.FC = () => {
  const servicesSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 100,
      duration: 800,
      easing: 'ease-out',
      once: true,
      mirror: true,
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
        'Smoothening',
        'Straightening'
      ],
      image: '/images/three.jpg',
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
      image: '/images/two.jpg',
      description: 'Reveal your most radiant skin with our professional skincare treatments.'
    },
    {
      title: 'Make Up',
      services: [
        'Party Make Up',
        'Bridal Makeup',
        'Reception Make Up',
        'Russian Upstyle',
        'Indian Updo',
        'Open Hair Style',
        'Saree Draping',
        'Groom Make-up'
      ],
      image: '/images/one.jpg',
      description: 'Perfect your look for any occasion with our expert makeup artistry.'
    },
    {
      title: 'Nail Services',
      services: [
        'Nail Art',
        'Gel Polish',
        'Nail Extensions',
        'Manicure',
        'Pedicure',
        'Nail Repair',
        '3D Nail Design'
      ],
      image: '/images/three.jpg',
      description: 'Elevate your style with our creative and professional nail services.'
    }
  ];

  const scrollToServices = () => {
    servicesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FFFFFF] text-[#1A1A1A] min-h-screen">
      <FixedContactIcons />
      <section className="relative h-[55vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/two.jpg"
            alt="Beauty Services"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>
        <div className="relative mt-16 mb-28 h-[50vh] text-center px-4 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="absolute inset-0 bg-[#1A1A1A]/30 backdrop-blur-sm rounded-3xl -z-10"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-26 text-white tracking-tight">
            Premium Beauty Services
          </h1>
          <p className="text-xl text-[#FFFFFF]/90 mb-8 max-w-3xl mx-auto">
            Experience top-tier beauty treatments tailored to enhance your natural glow.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#B8972F', color: '#FFFFFF' }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D4AF37] text-[#FFFFFF] font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="400"
            onClick={scrollToServices}
          >
            Explore Services
          </motion.button>
        </div>
        <svg className="absolute top-10 left-10 w-16 h-16 text-[#00BCD4] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </section>
      <section ref={servicesSectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D4AF37]">
              Our Signature Services
            </h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto">
              Discover our range of professional beauty treatments designed to make you shine.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                whileHover={{ y: -10, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }}
                className="bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-lg border border-[#E8E8E8] flex flex-col"
              >
                <div className="relative h-60">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">{category.title}</h3>
                  <p className="text-[#666666] mb-4 flex-grow">{category.description}</p>
                  <div className="border-t border-[#E8E8E8] pt-4">
                    <h4 className="text-md font-medium text-[#D4AF37] mb-2">Services Offered:</h4>
                    <ul className={`space-y-2 ${category.title === 'Hair Services' ? 'grid grid-cols-2 gap-x-4 gap-y-2' : ''}`}>
                      {category.services.map((service, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#00BCD4] mr-2">•</span>
                          <span className="text-[#666666] text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <svg className="absolute bottom-10 right-10 w-12 h-12 text-[#00BCD4] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;