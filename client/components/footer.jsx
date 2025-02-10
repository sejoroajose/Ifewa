import { useState, useEffect } from 'react';


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
        style={{ backgroundImage: `url(/Images/rooms.webp) `  }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative container mx-auto px-4 py-16 md:px-[3.5rem] pt-14">
        <h1 className="text-5xl text-center text-white mb-20 font-tt_ramillas italic">Contact Us</h1>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl mb-6 font-tt_ramillas italic">Get In Touch</h2>
            <p className="text-gray-300 mb-8 font-inter-cdnfonts italic">
              Have questions you’d like to ask us about Ifewa Resort? We are willing to proffer answers, 
              let’s hear from you by filling the details below!
            </p>

            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-white font-inter-cdnfonts">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full px-4 py-2 bg-white/90 outline-none text-black/70 font-inter-cdnfonts"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white font-inter-cdnfonts">
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 bg-white/90 text-black/70 outline-none font-inter-cdnfonts"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-white font-inter-cdnfonts">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 bg-white/90 text-black/70 outline-none min-h-[150px] resize-none font-inter-cdnfonts"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-2 bg-ifewa-gold hover:bg-ifewa-earth text-white rounded-md transition-colors font-inter-cdnfonts"
              >
                SEND NOW
              </button>
            </form>
          </div>

          {/* Map and Contact Info Section */}
          <div className="space-y-6">
            <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.09648567594624!2d3.758637862830989!3d7.731996992286339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1030b02ac485c169%3A0x56a605322a6b2ea8!2sIseyin-Ibadan%20Rd!5e0!3m2!1sen!2sng!4v1737977789732!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-white font-inter-cdnfonts italic">
              <div className="border-b-2 border-white flex justify-between pb-1 font-inter-cdnfonts italic">
                <p className="font-semibold font-inter-cdnfonts italic">Address:</p>
                <p>Moniya-iseyin Road</p>
              </div>
              <div className="border-b-2 border-white flex justify-between pb-1">
                <p className="font-semibold font-inter-cdnfonts">Phone:</p>
                <p>+234 806 191 2304</p>
              </div>
              <div className="border-b-2 border-white flex justify-between pb-1">
                <p className="font-semibold font-inter-cdnfonts">City:</p>
                <p>Ibadan, Oyo State</p>
              </div>
              <div className="border-b-2 border-white flex justify-between pb-1">
                <p className="font-semibold font-inter-cdnfonts">E-mail:</p>
                <p>support@ifewaresort.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Scroll To Top */}
      <div className="relative border-t border-white/20 bg-black/50 font-inter-cdnfonts italic">
        <div className="container mx-auto px-4 py-8 text-center text-white">
          <p>© Copyright 2025 Ifewa Resort - All Rights Reserved</p>
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
