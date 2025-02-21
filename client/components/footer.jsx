import { MessageCircle } from 'lucide-react'

const ContactFooter = () => {
  const whatsappNumber = '2347067211158'
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank')
  }

  return (
    <footer className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/Images/rooms.webp) ` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative container mx-auto px-4 py-16 md:px-[3.5rem] pt-14">
        <h1 className="text-5xl text-center text-white mb-20 font-ramillas-italic">
          Contact Us
        </h1>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="text-white space-y-6">
            <h2 className="text-4xl mb-6 font-ramillas-italic">Get In Touch</h2>
            <p className="text-gray-300 mb-8 font-ramillas-italic">
              Have questions you’d like to ask us about Ifewa Resort? We are
              willing to proffer answers, let’s hear from you by filling the
              details below!
            </p>

            <form className="space-y-4 font-ramillas-regular">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-white"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full px-4 py-2 bg-white/90 outline-none text-black/70 "
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 bg-white/90 text-black/70 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 bg-white/90 text-black/70 outline-none min-h-[150px] resize-none"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-2 bg-ifewa-gold hover:bg-ifewa-earth text-white transition-colors"
              >
                SEND NOW
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="relative h-[400px] bg-gray-100 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21721.343589415585!2d3.6735648560387286!3d7.859143191772387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1740160056670!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-white font-ramillas-italic">
              <div className="border-b-2 border-white flex justify-between pb-1">
                <p className="font-semibold ">Address:</p>
                <p>Moniya-iseyin Road</p>
              </div>
              <div className="border-b-2 border-white flex justify-between pb-1">
                <p className="font-semibold ">Phone:</p>
                <p>+234 806 191 2304</p>
              </div>
              <div className="border-b-2 border-white flex justify-between pb-1">
                <p className="font-semibold ">City:</p>
                <p>Ibadan, Oyo State</p>
              </div>
              <div className="border-b-2 border-white flex justify-between pb-1">
                <p className="font-semibold ">E-mail:</p>
                <p>info@ifewaresort.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/20 bg-black/50 font-inter-cdnfonts italic">
        <div className="container mx-auto px-4 py-8 text-center text-white">
          <p>
            © Copyright 2025 Ifewa Resort & McYouniverse Properties - All Rights
            Reserved
          </p>
        </div>
        <button
          onClick={handleWhatsAppClick}
          className="fixed md:bottom-12 bottom-6 md:right-12 right-6 p-4 bg-ifewa-gold text-white rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
    </footer>
  )
}

export default ContactFooter
