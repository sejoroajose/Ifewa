import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VenueSlider() {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      img: 'https://res.cloudinary.com/dnu6az3um/image/upload/v1740153295/bg6_mm7hca.jpg',
      title: 'Agro-Tour',
      description:
        'Farm activities such as harvesting fruits and vegetables, feeding animals, and learning about sustainable farming on the go.',
      svg: <i className="fa-solid fa-tractor text-3xl "></i>,
    },
    {
      img: 'Images/sevicehubspace.jpg',
      title: 'Service Hub',
      description:
        'From concierge services to ensuring your comfort and satisfaction throughout your stay, we remain committed to satisfying your every need.',
      svg: <i className="fa-solid fa-house-laptop text-3xl"></i>,
    },
    {
      img: 'https://res.cloudinary.com/dnu6az3um/image/upload/v1740152866/mk-s-WHf1wtNMMLU-unsplash_zyt7yf.jpg',
      title: 'Country Club',
      description:
        'Whether you are a sport and wellness enthusiast looking to unwind, we offer diverse services tailored to enhance your resort experience.',
      svg: <i className="fa-solid fa-golf-ball-tee text-3xl"></i>,
    },
    {
      img: 'Images/cottage.jpg',
      title: 'Cottage Ville',
      description:
        'Nestled amidst lush greenery, and designed from ground up to offer serenity, thereby providing a feel-at-home experience.',
      svg: <i className="fa-solid fa-house text-3xl"></i>,
    },
  ]

  const changeCard = (index) => {
    setActiveCard(index);
  };

  const changeSlide = (direction) => {
    if (direction === "prev") {
      setActiveCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    } else {
      setActiveCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section className="relative">
      {/* Background Section */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dnu6az3um/image/upload/v1740145410/bg4_vipdwa.jpg) `,
        }}
      >
        <div className="absolute inset-0 bg-ifewa-gold/10 z-0"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-white">
        <nav className="relative font-ramillas-regular py-8 px-12 flex justify-between items-center border-b border-white/10">
          <button
            className="p-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => changeSlide('prev')}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-8 md:gap-20 overflow-hidden">
            {cards.map((card, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  changeCard(index)
                }}
                className={`relative ${
                  activeCard === index ? 'block' : 'hidden md:block'
                }`}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`${
                      activeCard === index ? 'text-ifewa-gold' : 'text-white'
                    }`}
                  >
                    {card.svg}
                  </div>
                  <span
                    className={`text-lg mt-1 block text-center ${
                      activeCard === index ? 'text-ifewa-gold' : 'text-white'
                    }`}
                  >
                    {card.title}
                  </span>
                </div>
                {activeCard === index && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] text-ifewa-gold bg-ifewa-gold"></span>
                )}
              </a>
            ))}
          </div>

          <button
            className="p-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => changeSlide('next')}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </nav>

        <main className="flex flex-col md:flex-row px-4 py-8 md:px-12 md:py-16 items-center">
          <div className="w-full md:w-1/2">
            <img
              src={cards[activeCard].img}
              alt={cards[activeCard].title}
              className="w-full h-auto md:w-[35rem] md:h-[25rem] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-2 p-8 ">
            <h1 className="text-4xl md:text-7xl font-ramillas-regular font-light mb-4">
              {cards[activeCard].title}
            </h1>

            <p className="font-inter-cdnfonts text-lg text-white  my-12 max-w-xl">
              {cards[activeCard].description}
            </p>
            <button
              className="bg-ifewa-gold font-ramillas-regular text-white px-12 py-4  hover:bg-ifewa-earth transition-colors"
              onClick={() =>
                window.open('https://wa.me/2347067211158', '_blank')
              }
            >
              Buy Now
            </button>
          </div>
        </main>
      </div>
    </section>
  )
}
