'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// @ts-expect-error TS2307
import AOS from 'aos';
import 'aos/dist/aos.css';
import FixedContactIcons from '@/components/elements/FixedContactIcons';
import Footer from '@/components/footer';

const CoursesPage: React.FC = () => {
  const coursesSectionRef = useRef<HTMLElement>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

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
      duration: '4 months',
      highlights: [
        'Comprehensive theory: hair science, tools, soft skills, and consultation',
        'Cutting techniques: basic, advanced, short, and fusion styles',
        'Coloring expertise: basic, advanced, and professional trainer sessions',
        'Hair treatments: spa, dandruff care, keratin, botox, and scalp health',
        'Practical skills: sectioning, blow-drying, ironing, tongs, and head massage',
        'Chemical services: smoothening and rebonding',
      ],
      specialAdditions: [
        'Full Takeaway Kit',
        'Unlimited Practice',
        '100+ Models',
        'ISO Registered Certificate',
        'Graduation Day Programme',
        '100% Job Guarantee',
        'External Exposure',
        'On Floor Experience',
      ],
    },
    {
      title: 'Male Barbering Course',
      description: 'Master modern and classic barbering skills, from scissor and clipper techniques to fades, beard styling, coloring, and spa treatments.',
      image: '/imagegallary.jpg',
      duration: '2 months',
      highlights: [
        'Tool handling, scissor and clipper techniques',
        'Fade haircuts: high, medium, low, razor, and mullet styles',
        'Zero-fade and razor-fade demos and hands-on practice',
        'Beard shaping, trimming, fading, and clean shave',
        'Hair coloring: global, cap highlights, weaving with foils',
        'Head massage, face cleanup, and spa applications',
        'Styling with blow drying, ironing, and curling techniques',
      ],
      specialAdditions: [
        'Full Takeaway Kit',
        'Unlimited Practice',
        '100+ Models',
        'ISO Registered Certificate',
        'Graduation Day Programme',
        '100% Job Guarantee',
        'External Exposure',
        'On Floor Experience',
      ],
    },
    {
      title: 'Advanced Skin and Beauty Therapy Course',
      description: 'Gain in-depth knowledge and hands-on expertise in skincare, waxing, facial therapies, and body treatments using advanced tools and professional techniques.',
      image: '/images/skin.jpg',
      duration: '4 months',
      highlights: [
        'Comprehensive theory: skin types, anatomy, hygiene, cosmetic chemistry, and facial machines',
        'Basic to advanced facial techniques including cleanup, deep cleansing, and hydra facial',
        'Hair removal methods: honey waxing, Italian waxing, Brazilian, peel-off, and fruit waxing',
        'Advanced skin treatments: anti-acne, anti-aging, detan, brightening, and hydrating facials',
        'Mask therapies: thermoherb, rubber, biological, paraffin, setting & non-setting masks',
        'Manicure and pedicure: basic, anti-tan, paraffin wax, and heel peel treatments',
        'Body care: back massage, body polishing, and combined machine-based therapies',
      ],
      specialAdditions: [
        'Full Takeaway Kit',
        'Unlimited Practice',
        '100+ Models',
        'ISO Registered Certificate',
        'Graduation Day Programme',
        '100% Job Guarantee',
        'External Exposure',
        'On Floor Experience',
      ],
    },
    {
      title: 'Nail Art Course',
      description: 'Master the art of nail design from the fundamentals to advanced techniques, including gel extensions, 3D designs, and artistic finishes like chrome, ombré, and marble art.',
      image: '/images/nailsart.jpg',
      duration: '25 days',
      highlights: [
        'Introduction to tools, brushes, and nail anatomy',
        'Types, shapes of nails, and client consultation basics',
        'Gel polish application and removal',
        'Gel extensions, overlays, refills, and 3D nail art',
        'Creative techniques: chrome, glitter, marble, ombré, and more',
        'Freehand painting, foil work, spider gel, blooming ink, and seasonal designs',
      ],
      specialAdditions: [
        'Full Takeaway Kit',
        'Unlimited Practice',
        '100+ Models',
        'ISO Registered Certificate',
        'Graduation Day Programme',
        '100% Job Guarantee',
        'External Exposure',
        'On Floor Experience',
      ],
    },
    {
      title: 'Makeup Artistry Course',
      description: 'Become a certified makeup artist by mastering a wide range of techniques for bridal, editorial, and high-definition makeup, tailored for all skin types and occasions.',
      image: '/images/one.jpg',
      duration: '45 days',
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
      specialAdditions: [
        'Full Takeaway Kit',
        'Unlimited Practice',
        '100+ Models',
        'ISO Registered Certificate',
        'Graduation Day Programme',
        '100% Job Guarantee',
        'External Exposure',
        'On Floor Experience',
      ],
    },
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

  const handleFlip = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
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
          <path stroke="currentColor" strokeWidth="2" d="M12 6.253v13m0-13C10.891 5.477 9.306 5 7.5 5S4.109 7.477 4.109 11.253v11.494C9.306 20.477 10.891 21 12.5 21s3.194-.523 4.891-1.747V7.753C15.694 8.977 14.109 9.5 12.5 9.5S9.306 8.977 7.609 7.753" />
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
              <div
                key={index}
                className="relative perspective-1000"
                style={{ height: '500px' }}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <motion.div
                  animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
                  className="relative w-full h-full rounded-2xl shadow-lg border border-[#E8E8E8] bg-[#FFFFFF]"
                  style={{ transformStyle: 'preserve-3d' }}
                  whileHover={{ y: -10, scale: 1.02, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' }}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden flex flex-col">
                    <div className="relative h-60">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover rounded-t-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 to-transparent rounded-t-2xl"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow items-center justify-between">
                      <h3 className="text-xl font-semibold text-[#D4AF37] mb-3 text-center">{course.title}</h3>
                      <p className="text-[#666666] mb-4 text-sm text-center">{course.description}</p>
                      <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: '#B8972F', boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)' }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-[#D4AF37] text-[#FFFFFF] font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300"
                        onClick={() => handleFlip(index)}
                      >
                        Explore Course
                      </motion.button>
                    </div>
                  </div>
                  {/* Back Side */}
                  <div
                    className="absolute inset-0 backface-hidden flex flex-col p-6 overflow-y-auto rounded-2xl bg-[#FFFFFF]"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">{course.title}</h3>
                    <p className="text-[#666666] mb-4 text-sm">{course.description}</p>
                    <div className="mb-4">
                      <h4 className="text-md font-medium text-[#D4AF37] mb-2">Duration:</h4>
                      <p className="text-[#666666] text-sm">{course.duration}</p>
                    </div>
                    <div className="mb-4">
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
                    <div className="mb-4">
                      <h4 className="text-md font-medium text-[#D4AF37] mb-2">Special Additions:</h4>
                      <ul className="space-y-2">
                        {course.specialAdditions.map((addition, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#00BCD4] mr-2">✓</span>
                            <span className="text-[#666666] text-sm">{addition}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1, backgroundColor: '#B8972F', boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)' }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-[#D4AF37] text-[#FFFFFF] font-semibold py-2 px-6 rounded-full shadow-md self-start mt-auto"
                      onClick={() => handleFlip(index)}
                    >
                      Back
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <svg className="absolute bottom-10 right-10 w-12 h-12 text-[#00BCD4] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="0">
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
              data-aos-delay="0"
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
              data-aos-delay="0"
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
