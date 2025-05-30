'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { FaWifi, FaUtensils, FaBed, FaShower, FaParking, FaTv } from 'react-icons/fa';
import { MdSecurity, MdAcUnit, MdLocalLaundryService } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
// @ts-expect-error TS2307
import AOS from 'aos';
import 'aos/dist/aos.css';
import FixedContactIcons from '@/components/elements/FixedContactIcons';
import Footer from '@/components/footer';

const AccommodationPage = () => {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1000,
    });
  }, []);

  const amenities = [
    { icon: <FaBed className="text-2xl" />, name: 'Comfy Beds' },
    { icon: <FaShower className="text-2xl" />, name: 'Attached Bathroom' },
    { icon: <FaWifi className="text-2xl" />, name: 'High-Speed WiFi' },
    { icon: <FaUtensils className="text-2xl" />, name: 'Meal Options' },
    { icon: <MdSecurity className="text-2xl" />, name: '24/7 Security' },
    { icon: <MdAcUnit className="text-2xl" />, name: 'AC Rooms' },
    { icon: <FaParking className="text-2xl" />, name: 'Parking Space' },
    { icon: <FaTv className="text-2xl" />, name: 'TV Lounge' },
    { icon: <MdLocalLaundryService className="text-2xl" />, name: 'Laundry' },
    { icon: <IoIosPeople className="text-2xl" />, name: 'Common Areas' },
  ];

  const hostelRules = [
    "Check-in time: 12 PM | Check-out time: 10 AM",
    "Valid ID proof required at check-in",
    "No smoking in rooms",
    "Visitors allowed only in common areas",
    "Quiet hours from 10 PM to 7 AM",
    "Monthly rent must be paid in advance",
    "Damage deposit refundable upon check-out",
    "Weekly room cleaning included"
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#1A1A1A] min-h-screen overflow-x-hidden">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <FixedContactIcons />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/four.jpg"
            alt="Hostel Accommodation"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="relative mt-16 mb-28 h-[50vh] text-center px-4 max-w-4xl mx-auto z-10" data-aos="fade-up">
          <div className="absolute inset-0 bg-[#1A1A1A]/30 backdrop-blur-sm rounded-4xl -z-50"></div>
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 mt-36 text-white">
            Student Accommodation
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Safe, comfortable and affordable living spaces for our outstation students
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto" data-aos="zoom-in" data-aos-delay="300"></div>
        </div>
        <svg className="absolute top-10 left-10 w-16 h-16 text-[#00BCD4] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#D4AF37]">
                Comfortable Living Near Campus
              </h2>
              <div className="space-y-5 text-lg text-[#666666]">
                <p>
                  We understand that moving to a new city for education can be challenging. That&lsquo;s why we&rsquo;ve partnered with premium hostel facilities located within 1km radius of our academy to provide you with a home away from home.
                </p>
                <p>
                  Our carefully selected hostels offer modern amenities, 24/7 security, and a vibrant community of like-minded students - all at an affordable price of just ₹3,500 per month.
                </p>
                <div className="mt-8 p-6 bg-[#F9F9F9] rounded-lg border-l-4 border-[#D4AF37]" data-aos="fade-up" data-aos-delay="200">
                  <h3 className="text-xl font-semibold mb-3 text-[#D4AF37]">Pricing Details</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monthly Rent:</span>
                      <span className="font-medium">₹3,500/-</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Security Deposit:</span>
                      <span className="font-medium">₹3,500/- (Refundable)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Food (Optional):</span>
                      <span className="font-medium">₹2,500/- extra</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/hostelroom.jpg" 
                  alt="Hostel Room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/commonarea.jpg" 
                  alt="Hostel Common Area"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/hostel2.jpg" 
                  alt="Hostel Bathroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/hostel3.jpg" 
                  alt="Hostel Kitchen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <svg className="absolute bottom-10 right-10 w-12 h-12 text-[#00BCD4] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D4AF37]">
              Modern Amenities
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Everything you need for comfortable student living
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {amenities.map((item, index) => (
              <div 
                key={index}
                className="bg-[#FFFFFF] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-[#D4AF37] mb-3">{item.icon}</div>
                <h3 className="font-medium text-[#1A1A1A]">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <svg className="absolute top-10 left-10 w-14 h-14 text-[#00BCD4] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D4AF37]">
              Our Hostel Facilities
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Take a virtual tour of our student accommodation
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/hostelroom.jpg',
              '/hostelroom.jpg',
              '/hostelroom.jpg',
              '/hostelroom.jpg',
              '/hostel2.jpg',
              '/hostel3.jpg'
            ].map((img, index) => (
              <div 
                key={index}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg group"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Image 
                  src={img}
                  alt={`Hostel facility ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#1A1A1A]/20 group-hover:bg-[#1A1A1A]/30 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
        <svg className="absolute bottom-10 right-10 w-12 h-12 text-[#00BCD4] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </section>
     <section className="py-8 md:py-12 px-4 md:px-6 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Hostel Rules */}
          <div data-aos="fade-right" className="order-2 md:order-1">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#D4AF37] text-center md:text-left">
              Hostel Rules
            </h2>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <ul className="space-y-2 text-sm">
                {hostelRules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#D4AF37] mr-2 mt-1">•</span>
                    <span className="flex-1 text-[#666666]">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <div data-aos="fade-left" className="order-1 md:order-2">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#D4AF37] text-center md:text-left">
              Book Your Stay
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-4 md:pl-10 md:pt-3">
              <form className="space-y-3 ">
                {[
                  {label: "Full Name", type: "text", placeholder: "Your name"},
                  {label: "Email", type: "email", placeholder: "Your email"},
                  {label: "Phone Number", type: "tel", placeholder: "Your phone number"},
                  {label: "Course Enrolled In", type: "text", placeholder: "Your course name"},
                  {label: "Preferred Move-in Date", type: "date"}
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block mb-1 text-sm font-medium text-[#1A1A1A]">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      className="w-[85%] md:w-[85%] px-3 py-2 text-sm border border-[#E8E8E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div className="flex justify-center md:block">
                  <button
                    type="submit"
                    className="w-[40%] md:w-[35%] md:ml-44 bg-[#D4AF37] hover:bg-[#B8972F] text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm"
                  >
                    Request Booking
                  </button>
                </div>
              </form>
              <p className="mt-3 text-xs text-[#666666] text-center">
                Our team will contact you within 24 hours to confirm your booking
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-8" data-aos="fade-up">
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#D4AF37]">
              Prime Location
            </h2>
            <p className="text-sm text-[#666666]">
              All our hostels are within walking distance from the academy
            </p>
          </div>
          
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="mt-4 md:mt-0" data-aos="fade-left">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-[#D4AF37] text-center md:text-left">
                Why Our Location Rocks
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Just 5-10 minute walk to academy",
                  "Safe residential neighborhood",
                  "Walking distance to markets, cafes and pharmacies",
                  "Well-connected by public transport"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-[#D4AF37] rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#666666]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="h-64 sm:h-80 md:h-96 w-full bg-[#E8E8E8] rounded-xl overflow-hidden" data-aos="fade-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1625069811807!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AccommodationPage;