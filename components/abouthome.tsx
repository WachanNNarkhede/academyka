import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#D4AF37] font-bold text-3xl sm:text-3xl tracking-widest">ABOUT US</span>
          <h2 className="text-xl mr-4 sm:mr-0 sm:text-4xl font-bold mt-2 text-gray-900">Crafting Beauty Professionals</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>

        {/* Academy Overview - Modern Split Layout */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-16 md:mb-24 items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-54 sm:h-80 md:h-96 w-[90%] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/kap.jpeg"
                alt="Academy Interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute w-18 sm:w-18 md:w-25 -bottom-4 left-70 sm:left-150 md:left-95 sm:-right-4 md:-bottom-6 md:-right-6 bg-[#D4AF37] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg text-sm md:text-base">
              <span className="font-bold">Since 2009</span>
            </div>
            {/* Subtle SVG Decoration */}
            <svg className="absolute -top-4 -left-4 h-12 w-12 opacity-30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="1" fill="none" />
            </svg>
          </div>
          
          <div className="w-[88%] mr-4 sm:mr-0 lg:w-1/2">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">Premier Beauty Education</h3>
            <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
              <p>
                Krunal&apos;s Beauty Academy stands as Pune&apos;s foremost professional training institute, offering comprehensive 
                certification programs in cosmetology, aesthetic treatments, and salon management. Our curriculum 
                blends technical mastery with business acumen and soft skills development.
              </p>
              <p>
                With imminent expansion to Mumbai, Nagpur, and Nashik, we&apos;re bringing our innovative approach to 
                beauty education across Maharashtra. Our graduates excel in both domestic and international beauty 
                markets, equipped with cutting-edge techniques and professional polish.
              </p>
            </div>
            
            <div className="mt-6 md:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border-l-4 border-[#D4AF37]">
                <h4 className="font-bold text-gray-900 text-lg sm:text-xl">20+</h4>
                <p className="text-xs sm:text-sm">Certified Courses</p>
              </div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border-l-4 border-[#D4AF37]">
                <h4 className="font-bold text-gray-900 text-lg sm:text-xl">100%</h4>
                <p className="text-xs sm:text-sm">Practical Training</p>
              </div>
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="bg-gray-50 h-[100vh] sm:h-auto w-[80%] sm:w-auto rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#D4AF37]/10"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#D4AF37]/10"></div>
          <svg className="absolute top-4 right-4 h-10 w-10 opacity-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l2 20h-4l2-20z" fill="#D4AF37" fillOpacity="0.4" />
          </svg>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900 relative z-10">
            Our <span className="text-[#D4AF37]">Founders</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
            {/* Founder 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-40 w-40 sm:h-48 sm:w-48 mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
                  <Image
                    src="/kunal.jpg"
                    alt="Krunal Gaikwad"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 160px, 200px"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900">Krunal Gaikwad</h4>
                <p className="text-[#D4AF37] font-medium mb-4 sm:mb-6 text-sm sm:text-base">Master Hair Artist</p>
                
                <div className="space-y-3 sm:space-y-4 w-full px-2 sm:pl-8 sm:pr-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-left text-gray-700 text-xs sm:text-sm">National Award Winner (Hair Avengers 2021)</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-left text-gray-700 text-xs sm:text-sm">Former Regional Trainer for Lakmé</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-left text-gray-700 text-xs sm:text-sm">Expert in Advanced Hair Techniques</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-left text-gray-700 text-xs sm:text-sm">Mentor to Over 500 Stylists</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Founder 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-40 w-40 sm:h-48 sm:w-48 mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
                  <Image
                    src="/pooja.jpg"
                    alt="Pooja"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 160px, 200px"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900">Pooja</h4>
                <p className="text-[#D4AF37] font-medium mb-4 sm:mb-6 text-sm sm:text-base">Skin Care Specialist</p>
                
                <div className="space-y-3 sm:space-y-4 w-full px-2 sm:pl-8 sm:pr-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-left text-gray-700 text-xs sm:text-sm">CIDESCO International Certified (2020)</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-left text-gray-700 text-xs sm:text-sm">Former Faculty Trainer at VLCC Pune</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-left text-gray-700 text-xs sm:text-sm">Expert in Aesthetic Treatments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
