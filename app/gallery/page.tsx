'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
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
  { id: 1, src: '/images/one.jpg', alt: 'Classroom session', category: 'Academy', type: 'image' },
  { id: 2, src: '/images/two.jpg', alt: 'Students working', category: 'Academy', type: 'image' },
  { id: 3, src: '/images/three.jpg', alt: 'Hair styling demo', category: 'Hair', type: 'image' },
  { id: 4, src: '/images/four.jpg', alt: 'Hair coloring', category: 'Hair', type: 'image' },
  { id: 5, src: '/images/five.jpg', alt: 'Makeup application', category: 'Makeup', type: 'image' },
  { id: 6, src: '/images/one.jpg', alt: 'Bridal makeup', category: 'Makeup', type: 'image' },
  { id: 7, src: '/images/two.jpg', alt: 'Workshop event', category: 'Events', type: 'image' },
  { id: 8, src: '/images/three.jpg', alt: 'Award ceremony', category: 'Events', type: 'image' },
  { id: 9, src: '/images/four.jpg', alt: 'Skincare treatment', category: 'Skincare', type: 'image' },
  { id: 10, src: '/images/two.jpg', alt: 'Facial demo', category: 'Skincare', type: 'image' },
  { id: 11, src: '/images/three.jpg', alt: 'Student showcase', category: 'Students', type: 'image' },
  { id: 12, src: '/images/two.jpg', alt: 'Graduation day', category: 'Students', type: 'image' },
  { id: 13, src: '/images/three.jpg', alt: 'Makeup tutorial', category: 'Academy', type: 'image' },
  { id: 14, src: '/images/two.jpg', alt: 'Hair styling session', category: 'Hair', type: 'image' },
  { id: 15, src: '/images/five.jpg', alt: 'Skincare routine demo', category: 'Hair', type: 'image' },
  { id: 16, src: '/images/two.jpg', alt: 'Bridal makeup process', category: 'Hair', type: 'image' },
  { id: 17, src: '/images/one.jpg', alt: 'Workshop highlights', category: 'Hair', type: 'image' },
];



const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(galleryItems.map(item => item.category))];
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex(img => img.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedItem(galleryItems[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex(img => img.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedItem(galleryItems[nextIndex]);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Decorative elements */}
      <FixedContactIcons />
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-5"></div>
      </div>

      <section className="relative h-[60vh] flex items-center justify-center bg-pink-900/70 overflow-hidden">
  <FixedContactIcons />
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/two.jpg"
      alt="Gallery Showcase"
      fill
      className="object-cover "
      priority
    />
  </div>
  <div className="relative mt-6 mb-28 h-[50vh] text-center px-4 max-w-4xl mx-auto z-10" data-aos="fade-up">
    {/* Blurred background only for text area */}
    <div className="absolute inset-0  bg-black/30 backdrop-blur-sm rounded-3xl -z-10"></div>
    <h1 className="text-7xl md:text-5xl lg:text-6xl font-bold mb-6 mt-26 text-white">
      Gallery
    </h1>
    <p className="text-xl text-white/90 mt-10">
      Explore our stunning collection of beauty transformations and academy highlights
    </p>
  </div>
</section>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12 text-pink-600 pt-8"
        >
          Our Gallery
        </motion.h2>

        {/* Category Filter */}
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
                  ? 'bg-pink-700 text-white font-medium shadow-md' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white">
                    <p className="font-medium">{item.category}</p>
                    <p className="text-sm opacity-90">{item.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-4xl sm:max-w-5xl h-full max-h-[85vh] sm:max-h-[90vh] flex flex-col rounded-lg overflow-hidden shadow-xl">
            {/* Top bar with close button */}
            <div className="flex justify-between items-center p-4 bg-pink-200 text-black">
              <h3 className="text-base sm:text-lg font-medium">{selectedItem.category}</h3>
              <button 
                onClick={() => setSelectedItem(null)}
                className="p-2 rounded-full hover:bg-white transition-colors"
                aria-label="Close"
              >
                <FaTimes className="text-lg sm:text-xl" />
              </button>
            </div>
            
            {/* Main content container */}
            <div className="relative flex-grow bg-pink-50 flex items-center justify-center">
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
              </div>
              
              {/* Navigation arrows */}
              <button 
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center hover:bg-white shadow-md transition-all z-10"
                aria-label="Previous item"
              >
                <FaChevronLeft className="text-base sm:text-lg" />
              </button>
              
              <button 
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center hover:bg-white shadow-md transition-all z-10"
                aria-label="Next item"
              >
                <FaChevronRight className="text-base sm:text-lg" />
              </button>
            </div>
            
            {/* Caption */}
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700 text-center text-sm sm:text-base">
                {selectedItem.alt}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 text-center mt-1">
                {filteredItems.findIndex(img => img.id === selectedItem.id) + 1} of {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
        <Footer/>
    </div>
  );
};

export default Gallery;