'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
// @ts-expect-error TS2307
import AOS from 'aos';
import 'aos/dist/aos.css';
import FixedContactIcons from '@/components/elements/FixedContactIcons';
import Footer from '@/components/footer';

const ServicesPage: React.FC = () => {
  const servicesSectionRef = useRef<HTMLElement>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      offset: 50,
      delay: 100,
      duration: 400,
      easing: 'ease-out',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
      disable: window.innerWidth < 768,
    });
    AOS.refresh();
    console.log('AOS initialized');
    return () => {
      AOS.refresh();
    };
  }, []);

  useEffect(() => {
    AOS.refresh();
    console.log('AOS refreshed due to expandedCard change:', expandedCard);
  }, [expandedCard]);

  const services = [
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
        'Straightening',
      ],
      image: '/hairservices.jpg',
      description: 'Transform your hair with our expert services ranging from cuts to advanced treatments.',
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
        'Pedicure',
      ],
      image: '/skincare.jpg',
      description: 'Reveal your most radiant skin with our professional skincare treatments.',
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
        'Groom Make-up',
      ],
      image: '/makeupservicesw.png',
      description: 'Perfect your look for any occasion with our expert makeup artistry.',
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
        '3D Nail Design',
      ],
      image: '/nailsservices.jpg',
      description: 'Elevate your style with our creative and professional nail services.',
    },
  ];

  const scrollToServices = () => {
    if (servicesSectionRef.current) {
      const offsetTop = servicesSectionRef.current.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      console.log('Scrolling to services section');
    }
  };

  const handleToggle = (index: number) => {
    console.log(`Toggling card ${index}. Current expandedCard: ${expandedCard}`);
    setExpandedCard(expandedCard === index ? null : index);
    console.log(`New expandedCard: ${expandedCard === index ? null : index}`);
  };

  return (
    <div className="bg-[#FFFFFF] text-[#1A1A1A] min-h-screen">
      <FixedContactIcons />
      
      {/* Hero Section */}
      <section className="relative h-[55vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/two.jpg"
            alt="Luxury Beauty Services"
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
            Experience exceptional beauty treatments tailored to enhance your natural features.
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
      </section>

      {/* Services Section */}
      <section ref={servicesSectionRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D4AF37]">
              Our Signature Services
            </h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto">
              Discover our comprehensive range of beauty services designed to pamper and transform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`relative rounded-2xl shadow-lg border border-[#E8E8E8] bg-[#FFFFFF] transition-all duration-300 ${
                  expandedCard === index ? 'min-h-[600px]' : 'h-[450px]'
                }`} // Moved motion.div to outer container
                whileHover={{ y: -10, scale: 1.02, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' }}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                onHoverStart={() => console.log(`Hover started on card ${index}`)}
                onHoverEnd={() => console.log(`Hover ended on card ${index}`)}
              >
                <div className="relative h-60">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 to-transparent rounded-t-2xl"></div>
                </div>
                <div className="p-6 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-[#D4AF37] mb-3 text-center">{service.title}</h3>
                  <p className="text-[#666666] mb-4 text-sm text-center">{service.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: '#B8972F', boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)' }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#D4AF37] text-[#FFFFFF] font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300"
                    onClick={() => handleToggle(index)}
                  >
                    {expandedCard === index ? 'Hide Details' : 'View Details'}
                  </motion.button>
                </div>
                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="p-6 bg-[#FFFFFF] border-t border-[#E8E8E8]"
                      onAnimationStart={() => console.log(`Expanding card ${index}`)}
                      onAnimationComplete={() => console.log(`Card ${index} expansion complete`)}
                    >
                      <h4 className="text-md font-medium text-[#D4AF37] mb-2">Services Offered:</h4>
                      <ul className="space-y-2">
                        {service.services.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#00BCD4] mr-2">•</span>
                            <span className="text-[#666666] text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D4AF37]">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto">
              We combine expertise, premium products, and personalized care for exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              data-aos="fade-up" 
              data-aos-delay="100"
              whileHover={{ y: -5 }}
              className="bg-[#F9F9F9] p-8 rounded-2xl shadow-md border border-[#E8E8E8]"
            >
              <div className="text-[#D4AF37] text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Expert Professionals</h3>
              <p className="text-[#666666] text-sm">
                Our certified specialists have extensive training and stay updated with the latest techniques and trends in the beauty industry.
              </p>
            </motion.div>
            
            <motion.div 
              data-aos="fade-up" 
              data-aos-delay="200"
              whileHover={{ y: -5 }}
              className="bg-[#F9F9F9] p-8 rounded-2xl shadow-md border border-[#E8E8E8]"
            >
              <div className="text-[#D4AF37] text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Premium Products</h3>
              <p className="text-[#666666] text-sm">
                We use only high-quality, professional-grade products that are safe, effective, and tailored to your specific needs.
              </p>
            </motion.div>
            
            <motion.div 
              data-aos="fade-up" 
              data-aos-delay="300"
              whileHover={{ y: -5 }}
              className="bg-[#F9F9F9] p-8 rounded-2xl shadow-md border border-[#E8E8E8]"
            >
              <div className="text-[#D4AF37] text-4xl mb-4">💖</div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Personalized Care</h3>
              <p className="text-[#666666] text-sm">
                Every service begins with a consultation to understand your unique needs and desired outcomes for customized treatments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;