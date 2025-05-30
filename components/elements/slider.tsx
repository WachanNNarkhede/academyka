'use client';

import { animate, motion, type MotionValue, useMotionValue, useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { User, Star } from 'lucide-react';

export default function TestimonialsScroll() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  // Testimonial data
  const testimonials = [
    {
      name: 'Amruta',
      role: 'Customer',
      company: "Krunal's Academy",
      image: '/male.png',
      quote:
        'I did haircut for the very 1st time at academy, initially I was little scared that how my hair`s will get cut, if not than how, but the entire team is very good & trained they treat very well, friendly so no worries. I got the best hair cut.',
      rating: 5,
    },
    {
      name: 'SHUBHAM DANGAT',
      role: 'Student',
      company: "Krunal's Academy",
      image: '/male.png',
      quote:
        'We have done nail art and extension in the academy the staff was so cooperative and the work was soo soo perfect I just feel like I have perfect nails and perfect art on it thanku so much krunals academy for this☺️☺️',
      rating: 5,
    },
    {
      name: 'Sayali',
      role: 'Customer',
      company: "Krunal's Academy",
      image: '/male.png',
      quote:
        'I am so happy with a global hair colour, hair cut thank you Sagar Pawar hair dresser & thank you Krunal`s academy i love it.',
      rating: 4,
    },
    {
      name: 'Pooja Dake',
      role: 'Customer',
      company: "Krunal's Academy",
      image: '/male.png',
      quote:
        'I had a fantastic experience at krunal salon My stylist Vinayak he was incredibly attentive and really listened to what I wanted. He expertly cut my hair, and I`ve received so many compliments on my new style. I highly recommend this salon and stylist.',
      rating: 5,
    },
  ];

  return (
    <div id="testimonials-section">
      <h2 className="section-title">What Our Clients Say</h2>

      <div className="testimonials-container">
        <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle cx="50" cy="50" r="30" className="indicator" style={{ pathLength: scrollXProgress }} />
        </svg>

        <motion.ul ref={ref} style={{ maskImage }} className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  {testimonial.image ? (
                    <img src={testimonial.image || '/model1'} alt={testimonial.name} />
                  ) : (
                    <div className="avatar-placeholder">
                      <User size={32} />
                    </div>
                  )}
                </div>
                <div className="testimonial-author">
                  <h3>{testimonial.name}</h3>
                  <p className="role">{testimonial.role}</p>
                  <p className="company">{testimonial.company}</p>
                </div>
              </div>

              <div className="testimonial-rating group">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < testimonial.rating ? '#D4AF37' : 'transparent'}
                    color={i < testimonial.rating ? '#D4AF37' : '#a88e2a'}
                    className="transition-colors duration-300 group-hover:scale-110"
                  />
                ))}
              </div>

              <blockquote>
                <p>&quot;{testimonial.quote}&quot;</p>
              </blockquote>
            </li>
          ))}
        </motion.ul>

        {/* Decorative SVG */}
        <svg className="absolute left-4 bottom-4 h-12 w-12 opacity-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <StyleSheet />
    </div>
  );
}

const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;
function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`,
  );

  useMotionValueEvent(scrollXProgress, 'change', (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`,
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`,
      );
    } else if (scrollXProgress.getPrevious() === 0 || scrollXProgress.getPrevious() === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`,
      );
    }
  });

  return maskImage;
}

