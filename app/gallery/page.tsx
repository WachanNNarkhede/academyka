'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
// @ts-expect-error TS2307
import AOS from 'aos';
import 'aos/dist/aos.css';
import FixedContactIcons from '@/components/elements/FixedContactIcons';
import Footer from '@/components/footer';

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: string;
  type: 'image' | 'video';
};

const galleryItems: GalleryItem[] = [
  { id: 1, src: '/gallery/Gallary7.jpg', alt: 'Classroom session', category: 'Academy', type: 'image' },
  { id: 2, src: '/gallery/Gallary12.webp', alt: 'Students working', category: 'Academy', type: 'image' },
  { id: 3, src: '/gallery/Gallary15.webp', alt: 'Hair styling demo', category: 'Hair', type: 'image' }, // { id: 3, src: '/images/three.jpg', alt: 'Hair styling demo', category: 'Hair', type: 'image' },
  { id: 4, src: '/gallery/Gallary8.jpg', alt: 'Hair coloring', category: 'Hair', type: 'image' },
  { id: 5, src: '/gallery/Gallary4.jpg', alt: 'Makeup application', category: 'Makeup', type: 'image' },
  { id: 6, src: '/gallery/Gallary5.jpg', alt: 'Bridal makeup', category: 'Makeup', type: 'image' },
  { id: 7, src: '/gallery/Gallary9.webp', alt: 'Workshop event', category: 'Events', type: 'image' },
  { id: 8, src: '/gallery/Gallary16.jpeg', alt: 'Award ceremony', category: 'Events', type: 'image' },
  { id: 9, src: '/gallery/Gallary14.webp', alt: 'Skincare treatment', category: 'Skincare', type: 'image' },
  { id: 10, src: '/gallery/Gallary1.jpg', alt: 'Facial demo', category: 'Skincare', type: 'image' },
  { id: 11, src: '/gallery/Gallary2.jpg', alt: 'Student showcase', category: 'Students', type: 'image' },
  { id: 12, src: '/KrunalandPooja.jpg', alt: 'Graduation day', category: 'Students', type: 'image' },
  { id: 13, src: '/gallery/IMG_9465.JPG', alt: 'Makeup tutorial', category: 'Academy', type: 'image' },
  { id: 14, src: '/gallery/Gallary13.webp', alt: 'Hair styling session', category: 'Hair', type: 'image' },
  { id: 15, src: '/gallery/Gallary6.jpg', alt: 'Skincare routine demo', category: 'Skincare', type: 'image' },
  { id: 16, src: '/gallery/Gallary10.webp', alt: 'Bridal makeup process', category: 'Makeup', type: 'image' },
];

const Gallery = () => {
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

  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(galleryItems.map(item => item.category))];
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrevItem = () => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex(img => img.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedItem(galleryItems[prevIndex]);
  };

  const handleNextItem = () => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex(img => img.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedItem(galleryItems[nextIndex]);
  };

  return (
    <div className="bg-[#FFFFFF] min-h-[100vh] pt-20">
      <FixedContactIcons />
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-5"></div>
      </div>

      <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] flex items-center justify-center bg-[#333333]/70 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/two.jpg"
            alt="Gallery Showcase"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative lg:mt-6 md:mt-7 sm:mt-6 mt-6 mb-28 h-[30vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] text-center px-4 max-w-4xl mx-auto" data-aos="fade-up">
          <div className="absolute inset-0 bg-[#1A1A1A]/30 backdrop-blur-md rounded-3xl -z-10"></div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mt-30 md:mt-12 sm:mt-10 mt-20 text-white text-center">
            Gallery
          </h1>
          <p className="text-xl  text-[#FFFFFF]/90 mt-10">
            Explore our stunning collection of beauty transformations and academy highlights
          </p>
        </div>
        {/* <svg className="absolute top-10 left-10 w-16 h-16 text-[#00BCD4] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M3 9v12h18V9m-9 0V3m0 0H7a4 4 0 00-4 4v2m9-6h5a4 4 0 014 4v2m-9-6v6h6a2 2 0 012 2v4a2 2 0 01-2 2h-6" />
        </svg> */}
      </section>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#D4AF37] pt-8"
        >
          Our Gallery
        </motion.h2>
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`px-4 py-2 rounded-md text-sm sm:text-base transition-all ${
                activeCategory === category 
                  ? 'bg-[#D4AF37] text-white font-medium shadow-md' 
                  : 'bg-[#FFFFFF] text-[#1A1A1A] border border-[#E8E8E8] hover:bg-[#F9F9F9]'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-lg cursor-pointer group shadow-sm hover:shadow-md transition-shadow"
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-[3/4] relative">
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                ) : (
                  <video
                    src={item.src}
                    muted
                    loop
                    autoPlay
                    className="object-cover w-full h-full"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white">
                    <p className="font-medium">{item.category}</p>
                    <p className="text-sm opacity-90">{item.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <svg className="absolute bottom-10 right-10 w-12 h-12 text-[#00BCD4] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </section>
      {selectedItem && (
        <div className="fixed inset-0 bg-[#1A1A1A]/90 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-4xl sm:max-w-5xl h-full max-h-[85vh] sm:h-auto flex flex-col rounded-lg overflow-hidden shadow-xl">
            <div className="flex justify-between items-center p-4 bg-[#F9F9F9] text-[#1A1A1A]">
              <h3 className="text-base sm:text-lg font-semibold text-[#D4AF37]">{selectedItem.category}</h3>
              <button 
                onClick={() => setSelectedItem(null)}
                className="p-2 rounded-full hover:bg-[#D4AF37] hover:text-white transition-colors"
                aria-label="Close"
              >
                <FaTimes className="text-lg sm:text-xl" />
              </button>
            </div>
            <div className="relative flex-grow bg-[#FFFFFF] flex items-center justify-center">
              <div className="relative w-full h-full max-h-[65vh] sm:max-h-[70vh]">
                {selectedItem.type === 'image' ? (
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    fill
                    className="object-contain"
                    priority
                  />
                ) : (
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    className="object-contain w-full h-full"
                  />
                )}
                <button 
                  onClick={handlePrevItem}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[#FFFFFF] w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center hover:bg-[#F9F9F9] shadow-md transition-all z-10"
                  aria-label="Previous item"
                >
                  <FaChevronLeft className="text-[#D4AF37] text-base sm:text-lg" />
                </button>
                <button 
                  onClick={handleNextItem}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[#FFFFFF] w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center hover:bg-[#F9F9F9] shadow-md transition-all z-10"
                  aria-label="Next item"
                >
                  <FaChevronRight className="text-[#D4AF37] text-base sm:text-lg" />
                </button>
              </div>
            </div>
            <div className="p-4 bg-[#F9F9F9] border-t border-[#E8E8E8]">
              <p className="text-[#666666] text-center text-sm sm:text-base">
                {selectedItem.alt}
              </p>
              <p className="text-xs sm:text-sm text-[#666666] text-center mt-1">
                {filteredItems.findIndex(img => img.id === selectedItem.id) + 1} of {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Gallery;
