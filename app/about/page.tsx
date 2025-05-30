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
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F9F9F9] min-h-screen text-[#1A1A1A] overflow-x-hidden">
      <FixedContactIcons/>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#F9F9F9] to-[#FFFFFF] h-[35vh] sm:h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/five.jpg" 
            alt="Academy Interior"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="relative w-full max-w-4xl px-4 py-8 sm:py-12 md:py-16"
            data-aos="fade-up"
          >
            <div className="absolute inset-0 bg-[#1A1A1A]/30 backdrop-blur-sm rounded-3xl -z-10"></div>
            <div className="relative text-center px-4 sm:px-6">
              <h1 className="text-[4.5vh] mt-16 sm:text-[8vh] md:text-[10vh] lg:text-[9vh] font-bold mb-4 sm:mb-6 text-white leading-tight tracking-tight">
                ABOUT KRUNAL&apos;S ACADEMY
              </h1>
              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="mt-6 sm:mt-10"
              >
                <div className="w-16 sm:w-20 h-1 bg-[#D4AF37] mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <svg className="absolute top-10 left-10 w-16 h-16 text-[#00BCD4] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg> */}
      </section>
      {/* Academy Overview */}
      <section className="py-20 px-4 pt-52 h-[70vh] md:h-[70vh] overflow-hidden sm:px-6 lg:px-8 bg-[#FFFFFF] sm:bg-gradient-to-br sm:from-[#F9F9F9] sm:via-[#FFFFFF] sm:to-[#F9F9F9]">
        <div className="max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-[#D4AF37] -mt-40 sm:-mt-12">The Academy</h2>
              <div className="space-y-6 text-xl text-[#666666] sm:text-base">
                <p data-aos="fade-up" data-aos-delay="100" className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#D4AF37]">
                  We are a professional School for beauty training academy in Pune, Maharashtra. With a Vision of expanding in Mumbai, Nagpur, Nashik etc.
                </p>
                <p data-aos="fade-up" data-aos-delay="200" className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#D4AF37]">
                  We offer certified beauty courses in cosmetology - Hair, Skin, makeup, Nail and salon management with personality development and soft skills.
                </p>
                <p data-aos="fade-up" data-aos-delay="300" className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#D4AF37]">
                  The education is designed to prepare students for exciting careers in beauty and fashion industry in India and abroad.
                </p>

                <p data-aos="fade-up" data-aos-delay="300" className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#D4AF37]">
                  The education is designed to prepare students for exciting careers in beauty and fashion industry in India and abroad.
                </p>
                <p data-aos="fade-up" data-aos-delay="300" className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#D4AF37]">
                  The education is designed to prepare students for exciting careers in beauty and fashion industry in India and abroad.
                </p>
              </div>
            </div>
            <div 
              data-aos="fade-left"
              data-aos-duration="1000"
              className="relative h-80 md:h-96 rounded-lg overflow-hidden border-4 border-[#E8E8E8] shadow-lg sm:shadow-xl sm:hover:scale-105 sm:transition-transform sm:duration-300"
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
        {/* <svg className="absolute bottom-10 right-10 w-12 h-12 text-[#00BCD4] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg> */}
      </section>
      {/* Our Teachers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto">
          <h2 
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#D4AF37]"
          >
            Meet Our Expert Faculty
          </h2>
          <div 
            data-aos="fade-right"
            className="grid md:grid-cols-2 gap-12 mb-24 items-center"
          >
            <div className="relative h-80 md:h-[400px] w-full md:w-auto rounded-lg overflow-hidden border-4 border-[#E8E8E8] shadow-lg">
              <Image 
                src="/Krunalpic3.jpg" 
                alt="Kunal Gaikwad"
                fill
                className="object-cover object-top"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-4 text-[#D4AF37]">Kunal Gaikwad</h3>
              <div className="space-y-6 text-[#666666]">
                <p>
                  With over 12 years of experience in the beauty industry, Kunal specializes in advanced hair techniques and salon management.
                </p>
                <div className="bg-[#FFFFFF] p-6 rounded-lg border-l-4 border-[#D4AF37] shadow-md">
                  <h4 className="text-xl font-semibold mb-3 text-[#D4AF37]">Achievements:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      Won Best Hair Artist Award Pune, 2015
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      Won Hair Avengers Award 2021 on national level
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      Promoted to Regional Trainer Lakme in 2019
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      Handled 28 branches all over Maharashtra
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div 
            data-aos="fade-left"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="md:order-2 relative h-80 md:h-[400px] w-full md:w-auto rounded-lg overflow-hidden border-4 border-[#E8E8E8] shadow-lg">
              <Image 
                src="/PoojaMamonchair.jpg" 
                alt="Pooja"
                fill
                className="object-cover object-top"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 text-[#D4AF37]">Pooja</h3>
              <div className="space-y-6 text-[#666666]">
                <p>
                  International certified skincare specialist with expertise in advanced dermatological treatments and cosmetology.
                </p>
                <div className="bg-[#FFFFFF] p-6 rounded-lg border-l-4 border-[#D4AF37] shadow-md">
                  <h4 className="text-xl font-semibold mb-3 text-[#D4AF37]">Achievements:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      Completed CIDESCO International Course in 2020
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      Selected as Faculty trainer at VLCC, Pune
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      Specialized in advanced facial techniques
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4">
              Our Certifications
            </h2>
            <div className="w-20 h-0.5 bg-[#D4AF37] mx-auto"></div>
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
                <div className="relative h-60 rounded-lg overflow-hidden border-2 border-[#E8E8E8] bg-white shadow-md group-hover:border-[#D4AF37] transition-all duration-300">
                  <Image 
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 flex items-end p-4">
                    <h3 className="text-white font-medium text-sm md:text-base">{cert.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <svg className="absolute bottom-10 right-10 w-12 h-12 text-[#00BCD4] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg> */}
      </section>
      {/* Technology Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F9F9F9] to-[#FFFFFF] md:bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto">
          <div data-aos="fade-up" className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative w-full h-64 md:h-96 rounded-2xl md:rounded-lg overflow-hidden border-4 border-[#E8E8E8] shadow-xl md:shadow-lg transform transition-all hover:scale-[1.02] hover:shadow-2xl">
              <Image 
                src="/11.webp" 
                alt="Beauty Academy Training"
                fill
                className="object-cover"
                priority
              />
              <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 to-transparent flex items-end p-6">
                <h2 className="text-2xl font-bold text-white">Our Training Philosophy</h2>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#D4AF37] leading-tight">
                Our Goal: <span className="text-[#1A1A1A]">Shaping Confident</span> Beauty Professionals
              </h2>
              <div className="space-y-6 text-[#666666]">
                <div className="p-4 md:p-0 bg-[#FFFFFF]/50 md:bg-transparent rounded-xl md:rounded-none shadow-md md:shadow-none">
                  <p className="text-base md:text-lg">
                    At our academy, we are dedicated to empowering students to become exceptional beauty professionals and confident trainers.
                  </p>
                </div>
                <div className="p-4 md:p-0 bg-[#FFFFFF]/50 md:bg-transparent rounded-xl md:rounded-none shadow-md md:shadow-none">
                  <p className="text-base md:text-lg">
                    Through extensive hands-on practice, we build their confidence in client handling. Weekly speech sessions enhance soft skills.
                  </p>
                </div>
                <div className="p-4 md:p-0 bg-[#FFFFFF]/50 md:bg-transparent rounded-xl md:rounded-none shadow-md md:shadow-none">
                  <p className="text-base md:text-lg">
                    We provide internal mock interviews to ensure they ace real-world opportunities with personalized guidance.
                  </p>
                </div>
                <div className="p-4 md:p-0 bg-[#FFFFFF]/50 md:bg-transparent rounded-xl md:rounded-none shadow-md md:shadow-none">
                  <p className="text-base md:text-lg font-medium text-[#D4AF37] md:text-[#666666]">
                    Our promise is to shape careers, fostering potential and empowering excellence in the beauty industry.
                  </p>
                </div>
              </div>
              <button className="md:hidden ml-20 bg-gradient-to-r from-[#D4AF37] to-[#B8972F] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Learn About Our Programs
              </button>
            </div>
          </div>
        </div>
        <svg className="absolute top-10 left-10 w-16 h-16 text-[#00BCD4] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </section>
      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-[#1A1A1A]/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#FFFFFF] rounded-lg overflow-hidden border-4 border-[#E8E8E8] shadow-2xl">
            <button 
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-10 bg-[#D4AF37] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#B8972F] transition-colors shadow-md"
            >
              ×
            </button>
            <div className="relative h-[70vh]">
              <Image 
                src={certificates.find(c => c.id === selectedCertificate)!.image}
                alt={certificates.find(c => c.id === selectedCertificate)!.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 text-center border-t border-[#E8E8E8] bg-[#F9F9F9]">
              <h3 className="text-xl font-semibold text-[#D4AF37]">
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