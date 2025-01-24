import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VenueSlider() {
  const [activeCard, setActiveCard] = useState(0);

  // Array of card data (with sample SVGs for each title)
  const cards = [
    {
      img: "Images/agro.jpg",
      title: "Agro Hub",
      subtitle: "Lobby bar",
      description:
        "An extension of the grand lobby, Coa embraces the distinct cultural rhythm of the island and it's people, inviting discovery and encouraging participation in the local art of joyful socializing.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v14a3 3 0 003 3h8a3 3 0 003-3V3M5 3h14" />
        </svg>
      ),
    },
    {
      img: "Images/country.jpg",
      title: "Country Club",
      subtitle: "Lobby bar 2",
      description:
        "An extension of the grand lobby, Coa embraces the distinct cultural rhythm of the island and it's people, inviting discovery and encouraging participation in the local art of joyful socializing.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      ),
    },
    {
      img: "Images/cottage.jpg",
      title: "Cottage Ville",
      subtitle: "Lobby bar 3",
      description:
        "An extension of the grand lobby, Coa embraces the distinct cultural rhythm of the island and it's people, inviting discovery and encouraging participation in the local art of joyful socializing.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18l6-6-6-6" />
        </svg>
      ),
    },
    {
      img: "Images/servicehubspace.jpg",
      title: "Service Hub",
      subtitle: "Lobby bar 4",
      description:
        "An extension of the grand lobby, Coa embraces the distinct cultural rhythm of the island and it's people, inviting discovery and encouraging participation in the local art of joyful socializing.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M9 6l2 2 4-4" />
        </svg>
      ),
    },
  ];

  // Function to change card slide
  const changeCard = (index) => {
    setActiveCard(index);
  };

  // Function to change slide using next/prev buttons
  const changeSlide = (direction) => {
    if (direction === "prev") {
      setActiveCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    } else {
      setActiveCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="min-h-screen bg-ifewa-green text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 py-8 px-12 flex justify-between items-center border-b border-white/10">
        <button
          className="p-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => changeSlide("prev")}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-20">
          {/* Navbar Items */}
          {cards.map((card, index) => (
            <a
              key={index}
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent default behavior (i.e., navigating)
                changeCard(index);
              }}
              className={`opacity-50 hover:opacity-100 transition-opacity relative ${
                activeCard === index ? "opacity-100" : ""
              }`}
            >
              <div className="flex flex-col items-center">
                {/* Display the SVG icon */}
                <div
                  className={`${
                    activeCard === index ? "text-ifewa-gold" : "text-white"
                  } transition-colors`}
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

              {/* Add bottom border for active item */}
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

      {/* Main Content */}
      <main className="flex px-12 py-16 items-center">
        <div className="w-1/2">
          <img
            src={cards[activeCard].img}
            alt={cards[activeCard].title}
            className="w-[35rem] h-[25rem] object-cover"
          />
        </div>

        <div className="w-1/2 pl-20">
          <h1 className="text-7xl font-light mb-4">{cards[activeCard].title}</h1>
          <h2 className="text-xl text-white/70 mb-8">{cards[activeCard].subtitle}</h2>
          <p className="text-lg text-white/70 mb-12 max-w-xl">
            {cards[activeCard].description}
          </p>
          <button className="bg-[#C5A572] text-black px-12 py-4 rounded-full hover:bg-[#D4B483] transition-colors">
            Book
          </button>
        </div>
      </main>
    </div>
  );
}
