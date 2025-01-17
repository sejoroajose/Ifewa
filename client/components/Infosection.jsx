import { useState } from 'react';

const Infosection = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 'facilities',
      title: 'Recommended facilities around the Villas',
      content: 'Content about recommended facilities...',
    },
    {
      id: 'packages',
      title: 'Accommodation package plans',
      content: 'Content about accommodation packages...',
    },
    {
      id: 'itineraries',
      title: 'Itineraries to enjoy AYANA Bali to the fullest',
      content: 'Content about itineraries...',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mb-24 px-4 sm:px-6 py-8 sm:py-12 bg-[#fdf7f1] relative z-30">
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-serif text-gray-800">
            Information for Your Stay
          </h2>
          <p className="text-lg text-gray-600">
            For those who want to enjoy AYANA BALI VILLAS to the fullest
          </p>
        </div>

        <div className="space-y-4">
          {sections.map(({ id, title, content }) => (
            <div key={id} className="border-t border-gray-200">
              <button
                onClick={() => toggleSection(id)}
                aria-expanded={openSection === id}
                className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-100"
              >
                <span className="text-xl font-serif text-gray-800">{title}</span>
                <span
                  className={`transform transition-transform duration-200 ${
                    openSection === id ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              {openSection === id && (
                <div
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                    openSection === id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="pb-4 text-gray-600">{content}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infosection;
