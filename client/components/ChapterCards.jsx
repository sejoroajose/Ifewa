const ChapterCard = ({ chapter, title, description, image }) => {
  return (
    <div className="ht_chapters_itemImgArea relative w-full mt-6">
      <img
        src={image}
        alt={title}
        className="w-full h-auto"
      />
      <div className="w-full absolute inset-0 grid grid-cols-2 gap-40 px-20 mt-12 text-white bg-transparent">
        <div className="flex flex-col gap-8">
          <div className="text-lg md:text-xl font-semibold">{chapter}</div>
          <h2 className="w-[230px] text-2xl md:text-4xl font-light leading-tight">
            {title}
          </h2>
        </div>
        <div className="text-sm md:text-base">
          <p className="w-[700px] leading-relaxed text-right mt-12 float-end">
            {description}
          </p>
        </div>
      </div>
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

  return (
    <div className="flex flex-col">
      {chapters.map((chapter, index) => (
        <ChapterCard
          key={index}
          chapter={chapter.chapter}
          title={chapter.title}
          description={chapter.description}
          image={chapter.image}
        />
      ))}
    </div>
  );
};

export default ChapterCards;
