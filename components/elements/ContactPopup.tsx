'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ContactPopupProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen: controlledIsOpen, onClose }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>('/KrunalM.jpg');
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    description: '',
    terms: false,
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const pathname = usePathname();
  const isControlledOpen = controlledIsOpen ?? false;
  const hasBeenClosedForRouteRef = useRef<string | null>(null);
  const initialRender = useRef(true);

  // Update image based on window width
  useEffect(() => {
    const updateImage = () => {
      if (typeof window !== 'undefined') {
        setImageSrc(window.innerWidth < 768 ? '/KrunalFounder.jpg' : '/KrunalM.jpg');
      }
    };

    updateImage();
    window.addEventListener('resize', updateImage);
    return () => window.removeEventListener('resize', updateImage);
  }, []);

  // Handle popup open/close
  useEffect(() => {
    if (isControlledOpen) {
      setIsOpen(true);
      setIsAnimatingOut(false);
      hasBeenClosedForRouteRef.current = null;
      return;
    }

    // Skip the initial render in development (due to StrictMode)
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (pathname && hasBeenClosedForRouteRef.current !== pathname) {
      setIsOpen(true);
      setIsAnimatingOut(false);
    }
  }, [pathname, isControlledOpen]);

  const closePopup = () => {
    setIsAnimatingOut(true);
    // Remember we closed it for THIS route
    hasBeenClosedForRouteRef.current = pathname;
    
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimatingOut(false);
      if (onClose) onClose();
      // Reset form when closing
      setSubmitStatus('idle');
      setFormData({
        name: '',
        mobile: '',
        email: '',
        description: '',
        terms: false,
        newsletter: false
      });
      setErrors({});
    }, 300);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Enter a valid 10-digit number';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.description.trim()) newErrors.description = 'Message is required';
    if (!formData.terms) newErrors.terms = 'You must accept terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          description: formData.description,
          newsletter: formData.newsletter
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          mobile: '',
          email: '',
          description: '',
          terms: false,
          newsletter: false
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (typeof window === 'undefined' || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: isAnimatingOut ? 0.95 : 1, opacity: isAnimatingOut ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-[90vw] sm:max-w-3xl lg:max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto overflow-x-hidden"
      >
        <div className="flex flex-col md:flex-row min-h-0">
          {/* Left Section: Founder's Portrait */}
          <div className="relative w-full md:w-1/2 h-52 sm:h-64 md:h-auto bg-gradient-to-b from-[#ff8ab5]/20 to-[#ff4785]/20">
            <Image
              src={imageSrc}
              alt="Founder's Portrait"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c0a12]/60 to-transparent" />
            <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 max-w-[80%] text-white">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold leading-tight">Krunal Gaikwad</h3>
              <p className="text-xs sm:text-sm opacity-90 leading-tight">Founder, Krunal&apos;s Beauty Academy</p>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="w-[90%] md:w-1/2 p-4 sm:p-5 md:p-6 flex flex-col min-h-0">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 sm:top-3 right-3 sm:right-3 p-2 sm:p-2.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close popup"
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-6 sm:mb-7">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff8ab5] leading-tight">Contact Us</h2>
              <p className="mt-2 sm:mt-2.5 text-[#b7849a] text-sm sm:text-base md:text-lg leading-tight">We&apos;d love to hear from you!</p>
            </div>

            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800">Thank You!</h3>
                <p className="text-gray-600 mt-2">Your message has been sent successfully.</p>
                <button
                  onClick={closePopup}
                  className="mt-4 px-4 py-2 bg-[#ff8ab5] text-white rounded-lg hover:bg-[#ff5c8d] transition-colors"
                >
                  Close
                </button>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                <svg className="w-16 h-16 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800">Submission Failed</h3>
                <p className="text-gray-600 mt-2">Please try again later.</p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-4 px-4 py-2 bg-[#ff8ab5] text-white rounded-lg hover:bg-[#ff5c8d] transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 flex-grow p-3 text-black sm:p-4 mx-auto w-full max-w-[95%] min-h-0 box-border">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium text-[#1c0a12] mb-1 leading-tight">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full max-w-[95%] px-3 sm:px-3.5 py-2 sm:py-2.5 text-sm sm:text-base border ${errors.name ? 'border-red-400' : 'border-[#ffe4ec]'} rounded-lg focus:ring-2 focus:ring-[#ff8ab5] focus:border-[#ff8ab5] bg-[#fff5f9] min-h-[1.2rem] shadow-sm box-border`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm sm:text-base font-medium text-[#1c0a12] mb-1 leading-tight">
                    10-Digit Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    pattern="[0-9]{10}"
                    required
                    className={`w-full max-w-[95%] px-3 sm:px-3.5 py-2 sm:py-2.5 text-sm sm:text-base border ${errors.mobile ? 'border-red-400' : 'border-[#ffe4ec]'} rounded-lg focus:ring-2 focus:ring-[#ff8ab5] focus:border-[#ff8ab5] bg-[#fff5f9] min-h-[1.2rem] shadow-sm box-border`}
                  />
                  {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-[#1c0a12] mb-1 leading-tight">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full max-w-[95%] px-3 sm:px-3.5 py-2 sm:py-2.5 text-sm sm:text-base border ${errors.email ? 'border-red-400' : 'border-[#ffe4ec]'} rounded-lg focus:ring-2 focus:ring-[#ff8ab5] focus:border-[#ff8ab5] bg-[#fff5f9] min-h-[1.2rem] shadow-sm box-border`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm sm:text-base font-medium text-[#1c0a12] mb-1 leading-tight">
                    Tell Us More... *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    required
                    className={`w-full max-w-[95%] px-3 sm:px-3.5 py-2 sm:py-2.5 text-sm sm:text-base border ${errors.description ? 'border-red-400' : 'border-[#ffe4ec]'} rounded-lg focus:ring-2 focus:ring-[#ff8ab5] focus:border-[#ff8ab5] bg-[#fff5f9] min-h-[6rem] resize-none shadow-sm box-border`}
                  ></textarea>
                  {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description}</p>}
                </div>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      required
                      className={`h-4 sm:h-5 w-4 sm:w-5 text-[#ff8ab5] focus:ring-[#ff8ab5] ${errors.terms ? 'border-red-400' : 'border-[#ffe4ec]'} rounded`}
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm sm:text-base text-[#b7849a] leading-tight">
                      Accept Terms & WhatsApp Notifications *
                    </label>
                  </div>
                  {errors.terms && <p className="mt-1 text-xs text-red-500">{errors.terms}</p>}

                  <div className="flex items-center">
                    <input
                      id="newsletter"
                      name="newsletter"
                      type="checkbox"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="h-4 sm:h-5 w-4 sm:w-5 text-[#ff8ab5] focus:ring-[#ff8ab5] border-[#ffe4ec] rounded"
                    />
                    <label htmlFor="newsletter" className="ml-2 block text-sm sm:text-base text-[#b7849a] leading-tight">
                      Subscribe to Newsletters & Promotions
                    </label>
                  </div>
                </div>
                <div className="pt-4 sm:pt-5 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full max-w-[50%] sm:max-w-[10rem] px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-white bg-[#ff8ab5] rounded-lg hover:bg-[#ff5c8d] focus:outline-none focus:ring-2 focus:ring-[#ff8ab5] focus:ring-offset-2 transition-colors min-h-[1.5rem] shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPopup;