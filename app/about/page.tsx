'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// @ts-expect-error TS2307
import AOS from 'aos';
import 'aos/dist/aos.css';
import FixedContactIcons from '@/components/elements/FixedContactIcons';
import Footer from '@/components/footer';


const AboutPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1000,
    });
  }, []);

  const certificates = [
    { id: 1, title: 'Best Hair Artist Award 2015', image: '/images/six.jpg' },
    { id: 2, title: 'Hair Avengers Award 2021', image: '/images/six.jpg' },
    { id: 3, title: 'CIDESCO Certification 2020', image: '/images/six.jpg' },
    { id: 4, title: 'VLCC Faculty Certification', image: '/images/six.jpg' }
  ];

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen text-gray-800  overflow-x-hidden">
      <FixedContactIcons/>
      {/* Hero Section */}
<section className="relative bg-gradient-to-b from-pink-200 to-white h-[35vh] sm:h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0">
    <Image 
      src="/images/five.jpg" 
      alt="Academy Interior"
      fill
      className="object-cover"
      priority
    />
  </div>
  
  {/* Blurred overlay container - only behind text */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div 
      className="relative w-full max-w-4xl px-4 py-8 sm:py-12 md:py-16"
      data-aos="fade-up"
    >
      {/* Blurred background only for text area */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-3xl -z-10"></div>
      
      {/* Text content */}
      <div className="relative text-center px-4 sm:px-6">
        <h1 className="text-[4.5vh] mt-16 sm:text-[8vh] md:text-[10vh] lg:text-[9vh] font-bold mb-4 sm:mb-6 text-white leading-tight tracking-tight">
          ABOUT KRUNAL&apos;S ACADEMY
        </h1>
        
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="mt-6 sm:mt-10"
        >
          <div className="w-16 sm:w-20 h-1 bg-pink-400 mx-auto"></div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Academy Overview */}
     <section className="py-20 px-4 pt-52 h-[70vh] md:h-[70vh] overflow-hidden sm:px-6 lg:px-8 bg-white sm:bg-gradient-to-br sm:from-pink-50 sm:via-white sm:to-pink-50">
  <div className="max-w-7xl mx-auto">
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-pink-600 -mt-40 sm:-mt-32">The Academy</h2>
        <div className="space-y-6 text-lg text-gray-700 sm:text-base">
          <p data-aos="fade-up" data-aos-delay="100" className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-pink-400">
            We are a professional School for beauty training academy in Pune, Maharashtra. With a Vision of expanding in Mumbai, Nagpur, Nashik etc.
          </p>
          <p data-aos="fade-up" data-aos-delay="200" className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-pink-400">
            We offer certified beauty courses in cosmetology - Hair, Skin, makeup, Nail and salon management with personality development and soft skills.
          </p>
          <p data-aos="fade-up" data-aos-delay="300" className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-pink-400">
            The education is designed to prepare students for exciting careers in beauty and fashion industry in India and abroad.
          </p>
        </div>
      </div>
      <div 
        data-aos="fade-left"
        data-aos-duration="1000"
        className="relative h-80 md:h-96 rounded-lg overflow-hidden border-4 border-pink-100 shadow-lg sm:shadow-xl sm:hover:scale-105 sm:transition-transform sm:duration-300"
      >
        <Image 
          src="/ourAcad.jpg" 
          alt="Academy Classroom"
          fill
          className="object-cover sm:scale-110 sm:transition-transform sm:duration-500"
        />
      </div>
    </div>
  </div>
</section>

      {/* Our Teachers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-pink-50">
  <div className="max-w-7xl mx-auto">
    <h2 
      data-aos="fade-up"
      className="text-3xl md:text-4xl font-bold mb-16 text-center text-pink-600"
    >
      Meet Our Expert Faculty
    </h2>

    {/* Kunal Gaikwad */}
    <div 
      data-aos="fade-right"
      className="grid md:grid-cols-2 gap-12 mb-24 items-center"
    >
      <div className="relative h-80 md:h-[400px] w-full md:w-auto rounded-lg overflow-hidden border-4 border-pink-200 shadow-lg">
        <Image 
          src="/Krunalpic3.jpg" 
          alt="Kunal Gaikwad"
          fill
          className="object-cover object-top"  // Ensures portrait crops properly
          style={{ aspectRatio: '3/4' }}  // Standard portrait ratio
        />
      </div>
      <div>
        <h3 className="text-2xl md:text-4xl font-bold mb-4 text-pink-600">Kunal Gaikwad</h3>
        <div className="space-y-6 text-gray-700">
          <p>
            With over 12 years of experience in the beauty industry, Kunal specializes in advanced hair techniques and salon management.
          </p>
          <div className="bg-white p-6 rounded-lg border-l-4 border-pink-400 shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-pink-600">Achievements:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                Won Best Hair Artist Award Pune, 2015
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                Won Hair Avengers Award 2021 on national level
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                Promoted to Regional Trainer Lakme in 2019
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                Handled 28 branches all over Maharashtra
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Pooja */}
    <div 
      data-aos="fade-left"
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      <div className="md:order-2 relative h-80 md:h-[400px] w-full md:w-auto rounded-lg overflow-hidden border-4 border-pink-200 shadow-lg">
        <Image 
          src="/PoojaMamonchair.jpg" 
          alt="Pooja"
          fill
          className="object-cover object-top"  // Ensures portrait crops properly
          style={{ aspectRatio: '3/4' }}  // Standard portrait ratio
        />
      </div>
      <div className="md:order-1">
        <h3 className="text-2xl md:text-4xl font-bold mb-4 text-pink-600">Pooja</h3>
        <div className="space-y-6 text-gray-700">
          <p>
            International certified skincare specialist with expertise in advanced dermatological treatments and cosmetology.
          </p>
          <div className="bg-white p-6 rounded-lg border-l-4 border-pink-400 shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-pink-600">Achievements:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                Completed CIDESCO International Course in 2020
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                Selected as Faculty trainer at VLCC, Pune
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                Specialized in advanced facial techniques
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                Trained over 500 students in skincare
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Certificates Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
              Our Certifications
            </h2>
            <div className="w-20 h-0.5 bg-pink-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                data-aos="fade-up"
                data-aos-delay={cert.id * 100}
                className="cursor-pointer group"
                onClick={() => setSelectedCertificate(cert.id)}
              >
                <div className="relative h-60 rounded-lg overflow-hidden border-2 border-pink-100 bg-white shadow-md group-hover:border-pink-300 transition-all duration-300">
                  <Image 
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0  flex items-end p-4">
                    <h3 className="text-white font-medium text-sm md:text-base">{cert.title}</h3>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
  <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-white md:bg-pink-50">
  <div className="max-w-7xl mx-auto">
    <div data-aos="fade-up" className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Image Section - Enhanced for Mobile */}
      <div className="relative w-full h-64 md:h-96 rounded-2xl md:rounded-lg overflow-hidden border-4 border-pink-200 shadow-xl md:shadow-lg transform transition-all hover:scale-[1.02] hover:shadow-2xl">
        <Image 
          src="/11.webp" 
          alt="Beauty Academy Training"
          fill
          className="object-cover"
          priority
        />
        {/* Mobile-only decorative elements */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
          <h2 className="text-2xl font-bold text-white">Our Training Philosophy</h2>
        </div>
      </div>

      {/* Content Section - Enhanced for Mobile */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-600 leading-tight">
          Our Goal: <span className="text-pink-800">Shaping Confident</span> Beauty Professionals
        </h2>
        
        <div className="space-y-6 text-gray-700">
          {/* Each paragraph with mobile enhancements */}
          <div className="p-4 md:p-0 bg-white/50 md:bg-transparent rounded-xl md:rounded-none shadow-md md:shadow-none">
            <p className="text-base md:text-lg">
              At our academy, we are dedicated to empowering students to become exceptional beauty professionals and confident trainers.
            </p>
          </div>
          
          <div className="p-4 md:p-0 bg-white/50 md:bg-transparent rounded-xl md:rounded-none shadow-md md:shadow-none">
            <p className="text-base md:text-lg">
              Through extensive hands-on practice, we build their confidence in client handling. Weekly speech sessions enhance soft skills.
            </p>
          </div>
          
          <div className="p-4 md:p-0 bg-white/50 md:bg-transparent rounded-xl md:rounded-none shadow-md md:shadow-none">
            <p className="text-base md:text-lg">
              We provide internal mock interviews to ensure they ace real-world opportunities with personalized guidance.
            </p>
          </div>
          
          <div className="p-4 md:p-0 bg-white/50 md:bg-transparent rounded-xl md:rounded-none shadow-md md:shadow-none">
            <p className="text-base md:text-lg font-medium text-pink-700 md:text-gray-700">
              Our promise is to shape careers, fostering potential and empowering excellence in the beauty industry.
            </p>
          </div>
        </div>

        {/* Mobile-only CTA button */}
        <button className="md:hidden ml-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
          Learn About Our Programs
        </button>
      </div>
    </div>
  </div>
</section>
      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 ">
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden border-4 border-pink-200 shadow-2xl">
            <button 
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-10 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors shadow-md"
            >
              &times;
            </button>
            <div className="relative h-[70vh]">
              <Image 
                src={certificates.find(c => c.id === selectedCertificate)!.image}
                alt={certificates.find(c => c.id === selectedCertificate)!.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 text-center border-t border-pink-200 bg-pink-50">
              <h3 className="text-xl font-semibold text-pink-600">
                {certificates.find(c => c.id === selectedCertificate)!.title}
              </h3>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default AboutPage;