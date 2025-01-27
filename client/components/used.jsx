import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Slider from "react-slick"
import PropTypes from "prop-types"

// Import css files for react-slick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function VenueSlider() {
  const [activeCard, setActiveCard] = useState(0)

  // Array of card data (with sample SVGs for each title)
  const cards = [
    {
      img: "Images/agro.jpg",
      title: "Agro Hub",
      subtitle: "Lobby bar",
      description:
        "An extension of the grand lobby, Coa embraces the distinct cultural rhythm of the island and it's people, inviting discovery and encouraging participation in the local art of joyful socializing.",
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
      img: "Images/country.jpg",
      title: "Country Club",
      subtitle: "Lobby bar 2",
      description:
        "An extension of the grand lobby, Coa embraces the distinct cultural rhythm of the island and it's people, inviting discovery and encouraging participation in the local art of joyful socializing.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M9 6l2 2 4-4" />
        </svg>
      ),
    },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveCard(next),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  }

  return (
    <div className="min-h-screen bg-ifewa-green text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 py-4 md:py-8 px-4 md:px-12 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-4 md:gap-8 lg:gap-20 overflow-x-auto scrollbar-hide">
          {cards.map((card, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity relative ${
                activeCard === index ? "opacity-100" : ""
              }`}
              aria-label={`View ${card.title}`}
            >
              <div className={`${activeCard === index ? "text-ifewa-gold" : "text-white"} transition-colors`}>
                {card.svg}
              </div>
              <span
                className={`text-xs md:text-sm lg:text-lg mt-1 block text-center whitespace-nowrap ${
                  activeCard === index ? "text-ifewa-gold" : "text-white"
                }`}
              >
                {card.title}
              </span>
              {activeCard === index && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-ifewa-gold"></span>}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="outline-none">
            <main className="flex flex-col md:flex-row px-4 md:px-12 py-8 md:py-16 items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <img
                  src={card.img || "/placeholder.svg"}
                  alt={card.title}
                  className="w-full h-64 md:h-[25rem] object-cover rounded-lg"
                />
              </div>

              <div className="w-full md:w-1/2 md:pl-8 lg:pl-20">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light mb-2 md:mb-4">{card.title}</h1>
                <h2 className="text-lg md:text-xl text-white/70 mb-4 md:mb-8">{card.subtitle}</h2>
                <p className="text-base md:text-lg text-white/70 mb-6 md:mb-12 max-w-xl">{card.description}</p>
                <button className="w-full md:w-auto bg-[#C5A572] text-black px-8 md:px-12 py-3 md:py-4 rounded-full hover:bg-[#D4B483] transition-colors">
                  Book
                </button>
              </div>
            </main>
          </div>
        ))}
      </Slider>
    </div>
  )
}

function CustomPrevArrow({ onClick }) {
  return (
    <button
      className="absolute left-4 top-1/2 z-10 p-2 md:p-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
      style={{ transform: "translateY(-50%)" }}
      onClick={onClick}
      aria-label="Previous venue"
    >
      <ChevronLeft className="w-4 h-4" />
    </button>
  )
}

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func,
}

function CustomNextArrow({ onClick }) {
  return (
    <button
      className="absolute right-4 top-1/2 z-10 p-2 md:p-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
      style={{ transform: "translateY(-50%)" }}
      onClick={onClick}
      aria-label="Next venue"
    >
      <ChevronRight className="w-4 h-4" />
    </button>
  )
}

CustomNextArrow.propTypes = {
  onClick: PropTypes.func,
}