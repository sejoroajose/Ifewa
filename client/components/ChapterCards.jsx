/* import { useState, useEffect, useRef } from "react";
import ChapterButton from './ResortActivities';

const ChapterCard = ({ title, image }) => {
  return (
    <div className="relative w-full" id={title.replace(/\s+/g, "-")}>
      <img src={image} alt={title} className="w-full md:h-auto" />
    </div>
  );
};

const ChapterCards = () => {
  const chapters = [
    {
      title: "Agro Tour",
      description:
        "Escape to Agro Tour Resort, where lush greenery and vibrant landscapes offer the perfect setting for relaxation and nature exploration. Experience tranquility in a place that celebrates sustainable living and natural beauty.",
      image: "Images/agro.jpg",
    },
    {
      title: "Country Club",
      description:
        "Discover the ultimate retreat at the Country Club, where pristine beaches and clear waters provide a serene environment for rest and rejuvenation. Perfect for those seeking peace with breathtaking coastal views.",
      image: "Images/country.jpg",
    },
    {
      title: "Cottage Ville",
      description:
        "Enjoy cozy luxury at Cottage Ville, a peaceful retreat designed for privacy and comfort. Offering the ideal balance of rustic charm and modern amenities, it's perfect for a quiet getaway",
      image: "Images/cottage.jpg",
    },
    {
      title: "Service Hub",
      description:
        "Relax under starlit skies at the Service Hub, where tranquility and expansive views create the perfect environment for unwinding. A serene haven for those seeking peace and unforgettable memories.",
      image: "Images/sevicehubspace.jpg",
    },
  ];

  const [activeTitle, setActiveTitle] = useState(chapters[0].title);
  const [isFixedVisible, setIsFixedVisible] = useState(true); // Start with visibility true
  const chapterCardsRef = useRef(null);

  const handleScroll = () => {
    // Track visibility of the entire ChapterCards section
    const chapterSection = chapterCardsRef.current;
    const rect = chapterSection.getBoundingClientRect();

    // Check if ChapterCards section is in view (not fully out of view)
    const isInView = rect.top <= window.innerHeight && rect.bottom >= 2;
    
    setIsFixedVisible(isInView); // Keep the fixed content visible only when ChapterCards is in view

    let activeChapterFound = false;

    // Update activeTitle based on visible chapter cards
    chapters.forEach((chapter) => {
      const section = document.getElementById(chapter.title.replace(/\s+/g, "-"));
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top < window.innerHeight / 2;
        if (isVisible && !activeChapterFound) {
          setActiveTitle(chapter.title);
          activeChapterFound = true;
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeChapter = chapters.find((chapter) => chapter.title === activeTitle);

  return (
    <div ref={chapterCardsRef} className="flex flex-col">
      {isFixedVisible && activeChapter && (
        <div className="fixed top-20 left-8 right-10 md:left-16 md:right-20 z-50 text-white bg-transparent p-4">
          <div className="grid grid-cols-2 justify-between">
            <h2 className="text-2xl md:text-5xl font-light font-aime">{activeChapter.title}</h2>
            <p className="text-sm md:text-xl text-right">{activeChapter.description}</p>
          </div>
          <div className="fixed bottom-5 left-2/3 md:left-3/4 transform -translate-x-1/2">
            <button
              className="w-40 h-20 md:w-96 md:h-48 bg-white rounded-t-full flex items-center justify-center text-black font-semibold transition-all duration-300 ease-in-out hover:w-[400px] hover:h-[200px] md:hover:w-[700px] md:hover:h-[350px] hover:bg-gray-100"
            >
              <div className="flex flex-col gap-2 md:gap-4">
                <div>{activeTitle}</div>
                <div>
                  <p className="text-gray-500">View Details</p>
                </div>
                <hr className="bg-black" />
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Chapters Display 
      {chapters.map((chapter, index) => (
        <ChapterCard key={index} title={chapter.title} image={chapter.image} />
      ))}

      {/* Half-circle Button 
      {isSectionVisible && (
        <div className="fixed bottom-1 left-2/3 md:left-3/4 transform -translate-x-1/2">
          <button
             onClick={handleButtonClick}
            className="w-40 h-20 md:w-96 md:h-48 bg-white rounded-t-full flex items-center justify-center text-black font-semibold transition-all duration-300 ease-in-out hover:w-[400px] hover:h-[200px] md:hover:w-[700px] md:hover:h-[350px] hover:bg-gray-100"
          >
            <div className="flex flex-col  gap-2 md:gap-4">
              <div> {activeChapter} </div>
              <div><p className="text-gray-500">View Details</p></div>
              <hr className="bg-black" />
            </div>
          </button>

        </div>
      )}
    </div>
  );
};

export default ChapterCards;
 */

