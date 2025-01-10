

const ChapterCard = () => {
  return (
    <button
      className="ht_chapters_item js_page_section js_chapter relative flex flex-col items-center text-white w-full p-6 bg-transparent focus:outline-none"
      id="chapter1"
      data-modal="story-villas"
      data-modal-payload="0"
    >
      {/* Content Wrapper */}
      <div className="ht_chapters_itemContent z-50">
        {/* Chapter Title */}
        <div className="ht_chapters_itemTtl text-center">
          <div className="ht_chapters_itemChapter text-lg md:text-xl font-semibold">
            Chapter 01
          </div>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mt-2">
            Basking in Sunlit Serenity
          </h2>
        </div>
        {/* Chapter Description */}
        <div className="ht_chapters_itemDesc mt-4 text-sm md:text-base">
          <p className="leading-relaxed">
            Walking slowly through the lush, green landscape of Bali, guests
            enjoy the sound of water flowing in the river pool, the whisper of
            trees swaying in the sea breeze, embodying the soothing sounds of
            nature.
          </p>
        </div>
      </div>
      {/* Image Area */}
      <div className="ht_chapters_itemImgArea relative w-full mt-6">
        <img
          src="https://files.ayana.com/r/chapter-01_xyPH1g.webp"
          alt="Basking in Sunlit Serenity"
          className="w-full h-auto rounded-lg"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></span>
      </div>
    </button>
  );
};

export default ChapterCard;
