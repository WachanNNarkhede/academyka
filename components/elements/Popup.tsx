'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

// Define TypeScript interface for the item prop
interface Item {
  title: string;
  desc: string;
  icon: React.ReactElement;
  details: string[];
}

interface PopupProps {
  item: Item;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ item, onClose }) => {
  const isService = item.title.toLowerCase().includes('service');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(28, 10, 18, 0.7)', // Semi-transparent charcoal
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(/makeup-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          width: '80%',
          maxWidth: '800px',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            color: '#ff5c8d',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
          }}
        >
          <IoClose size={24} />
        </motion.button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', color: '#ff5c8d', marginBottom: '0.5rem', fontWeight: '700' }}>
              {item.title}
            </h2>
            <p style={{ color: '#b7849a', fontSize: '1.1rem', lineHeight: '1.6' }}>
              {item.desc}
            </p>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 92, 141, 0.1)', padding: '1rem', borderRadius: '8px' }}>
            <h3 style={{ color: '#ff5c8d', marginBottom: '0.5rem', fontWeight: '600' }}>
              {isService ? 'Service Includes' : 'Course Covers'}
            </h3>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              {item.details.map((detail, i) => (
                <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#ff5c8d', marginRight: '0.5rem', fontSize: '1rem' }}>✓</span>
                  <span style={{ color: '#1c0a12', fontSize: '1rem' }}>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontWeight: '600', color: '#ff5c8d', marginBottom: '0.2rem' }}>
                {isService ? 'Duration:' : 'Course Length:'}
              </p>
              <p style={{ color: '#b7849a', fontSize: '1rem' }}>2-4 hours</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#ff8ab5' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#ff5c8d',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
            >
              {isService ? 'Book Now' : 'Enroll Now'}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Popup;