'use client';

import React, { useEffect } from 'react';
//  @ts-expect-error TS2307
import AOS from 'aos';
import 'aos/dist/aos.css';

type Service = {
  title: string;
  icon: string;
  description: string;
};

function Wsus() {
  useEffect(() => {
    AOS.init({
      once: true,
      delay: 200,
      duration: 1000,
    });
  }, []);

  const services: Service[] = [
    {
      title: 'Hair Cutting',
      icon: '✂️',
      description: 'Cutting is an art of carving, an art of bringing out clients imagination in actual form. At the end, confidence is the best hairstyle and only a Professional Hair Artist can achieve it.'
    },
    {
      title: 'Skin Care',
      icon: '🌸',
      description: 'Bringing out your hidden beauty and layering it with positive attitude is done by our Professional skin experts. They remove stress and make you feel energetic for upcoming challenges. Being a skin expert means beautifying the future.'
    },
    {
      title: 'Makeup Artistry',
      icon: '🎨',
      description: 'Highlighting facial features with right colors is what our makeup artists do best. They bring out your hidden beauty in front of the world with their expert techniques.'
    },
    {
      title: 'Nail Art',
      icon: '/nail.svg',
      description: 'Nails are not just for cutting anymore. Our Nail Artists bring life to your nails, adding that extra touch to your natural beauty with creative designs.'
    },
    {
      title: 'Barbering',
      icon: '✂️',
      description: 'Our barbers are true artists for men\'s looks. Think of a style and our barber can sketch it on your head with precision and skill.'
    },
    {
      title: 'Eyebrow Design',
      icon: '👁️',
      description: 'Perfectly shaped eyebrows frame the face and enhance your natural features. Our experts create brows that complement your unique facial structure.'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Why Choose US <span className="text-[#D4AF37]">KRUNAL&apos;S ACADEMY</span> 
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={300 + (index * 100)}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-[#D4AF37]">
                {service.icon.endsWith('.svg') ? (
                  <img src={service.icon} alt={service.title} className="w-10 h-10 inline-block" />
                ) : (
                  service.icon
                )}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{service.description}</p>
              <div className="mt-4 sm:mt-6 h-1 w-16 sm:w-20 bg-gradient-to-r from-[#D4AF37] to-gray-200 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Background decorative elements */}
        <svg className="absolute left-4 -bottom-12 h-24 w-24 opacity-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="1" fill="none" />
        </svg>
        <svg className="absolute right-4 -bottom-16 h-20 w-20 opacity-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l2 20h-4l2-20z" fill="#D4AF37" fillOpacity="0.3" />
        </svg>
      </div>
    </section>
  );
}

export default Wsus;