import { useState, useEffect, useRef } from "react";

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

      {chapters.map((chapter, index) => (
        <ChapterCard key={index} title={chapter.title} image={chapter.image} />
      ))}
    </div>
  );
};

export default ChapterCards;