/* import { useState, useEffect, useRef, useCallback } from "react"
import PropTypes from "prop-types"

const ChapterCard = ({ chapter, title, description, image, isActive, scrollPosition }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    if (cardRef.current && isActive) {
      const rect = cardRef.current.getBoundingClientRect()
      const scrollPercentage = (window.innerHeight - rect.top) / window.innerHeight
      const maxMove = 100 // Maximum pixels to move
      const move = Math.min(maxMove, Math.max(0, scrollPercentage * maxMove))
      cardRef.current.style.setProperty("--scroll-move", `${move}px`)
    }
  }, [isActive, scrollPosition])

  return (
    <div ref={cardRef} className="relative w-full mt-6 h-screen" id={chapter.replace(/\s+/g, "-")}>
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      {isActive && (
        <div
          className="absolute top-20 left-8 right-10 md:left-16 md:right-20 text-white transition-transform duration-300 ease-out"
          style={{ transform: `translateY(var(--scroll-move, 0px))` }}
        >
          <div className="text-base md:text-lg font-semibold">{chapter}</div>
          <div className="grid grid-cols-2 mt-7 justify-between">
            <h2 className="w-[100px] text-2xl md:text-5xl font-light">{title}</h2>
            <p className="text-sm md:text-xl text-right">{description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

ChapterCard.propTypes = {
  chapter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  scrollPosition: PropTypes.number.isRequired,
}

const ChapterCards = () => {
  const chapters = [
    {
      chapter: "Chapter 01",
      title: "Agro Tour",
      description:
        "Discover the beauty of nature and experience the magic of agriculture. Nestle nature's embrace, AgroTour Resort is your ultimate escape into the tranquil beauty of the countryside. Designed to blend comfort and sustainability, our resort offers a unique experience where modern luxury meets agricultural serenity.",
      image: "/Images/agro.jpg",
    },
    {
      chapter: "Chapter 02",
      title: "Country Club",
      description:
        "Discover the pristine beaches and crystal-clear waters that evoke a sense of peace and wonder, surrounded by the serene beauty of the coastline.",
      image: "/Images/country.jpg",
    },
    {
      chapter: "Chapter 03",
      title: "Cottage Ville",
      description:
        "Experience cozy luxury in our charming Cottage Ville, designed for those who crave privacy and tranquility. Nestled amidst lush greenery, each cottage offers a serene escape with modern amenities, perfect for families or couples seeking a peaceful retreat.",
      image: "/Images/cottage.jpg",
    },
    {
      chapter: "Chapter 04",
      title: "Service Hub",
      description:
        "Experience the magic of a starlit night as you unwind under the expansive sky, creating unforgettable memories.",
      image: "/Images/cottage.jpg",
    },
  ]

  const [activeChapter, setActiveChapter] = useState(chapters[0].chapter)
  const [isSectionVisible, setIsSectionVisible] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const sectionRef = useRef(null)

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY)

    chapters.forEach((chapter, index) => {
      const section = document.getElementById(chapter.chapter.replace(/\s+/g, "-"))
      if (section) {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top >= 0 && rect.top < window.innerHeight / 2
        if (isVisible) {
          setActiveChapter(chapter.chapter)
          setIsSectionVisible(index !== chapters.length - 1) // Hide button on last chapter
        }
      }
    })

    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect()
      const isSectionInView = rect.top <= window.innerHeight && rect.bottom >= 0
      setIsSectionVisible(isSectionInView)
    }
  }, [chapters])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const handleButtonClick = () => {
    console.log("Button clicked for chapter:", activeChapter)
  }

  return (
    <div ref={sectionRef} className="flex flex-col">
      {chapters.map((chapterData, index) => (
        <ChapterCard
          key={index}
          chapter={chapterData.chapter}
          title={chapterData.title}
          description={chapterData.description}
          image={chapterData.image}
          isActive={chapterData.chapter === activeChapter}
          scrollPosition={scrollPosition}
        />
      ))}

      {isSectionVisible && (
        <div className="fixed bottom-1 left-2/3 md:left-3/4 transform -translate-x-1/2">
          <button
            onClick={handleButtonClick}
            className="w-40 h-20 md:w-96 md:h-48 bg-white rounded-t-full flex items-center justify-center text-black font-semibold transition-all duration-300 ease-in-out hover:w-[400px] hover:h-[200px] md:hover:w-[700px] md:hover:h-[350px] hover:bg-gray-100"
          >
            <div className="flex flex-col gap-2 md:gap-4">
              <div>{activeChapter}</div>
              <div>
                <p className="text-gray-500">View Details</p>
              </div>
              <hr className="bg-black" />
            </div>
          </button>
        </div>
      )}
    </div>
  )
}

export default ChapterCards */





