import { useState, useEffect, useRef } from "react";

const ChapterCard = ({ chapter, title, description, image }) => {
  return (
    <div
      className="ht_chapters_itemImgArea relative w-full mt-6"
      id={chapter.replace(/\s+/g, "-")}
    >
      <img src={image} alt={title} className="w-full h-auto" />
    </div>
  );
};

const ChapterCards = () => {
  const chapters = [
    {
      chapter: "Chapter 01",
      title: "Agro Tour",
      description:
        "Discover the beauty of nature and experience the magic of agriculture. Nestle nature’s embrace, AgroTour Resort is your ultimate escape into the tranquil beauty of the countryside. Designed to blend comfort and sustainability, our resort offers a unique experience where modern luxury meets agricultural serenity.",
      image: "https://files.ayana.com/r/chapter-01_xyPH1g.webp",
    },
    {
      chapter: "Chapter 02",
      title: "Country Club",
      description:
        "Discover the pristine beaches and crystal-clear waters that evoke a sense of peace and wonder, surrounded by the serene beauty of the coastline.",
      image: "https://files.ayana.com/r/chapter-02_ldpWow.webp",
    },
    {
      chapter: "Chapter 03",
      title: "Cottage Ville",
      description:
        "Experience cozy luxury in our charming Cottage Ville, designed for those who crave privacy and tranquility. Nestled amidst lush greenery, each cottage offers a serene escape with modern amenities, perfect for families or couples seeking a peaceful retreat.",
      image: "https://files.ayana.com/r/chapter-03_dqOu2Q.webp",
    },
    {
      chapter: "Chapter 04",
      title: "Service Hub",
      description:
        "Experience the magic of a starlit night as you unwind under the expansive sky, creating unforgettable memories.",
      image: "https://files.ayana.com/r/chapter-01_xyPH1g.webp",
    },
  ];

  const [activeChapter, setActiveChapter] = useState(chapters[0].chapter);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    chapters.forEach((chapter) => {
      const section = document.getElementById(chapter.chapter.replace(/\s+/g, "-"));
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top < window.innerHeight / 2;
        if (isVisible) {
          setActiveChapter(chapter.chapter);
        }
      }
    });

    
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const isSectionInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      setIsSectionVisible(isSectionInView);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col">
      {/* Fixed Text Container */}
      {isSectionVisible && (
        <div className="fixed h-[500px] top-20 left-16 right-20 z-50 text-white bg-transparent p-4">
          <div className="text-lg font-semibold">{activeChapter}</div>
          {chapters.map(
            (chapter, index) =>
              chapter.chapter === activeChapter && (
                <div className="grid grid-cols-2 mt-7" key={index}>
                  <h2 className="w-[100px] text-5xl font-light">{chapter.title}</h2>
                  <p className="text-sm md:text-xl text-right">{chapter.description}</p>
                </div>
              )
          )}
        </div>
      )}

      {/* Chapters Display */}
      {chapters.map((chapter, index) => (
        <ChapterCard
          key={index}
          chapter={chapter.chapter}
          title={chapter.title}
          description={chapter.description}
          image={chapter.image}
        />
      ))}

      {/* Half-circle Button */}
      {isSectionVisible && (
        <div className="fixed bottom-4 left-2/3 transform -translate-x-1/2">
          <button
            className="w-48 h-24 bg-white rounded-t-full flex items-center justify-center text-black font-semibold transition-all duration-300 hover:scale-110"
          >
            {activeChapter}
          </button>
        </div>
      )}
    </div>
  );
};

export default ChapterCards;
