/* import { useState } from 'react'
import rooms from '../../Assets/rooms.webp'


const ContactFooter = () => {
  const [showMap, setShowMap] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMap = () => {
    setShowMap(!showMap);
  };
  

  return (
    <footer className="relative">
      <div
    className={`absolute inset-0 bg-[url('${rooms}')] bg-cover bg-center bg-no-repeat`}/>
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative container mx-auto px-4 py-16 md:px-40 pt-14">
        <h1 className='text-5xl text-center text-white mb-20'>Contact Us</h1>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form Section 
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-serif mb-6">Get In Touch</h2>
            <p className="text-gray-300 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id officia labore
              sed cumque rem, praesentium iusto aliquam quia, accusantium
              dignissimos cupiditate accusamus cum ad dolorum corporis maxime nihil
              qui sunt.
            </p>
            
            <form className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-white">
                    First Name
                    </label>
                    <input
                    id="firstName"
                    type="text"
                    className="w-full px-4 py-2 bg-white/90 outline-none text-black/70"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                    E-Mail
                    </label>
                    <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 bg-white/90 text-black/70 outline-none"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-white">
                    Message
                    </label>
                    <textarea
                    id="message"
                    className="w-full px-4 py-2 bg-white/90 text-black/70 outline-none min-h-[150px] resize-none"
                    />
                </div>
                <button
                    type="submit"
                    className="px-8 py-2 bg-[#5ca1e1] hover:bg-[#5ca1e1]/90 text-white rounded-md transition-colors"
                >
                    SEND NOW
                </button>
                </form>

          </div>

          {/* Map and Contact Info Section 
          <div className="space-y-6">
            <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175403114775!2d-73.9862169!3d40.7484445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2s350%205th%20Ave%2C%20New%20York%2C%20NY%2010118!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            
            </div>

            {showMap && (
              <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
                <div className="bg-white w-full max-w-4xl h-[80vh] rounded-lg overflow-hidden relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175403114775!2d-73.9862169!3d40.7484445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2s350%205th%20Ave%2C%20New%20York%2C%20NY%2010118!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <button 
                    onClick={toggleMap}
                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-8 text-white">
              <div className="border-b-2 border-white flex justify-between pb-1">
                <p className="font-semibold">Address:</p>
                <p>350 5th Ave</p>
              </div>
              <div className="border-b-2 border-white flex justify-between pb-1">
                <p className="font-semibold">Phone:</p>
                <p>01 234567890</p>
              </div>
              <div className="border-b-2 border-white flex justify-between pb-1">
                <p className="font-semibold">City:</p>
                <p>New-York US</p>
              </div>
              <div className="border-b-2 border-white flex justify-between pb-1">
                <p className="font-semibold">E-mail:</p>
                <p>support@mobirise.com</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Scroll To Top 
      <div className="relative border-t border-white/20 bg-black/50">
        <div className="container mx-auto px-4 py-8 text-center text-white">
          <p>© Copyright 2025 Ifewa Resort - All Rights Reserved</p>
        </div>
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-4 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default ContactFooter;

 */

import { useState, useEffect } from 'react';
import rooms from '../../Assets/rooms.webp';

const ContactFooter = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

 

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollToTop(scrollTop > 200); // Show the button after scrolling 200px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="relative">
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${rooms})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative container mx-auto px-4 py-16 md:px-40 pt-14">
        <h1 className="text-5xl text-center text-white mb-20 font-aime">Contact Us</h1>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl mb-6 font-aime">Get In Touch</h2>
            <p className="text-gray-300 mb-8 font-aime">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id officia labore
              sed cumque rem, praesentium iusto aliquam quia, accusantium
              dignissimos cupiditate accusamus cum ad dolorum corporis maxime nihil
              qui sunt.
            </p>

            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-white font-aime">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full px-4 py-2 bg-white/90 outline-none text-black/70 font-aime"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white font-aime">
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 bg-white/90 text-black/70 outline-none font-aime"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-white font-aime">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 bg-white/90 text-black/70 outline-none min-h-[150px] resize-none font-aime"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-2 bg-[#5ca1e1] hover:bg-[#5ca1e1]/90 text-white rounded-md transition-colors font-aime"
              >
                SEND NOW
              </button>
            </form>
          </div>

          {/* Map and Contact Info Section */}
          <div className="space-y-6">
            <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d1013176.070017586!2d3.037718442166659!3d7.272779644823201!3m2!1i1024!2i768!4f13.1!2m1!1sMoniya%20Road%20-%20Ibadan%20Express%20way!5e0!3m2!1sen!2sng!4v1737363038202!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-white">
              <div className="border-b-2 border-white flex justify-between pb-1 font-aime">
                <p className="font-semibold font-aime">Address:</p>
                <p>Moniya-iseyin Road</p>
              </div>
              <div className="border-b-2 border-white flex justify-between pb-1 font-aime">
                <p className="font-semibold font-aime">Phone:</p>
                <p>01 234567890</p>
              </div>
              <div className="border-b-2 border-white flex justify-between pb-1 font-aime">
                <p className="font-semibold font-aime">City:</p>
                <p>Ibadan, Oyo State</p>
              </div>
              <div className="border-b-2 border-white flex justify-between pb-1 font-aime">
                <p className="font-semibold font-aime">E-mail:</p>
                <p>support@mobirise.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Scroll To Top */}
      <div className="relative border-t border-white/20 bg-black/50 font-aime">
        <div className="container mx-auto px-4 py-8 text-center text-white font-aime">
          <p className='font-aime'>© Copyright 2025 Ifewa Resort - All Rights Reserved</p>
        </div>
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 p-5 bg-black/95 hover:bg-black/70 text-white transition-all"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </footer>
  );
};

export default ContactFooter;