function StyleSheet() {
  return (
    <style>{`
      #testimonials-section {
        width: 100%;
        max-width: 1200px;
        padding: 60px 20px;
        margin: 0 auto;
        position: relative;
        background: #ffffff;
      }

      .section-title {
        font-size: 2.5rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 40px;
        color: #1a1a1a;
      }

      .testimonials-container {
        position: relative;
        width: 100%;
      }

      #progress {
        position: absolute;
        top: -40px;
        right: 20px;
        transform: rotate(-90deg);
        z-index: 10;
      }

      .bg {
        stroke: #e6e6e6;
      }

      #progress circle {
        stroke-dashoffset: 0;
        stroke-width: 10%;
        fill: none;
      }

      #progress .indicator {
        stroke: #D4AF37;
      }

      .testimonials-list {
        display: flex;
        list-style: none;
        overflow-x: scroll;
        overflow-y: hidden;
        padding: 20px 0;
        margin: 0 auto;
        gap: 30px;
        scroll-behavior: smooth;
      }

      ::-webkit-scrollbar {
        height: 5px;
        width: 5px;
        background: #f5f5f5;
        -webkit-border-radius: 1ex;
      }

      ::-webkit-scrollbar-thumb {
        background: #D4AF37;
        -webkit-border-radius: 1ex;
      }

      ::-webkit-scrollbar-corner {
        background: #f5f5f5;
      }

      .testimonial-card {
        flex: 0 0 380px;
        background: #ffffff;
        border-radius: 16px;
        overflow: hidden;
        padding: 30px;
        display: flex;
        flex-direction: column;
        border: 1px solid #e6e6e6;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        height: auto;
        min-height: 300px;
      }

      .testimonial-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(212, 175, 55, 0.1);
      }

      .testimonial-header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
      }

      .testimonial-avatar {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        overflow: hidden;
        background: rgba(212, 175, 55, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        border: 2px solid #D4AF37;
        transition: all 0.3s ease;
      }

      .testimonial-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .avatar-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: #D4AF37;
      }

      .testimonial-author h3 {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0 0 5px 0;
        color: #1a1a1a;
      }

      .testimonial-author .role {
        font-size: 0.9rem;
        color: #D4AF37;
        margin: 0 0 3px 0;
      }

      .testimonial-author .company {
        font-size: 0.85rem;
        color: #6b7280;
        margin: 0;
      }

      .testimonial-rating {
        display: flex;
        gap: 5px;
        margin-bottom: 20px;
      }

      blockquote {
        flex: 1;
        margin: 0;
        padding: 0;
        font-style: italic;
        position: relative;
      }

      blockquote p {
        font-size: 1rem;
        line-height: 1.6;
        color: #1a1a1a;
      }

      blockquote::before {
        content: '“';
        font-size: 4rem;
        position: absolute;
        left: -10px;
        top: -30px;
        color: rgba(212, 175, 55, 0.1);
        font-family: serif;
      }

      @media (max-width: 768px) {
        #testimonials-section {
          padding: 40px 15px;
        }

        .section-title {
          font-size: 1.8rem;
          margin-bottom: 30px;
        }

        #progress {
          width: 60px;
          height: 60px;
          top: -30px;
          right: 15px;
        }

        .testimonials-list {
          gap: 20px;
          padding: 15px 0;
        }

        .testimonial-card {
          flex: 0 0 280px;
          padding: 20px;
          min-height: 260px;
          border-radius: 12px;
        }

        .testimonial-header {
          margin-bottom: 15px;
        }

        .testimonial-avatar {
          width: 50px;
          height: 50px;
          margin-right: 15px;
        }

        .avatar-placeholder svg {
          width: 24px;
          height: 24px;
        }

        .testimonial-author h3 {
          font-size: 1rem;
        }

        .testimonial-author .role {
          font-size: 0.8rem;
        }

        .testimonial-author .company {
          font-size: 0.75rem;
        }

        .testimonial-rating {
          margin-bottom: 15px;
        }

        .testimonial-rating svg {
          width: 14px;
          height: 14px;
        }

        blockquote p {
          font-size: 0.9rem;
          line-height: 1.5;
        }

        blockquote::before {
          font-size: 3rem;
          top: -20px;
          left: -5px;
        }
      }

      @media (max-width: 480px) {
        #testimonials-section {
          padding: 30px 10px;
        }

        .section-title {
          font-size: 1.5rem;
          margin-bottom: 20px;
        }

        #progress {
          width: 50px;
          height: 50px;
          top: -25px;
          right: 10px;
        }

        .testimonials-list {
          gap: 15px;
          padding: 10px 0;
        }

        .testimonial-card {
          flex: 0 0 250px;
          padding: 15px;
          min-height: 240px;
          border-radius: 10px;
        }

        .testimonial-header {
          margin-bottom: 12px;
        }

        .testimonial-avatar {
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }

        .avatar-placeholder svg {
          width: 20px;
          height: 20px;
        }

        .testimonial-author h3 {
          font-size: 0.9rem;
        }

        .testimonial-author .role {
          font-size: 0.7rem;
        }

        .testimonial-author .company {
          font-size: 0.65rem;
        }

        .testimonial-rating {
          margin-bottom: 12px;
        }

        .testimonial-rating svg {
          width: 12px;
          height: 12px;
        }

        blockquote p {
          font-size: 0.85rem;
          line-height: 1.4;
        }

        blockquote::before {
          font-size: 2.5rem;
          top: -15px;
          left: -5px;
        }
      }
    `}</style>
  );
}