import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import PropTypes from "prop-types"

const ChapterCard = ({ chapter, title, description, image, scrollPosition }) => {
  const cardRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (cardRef.current && contentRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect()
      const cardTop = cardRect.top
      const cardHeight = cardRect.height
      const viewportHeight = window.innerHeight

      if (cardTop < viewportHeight && cardTop > -cardHeight) {
        const scrollPercentage = (viewportHeight - cardTop) / (viewportHeight + cardHeight)
        const maxMove = cardHeight / 2 // Maximum pixels to move (half the card height)
        const move = Math.min(maxMove, Math.max(-maxMove, (scrollPercentage - 0.5) * 2 * maxMove))
        contentRef.current.style.transform = `translateY(${move}px)`
      }
    }
  }, [scrollPosition])

  return (
    <div ref={cardRef} className="relative w-full h-screen" id={chapter.replace(/\s+/g, "-")}>
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white transition-transform duration-300 ease-out"
      >
        <div className="text-base md:text-lg font-semibold mb-4">{chapter}</div>
        <h2 className="text-2xl md:text-5xl font-light mb-4">{title}</h2>
        <p className="text-sm md:text-xl max-w-xl">{description}</p>
      </div>
    </div>
  )
}

ChapterCard.propTypes = {
  chapter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  scrollPosition: PropTypes.number.isRequired,
}

const ChapterCards = () => {
  const chapters = useMemo(
    () => [
      {
        chapter: "Agro Tour",
        title: "Chapter 01",
        description:
          "Discover the beauty of nature and experience the magic of agriculture. Nestle nature's embrace, AgroTour Resort is your ultimate escape into the tranquil beauty of the countryside. Designed to blend comfort and sustainability, our resort offers a unique experience where modern luxury meets agricultural serenity.",
        image: "/Images/agro.jpg",
      },
      {
        chapter: "Country Club",
        title: "Chapter 02",
        description:
          "Discover the pristine beaches and crystal-clear waters that evoke a sense of peace and wonder, surrounded by the serene beauty of the coastline.",
        image: "/Images/country.jpg",
      },
      {
        chapter: "Cottage Ville",
        title: "Chapter 03",
        description:
          "Experience cozy luxury in our charming Cottage Ville, designed for those who crave privacy and tranquility. Nestled amidst lush greenery, each cottage offers a serene escape with modern amenities, perfect for families or couples seeking a peaceful retreat.",
        image: "/Images/cottage.jpg",
      },
      {
        chapter: "Service Hub",
        title: "Chapter 04",
        description:
          "Experience the magic of a starlit night as you unwind under the expansive sky, creating unforgettable memories.",
        image: "/Images/cottage.jpg",
      },
    ],
    [],
  )

  const [activeChapter, setActiveChapter] = useState(chapters[0].chapter)
  const [scrollPosition, setScrollPosition] = useState(0)
  const sectionRef = useRef(null)

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY)

    chapters.forEach((chapter, index) => {
      const section = document.getElementById(chapter.chapter.replace(/\s+/g, "-"))
      if (section) {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2
        if (isVisible) {
          setActiveChapter(chapter.chapter)
        }
      }
    })
  }, [chapters])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const handleButtonClick = () => {
    console.log("Button clicked for chapter:", activeChapter)
  }

  const activeChapterData = chapters.find((chapter) => chapter.chapter === activeChapter)
  const activeChapterIndex = chapters.findIndex((chapter) => chapter.chapter === activeChapter)

  return (
    <div ref={sectionRef} className="flex flex-col">
      {chapters.map((chapterData, index) => (
        <ChapterCard
          key={index}
          chapter={chapterData.chapter}
          title={chapterData.title}
          description={chapterData.description}
          image={chapterData.image}
          scrollPosition={scrollPosition}
        />
      ))}

      {activeChapterData && activeChapterIndex >= 0 && activeChapterIndex < 4 && (
        <div className="fixed bottom-1 left-2/3 md:left-3/4 transform -translate-x-1/2">
          <button
            onClick={handleButtonClick}
            className="w-40 h-20 md:w-96 md:h-48 bg-white rounded-t-full flex items-center justify-center text-black font-semibold transition-all duration-300 ease-in-out hover:w-[400px] hover:h-[200px] md:hover:w-[700px] md:hover:h-[350px] hover:bg-gray-100"
          >
            <div className="flex flex-col gap-2 md:gap-4">
              <div>{activeChapterData.chapter}</div>
              <div>
                <p className="text-gray-500">{activeChapterData.title}</p>
              </div>
              <hr className="bg-black" />
            </div>
          </button>
        </div>
      )}
    </div>
  )
}

export default ChapterCards









