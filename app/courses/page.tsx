'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// @ts-expect-error TS2307
import AOS from 'aos';
import 'aos/dist/aos.css';
import FixedContactIcons from '@/components/elements/FixedContactIcons';
import Footer from '@/components/footer';

const CoursesPage: React.FC = () => {
  const coursesSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 200,
      duration: 600,
      easing: 'ease-out',
      once: true,
      mirror: false,
      anchorPlacement: 'top-center',
      disable: window.innerWidth < 768,
    });
    AOS.refresh();
    return () => {
      AOS.refresh();
    };
  }, []);

  const courses = [
    {
      title: 'Female Hair Dressing Course',
      description: 'Master the art of hair design, from classic cuts to advanced treatments, blending theory and hands-on practice to create confident professionals.',
      image: '/images/fhc.jpg',
      highlights: [
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
      description: 'Master modern and classic barbering skills, from scissor and clipper techniques to fades, beard styling, coloring, and spa treatments.',
      image: '/imagegallary.jpg',
      highlights: [
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
      title: 'Advanced Skin and Beauty Therapy Course',
      description: 'Gain in-depth knowledge and hands-on expertise in skincare, waxing, facial therapies, and body treatments using advanced tools and professional techniques.',
      image: '/images/skin.jpg',
      highlights: [
        'Comprehensive theory: skin types, anatomy, hygiene, cosmetic chemistry, and facial machines',
        'Basic to advanced facial techniques including cleanup, deep cleansing, and hydra facial',
        'Hair removal methods: honey waxing, Italian waxing, Brazilian, peel-off, and fruit waxing',
        'Advanced skin treatments: anti-acne, anti-aging, detan, brightening, and hydrating facials',
        'Mask therapies: thermoherb, rubber, biological, paraffin, setting & non-setting masks',
        'Manicure and pedicure: basic, anti-tan, paraffin wax, and heel peel treatments',
        'Body care: back massage, body polishing, and combined machine-based therapies',
      ],
    },
    {
      title: 'Nail Art Course',
      description: 'Master the art of nail design from the fundamentals to advanced techniques, including gel extensions, 3D designs, and artistic finishes like chrome, ombré, and marble art.',
      image: '/images/nailsart.jpg',
      highlights: [
        'Introduction to tools, brushes, and nail anatomy',
        'Types, shapes of nails, and client consultation basics',
        'Gel polish application and removal',
        'Gel extensions, overlays, refills, and 3D nail art',
        'Creative techniques: chrome, glitter, marble, ombré, and more',
        'Freehand painting, foil work, spider gel, blooming ink, and seasonal designs',
      ],
    },
    {
      title: 'Makeup Artistry Course',
      description: 'Become a certified makeup artist by mastering a wide range of techniques for bridal, editorial, and high-definition makeup, tailored for all skin types and occasions.',
      image: '/images/one.jpg',
      highlights: [
        'Foundation knowledge: skin analysis, color theory, and product knowledge',
        'Day, evening, party, and bridal makeup looks',
        'Contouring and highlighting for various face shapes',
        'Eye makeup styles: smokey, cut-crease, glitter, halo, and more',
        'Brow shaping, lash application, and lip correction techniques',
        'High-definition (HD) and airbrush makeup techniques',
        'Makeup for photography, fashion shows, and media',
        'Skin prep, hygiene, tool sanitization, and client consultation',
      ],
    }
  ];

  const practicalSkills = [
    'Consultation',
    'Salon Hygiene',
    'Hair Cut Basic',
    'Hair Cut Designing',
    'Styling',
    'Colour Basic',
    'Colour Advance',
    'Spa Services',
    'Scalp Treatment',
    'Form Services',
  ];

  const vocabularySkills = [
    'Hair Science',
    'Communication',
    'Self Hygiene',
    'Soft Skills',
    'Work Presentation',
    'Seminar Presentation',
    'Project Presentation',
    'Colour Thought Process',
    'Salon Ownership',
    'Interviews for Brand',
  ];

  const scrollToCourses = () => {
    coursesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FFFFFF] text-[#1A1A1A] min-h-screen">
      <FixedContactIcons />
      <section className="relative h-[55vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/two.jpg"
            alt="Beauty Academy Courses"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>
        <div className="relative mt-16 mb-28 h-[50vh] text-center px-4 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="absolute inset-0 bg-[#1A1A1A]/30 backdrop-blur-sm rounded-3xl -z-10"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-26 text-white tracking-tight">
            Transform Your Passion into Mastery
          </h1>
          <p className="text-xl text-[#FFFFFF]/90 mb-8 max-w-3xl mx-auto">
            Unlock your potential with our world-class beauty and grooming courses, designed to elevate your career.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#B8972F', color: '#FFFFFF' }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D4AF37] text-[#FFFFFF] font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="400"
            onClick={scrollToCourses}
          >
            Discover Courses
          </motion.button>
        </div>
        <svg className="absolute top-10 left-10 w-16 h-16 text-[#00BCD4] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </section>
      <section ref={coursesSectionRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D4AF37]">
              Our Signature Courses
            </h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto">
              Master the art of beauty with our expertly crafted programs, tailored for aspiring professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                whileHover={{ y: -10, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }}
                className="bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-lg border border-[#E8E8E8] flex flex-col"
              >
                <div className="relative h-60">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">{course.title}</h3>
                  <p className="text-[#666666] mb-4 flex-grow">{course.description}</p>
                  <div className="border-t border-[#E8E8E8] pt-4">
                    <h4 className="text-md font-medium text-[#D4AF37] mb-2">What You&apos;ll Learn:</h4>
                    <ul className="space-y-2">
                      {course.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#00BCD4] mr-2">•</span>
                          <span className="text-[#666666] text-sm">{highlight}</span>
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
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D4AF37]">
              Comprehensive Skill Development
            </h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto">
              Build a robust skill set to thrive in the beauty industry with practical and professional training.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              data-aos="fade-right"
              data-aos-delay="300"
              whileHover={{ scale: 1.02 }}
              className="bg-[#F9F9F9] p-8 rounded-2xl shadow-lg border border-[#E8E8E8]"
            >
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">Practical Development Skills</h3>
              <ul className="grid grid-cols-2 gap-4">
                {practicalSkills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#00BCD4] mr-2">•</span>
                    <span className="text-[#666666] text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              data-aos="fade-left"
              data-aos-delay="300"
              whileHover={{ scale: 1.02 }}
              className="bg-[#F9F9F9] p-8 rounded-2xl shadow-lg border border-[#E8E8E8]"
            >
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">Vocabulary Skills</h3>
              <ul className="grid grid-cols-2 gap-4">
                {vocabularySkills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#00BCD4] mr-2">•</span>
                    <span className="text-[#666666] text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
           
          </div>
        </div>
        <svg className="absolute top-10 left-10 w-14 h-14 text-[#00BCD4] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </section>
      <Footer />
    </div>
  );
};

export default CoursesPage;