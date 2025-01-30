import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VenueSlider() {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      img: "Images/agro.jpg",
      title: "Agro Hub",
      description:
        "Farm activities such as harvesting fruits and vegetables, feeding animals, and learning about sustainable farming on the go.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v14a3 3 0 003 3h8a3 3 0 003-3V3M5 3h14"
          />
        </svg>
      ),
    },
    {
      img: "Images/sevicehubspace.jpg",
      title: "Service Hub",
      description:
        "From concierge services to ensuring your comfort and satisfaction throughout your stay, we remain committed to satisfying your every need.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4M9 6l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      img: "Images/country.jpg",
      title: "Country Club",
      description:
        "Whether you are a sport and wellness enthusiast looking to unwind, we offer diverse services tailored to enhance your resort experience.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 5l7 7-7 7M5 5l7 7-7 7"
          />
        </svg>
      ),
    },
    {
      img: "Images/cottage.jpg",
      title: "Cottage Ville",
      description:
        "Nestled amidst lush greenery, and designed from ground up to offer serenity, thereby providing a feel-at-home experience.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 18l6-6-6-6"
          />
        </svg>
      ),
    },

  ];

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
        style={{ backgroundImage: `url(/Images/background.webp) `  }}
      >
        <div className="absolute inset-0 bg-ifewa-earth/50 z-0"></div>
      </div> 

      {/* Foreground Content */}
      <div className="relative z-10 text-white">
        <nav className="relative font-tt_ramillas py-8 px-12 flex justify-between items-center border-b border-white/10">
          <button
            className="p-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => changeSlide("prev")}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-8 md:gap-20 overflow-hidden">
            {cards.map((card, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  changeCard(index);
                }}
                className={`relative ${
                  activeCard === index ? "block" : "hidden md:block"
                }`}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`${
                      activeCard === index ? "text-ifewa-gold" : "text-white"
                    }`}
                  >
                    {card.svg}
                  </div>
                  <span
                    className={`text-lg mt-1 block text-center ${
                      activeCard === index ? "text-ifewa-gold" : "text-white"
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
            onClick={() => changeSlide("next")}
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
            <h1 className="text-4xl md:text-7xl font-tt_ramillas font-light mb-4">
              {cards[activeCard].title}
            </h1>

            <p className="font-inter-cdnfonts text-sm text-white/70 my-12 max-w-xl">
              {cards[activeCard].description}
            </p>
            <button className="bg-ifewa-gold font-tt_ramillas text-white px-12 py-4 rounded-md hover:bg-ifewa-earth transition-colors">
              Buy Now
            </button>
          </div>
        </main>
      </div>
    </section>
  );
}
