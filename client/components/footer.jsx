import { useState } from 'react';

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
      <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q5flCBZspoC8HQbtjo7feO3OhzkKJ5.png')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-serif mb-6">Get In Touch</h2>
            <p className="text-gray-300 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id officia labore
              sed cumque rem, praesentium iusto aliquam quia, accusantium
              dignissimos cupiditate accusamus cum ad dolorum corporis maxime nihil
              qui sunt.
            </p>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 bg-white/90 rounded-md outline-none"
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="w-full px-4 py-2 bg-white/90 rounded-md outline-none"
              />
              <textarea
                placeholder="Message"
                className="w-full px-4 py-2 bg-white/90 rounded-md outline-none min-h-[150px] resize-none"
              />
              <button 
                type="submit"
                className="px-8 py-2 bg-[#5ca1e1] hover:bg-[#5ca1e1]/90 text-white rounded-md transition-colors"
              >
                SEND NOW
              </button>
            </form>
          </div>

          {/* Map and Contact Info Section */}
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
              <div className="absolute top-0 left-0 bg-white rounded-sm shadow-md p-3 m-2 max-w-[250px]">
                <h3 className="text-[1.15rem] font-normal text-gray-900 mb-1">350 5th Ave</h3>
                <p className="text-sm text-gray-600 mb-2">350 5th Ave, New York, NY 10118, USA</p>
                <div className="space-y-1">
                  <a 
                    href="https://www.google.com/maps/dir//350+5th+Ave,+New+York,+NY+10118" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <span className="inline-flex items-center">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="#1a73e8">
                        <path d="M22.43 10.59l-9.01-9.01c-.75-.75-2.07-.76-2.83 0l-9.01 9.01c-.75.75-.76 2.07 0 2.83l9.01 9.01c.75.75 2.07.76 2.83 0l9.01-9.01c.76-.76.75-2.08 0-2.83zm-8.85 3.91h-2.17v2.17c0 .39-.32.71-.71.71s-.71-.32-.71-.71v-2.17H7.82c-.39 0-.71-.32-.71-.71s.32-.71.71-.71h2.17V9.91c0-.39.32-.71.71-.71s.71.32.71.71v2.17h2.17c.39 0 .71.32.71.71s-.32.71-.71.71z"/>
                      </svg>
                      Directions
                    </span>
                  </a>
                  <button 
                    onClick={toggleMap}
                    className="block text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View larger map
                  </button>
                </div>
              </div>
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

            <div className="grid md:grid-cols-2 gap-4 text-white">
              <div className="border-b border-white/20 pb-2">
                <p className="font-semibold">Address:</p>
                <p>350 5th Ave</p>
              </div>
              <div className="border-b border-white/20 pb-2">
                <p className="font-semibold">Phone:</p>
                <p>01 234567890</p>
              </div>
              <div className="border-b border-white/20 pb-2">
                <p className="font-semibold">City:</p>
                <p>New-York US</p>
              </div>
              <div className="border-b border-white/20 pb-2">
                <p className="font-semibold">E-mail:</p>
                <p>support@mobirise.com</p>
              </div>
              <div className="border-b border-white/20 pb-2">
                <p className="font-semibold">Check-In:</p>
                <p>3:00 pm</p>
              </div>
              <div className="border-b border-white/20 pb-2">
                <p className="font-semibold">Check-Out:</p>
                <p>11:00 am</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Scroll To Top */}
      <div className="relative border-t border-white/20">
        <div className="container mx-auto px-4 py-4 text-center text-white">
          <p>© Copyright 2018 Mobirise - All Rights Reserved</p>
        </div>
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
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

