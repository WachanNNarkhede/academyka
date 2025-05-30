'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCheck, FaEye, FaPaintBrush, FaCut, FaHandSparkles, FaSpa } from 'react-icons/fa';
import { GiHairStrands, GiLipstick } from 'react-icons/gi';
// @ts-expect-error TS2307
import AOS from 'aos';
import 'aos/dist/aos.css';
import Popup from './elements/Popup';

interface Item {
  title: string;
  desc: string;
  icon: React.ReactElement;
  details: string[];
}

const Makeupservice = () => {
  const [activeTab, setActiveTab] = useState<'courses' | 'services'>('courses');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const coursesContent: Item[] = [
    {
      title: 'Female Hair Dressing Course',
      desc: 'Master the art of hair design, from classic cuts to advanced treatments, blending theory and hands-on practice to create confident professionals.',
      icon: <FaUserCheck />,
      details: [
        'Comprehensive theory: hair science, tools, soft skills, and consultation',
        'Cutting techniques: basic, advanced, short, and fusion styles',
        'Coloring expertise: basic, advanced, and professional trainer sessions',
        'Hair treatments: spa, dandruff care, keratin, botox, and scalp health',
        'Practical skills: sectioning, blow-drying, ironing, tongs, and head massage',
        'Chemical services: smoothening and rebonding',
      ],
    },
    {
      title: 'Male Barbering Course',
      desc: 'Master modern and classic barbering skills, from scissor and clipper techniques to fades, beard styling, coloring, and spa treatments.',
      icon: <FaEye />,
      details: [
        'Tool handling, scissor and clipper techniques',
        'Fade haircuts: high, medium, low, razor, and mullet styles',
        'Zero-fade and razor-fade demos and hands-on practice',
        'Beard shaping, trimming, fading, and clean shave',
        'Hair coloring: global, cap highlights, weaving with foils',
        'Head massage, face cleanup, and spa applications',
        'Styling with blow drying, ironing, and curling techniques',
      ],
    },
    {
      title: 'Nail Art Course',
      desc: 'Master the art of nail design from the fundamentals to advanced techniques, including gel extensions, 3D designs, and artistic finishes like chrome, ombré, and marble art.',
      icon: <FaPaintBrush />,
      details: [
        'Introduction to tools, brushes, and nail anatomy',
        'Types, shapes of nails, and client consultation basics',
        'Gel polish application and removal',
        'Gel extensions, overlays, refills, and 3D nail art',
        'Creative techniques: chrome, glitter, marble, ombré, and more',
        'Freehand painting, foil work, spider gel, blooming ink, and seasonal designs',
      ],
    },
    {
      title: 'Advanced Skin and Beauty Therapy Course',
      desc: 'Gain in-depth knowledge and hands-on expertise in skincare, waxing, facial therapies, and body treatments using advanced tools and professional techniques.',
      icon: <FaCut />,
      details: [
        'Comprehensive theory: skin types, anatomy, hygiene, cosmetic chemistry, and facial machines',
        'Basic to advanced facial techniques including cleanup, deep cleansing, and hydra facial',
        'Hair removal methods: honey waxing, Italian waxing, Brazilian, peel-off, and fruit waxing',
        'Advanced skin treatments: anti-acne, anti-aging, detan, brightening, and hydrating facials',
        'Mask therapies: thermoherb, rubber, biological, paraffin, setting & non-setting masks',
      ],
    },
  ];

  const servicesContent: Item[] = [
    {
      title: 'Makeup Services',
      desc: 'Get the perfect look for any special occasion with our expert makeup services.',
      icon: <GiLipstick />,
      details: [
        'Party Makeup – Glamorous look for events and celebrations',
        'Bridal Makeup – Professional full-coverage makeup for brides',
        'Reception Makeup – Stunning looks for post-wedding events',
        'Groom Makeup – Natural finish makeup for grooms',
        'Pre-wedding consultation – Personalized beauty planning',
        'Trial session – Try your look in advance',
        'Touch-up kit provided – Stay fresh throughout the event',
      ],
    },
    {
      title: 'Hair Styling & Updos',
      desc: 'Elegant and trendy hairstyles tailored to your occasion.',
      icon: <FaPaintBrush />,
      details: [
        'Russian Upstyle – Voluminous and modern updo styling',
        'Indian Updos – Traditional bun and braid styles',
        'Open Hair Style – Curls, waves, and straight styling',
        'Blowdry – Volume and shape with professional blowouts',
        'Tongs – Soft or tight curls using curling tongs',
        'Ironing – Sleek and smooth finish using flat iron',
        'Saree Draping – Professional saree pleating and pinning',
      ],
    },
    {
      title: 'Hair Cutting & Coloring',
      desc: 'Precision haircuts and customized coloring solutions.',
      icon: <FaCut />,
      details: [
        'Haircut – Stylish and trendy cuts for all hair types',
        'Hair Highlights – Brighten your look with streaks or foils',
        'Hair Balayage – Soft gradient coloring for a natural look',
        'Hair Coloring – Root touch-up to full-color transformations',
        'Color Consultation – Guidance for the right shade selection',
        'Bleach and Tone – Pre-lightening with balanced tones',
        'Color Correction – Fix previous color issues professionally',
      ],
    },
    {
      title: 'Hair Treatments',
      desc: 'Advanced treatments to restore and improve hair health.',
      icon: <GiHairStrands />,
      details: [
        'Hair Spa – Deep nourishment and relaxation',
        'Hairfall Treatment – Strengthening to reduce hair loss',
        'Dandruff Treatment – Scalp cleansing and relief',
        'Hair Botox – Anti-frizz and volume control',
        'Hair Keratin – Smoothing treatment for frizz-free hair',
        'Hair Nanoplasty – Chemical-free smoothing and shine',
        'Hair Smoothening – Manageable and sleek hair finish',
        'Hair Straightening – Permanent straight hair solution',
      ],
    },
    {
      title: 'Skin Care Services',
      desc: 'Glow with our full range of skin care and beauty treatments.',
      icon: <FaUserCheck />,
      details: [
        'Threading – Precise shaping of eyebrows and facial hair removal',
        'Waxing – Hair removal for arms, legs, and body',
        'Cleanup – Quick and effective facial cleansing',
        'Facial – Deep rejuvenating treatments for radiant skin',
        'Bleach – Lighten unwanted facial hair and pigmentation',
        'D-Tan – De-tanning solutions for brightening the skin',
        'Skin Analysis – Detailed skin health check-up',
        'Customized Treatments – Tailored facials for your skin type',
        'Product Recommendations – Suitable skincare advice',
        'Aftercare Guidance – Instructions to maintain results',
      ],
    },
    {
      title: 'Nail Services',
      desc: 'Beautiful nails with long-lasting finishes and detailed art.',
      icon: <FaHandSparkles />,
      details: [
        'Nail Art – Custom patterns, glitter, and more',
        'Gel Polish (Single/Multiple Colors) – Glossy, chip-free color',
        'Gel Extensions – Added length and strength to natural nails',
        'Overlays – Extra strength layer without extensions',
        'Refill – Maintenance for outgrown extensions or overlays',
        'Gel Polish Removal – Safe removal without damaging nails',
        'Gel Extensions Removal – Professional and gentle process',
      ],
    },
    {
      title: 'Editorial Makeup',
      desc: 'Creative and camera-ready looks for fashion and photo shoots.',
      icon: <FaSpa />,
      details: [
        'Concept Development – Visual planning and styling',
        'High-Fashion Looks – Avant-garde and editorial makeup',
        'Camera-Ready Techniques – Shine control and flawless base',
        'Creative Color Use – Bold and unique color applications',
        'Special Effects Basics – Light FX makeup for photoshoots',
      ],
    },
  ];

  const currentContent = activeTab === 'courses' ? coursesContent : servicesContent;

  return (
    <section className="py-12 px-4 sm:py-16 sm:px-6 bg-gray-50 relative min-h-screen">
      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12" data-aos="fade-down">
        <motion.button
          onClick={() => setActiveTab('courses')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold text-sm sm:text-base border-2 transition-all ${
            activeTab === 'courses' 
              ? 'bg-[#D4AF37] text-white border-[#D4AF37]' 
              : 'bg-white text-gray-900 border-[#D4AF37]'
          }`}
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Our Courses
        </motion.button>
        <motion.button
          onClick={() => setActiveTab('services')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold text-sm sm:text-base border-2 transition-all ${
            activeTab === 'services' 
              ? 'bg-[#D4AF37] text-white border-[#D4AF37]' 
              : 'bg-white text-gray-900 border-[#D4AF37]'
          }`}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          Our Services
        </motion.button>
      </div>

      <h2 
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {activeTab === 'courses' ? 'Makeup & Beauty Courses' : 'Premium Beauty Services'}
      </h2>

      {/* Content Cards */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {currentContent.map((item, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl text-center flex flex-col justify-between min-h-[280px] sm:min-h-[320px] border border-gray-100 transition-all"
            data-aos="fade-up"
            data-aos-delay={400 + (index * 100)}
          >
            <div>
              <div className="text-3xl sm:text-4xl text-[#D4AF37] mb-3 sm:mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
                {item.desc}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#D4AF37', color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 sm:px-5 sm:py-2 bg-gray-50 text-gray-900 border-2 border-[#D4AF37] rounded-full font-semibold text-xs sm:text-sm transition-all"
              onClick={() => setSelectedItem(item)}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* More Button */}
      <div className="flex justify-end mt-8 sm:mt-12 pr-4 sm:pr-8" data-aos="fade-left" data-aos-delay="800">
        <Link href={activeTab === 'courses' ? '/courses' : '/services'}>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: '#D4AF37', color: '#ffffff' }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 sm:px-6 sm:py-2.5 bg-gray-50 text-gray-900 border-2 border-[#D4AF37] rounded-full font-semibold text-sm sm:text-base flex items-center gap-2 transition-all"
          >
            More...
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.button>
        </Link>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {selectedItem && (
          <Popup item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>

      {/* Background decorative elements */}
      <svg className="absolute left-4 -bottom-12 h-24 w-24 opacity-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="1" fill="none" />
      </svg>
      <svg className="absolute right-4 -bottom-16 h-20 w-20 opacity-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l2 20h-4l2-20z" fill="#D4AF37" fillOpacity="0.3" />
      </svg>
    </section>
  );
};

export default Makeupservice;