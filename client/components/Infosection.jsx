import { useState } from 'react'

const Infosection = () => {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-[#fdf7f1]">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-serif text-gray-800">
            Information for Your Stay
          </h2>
          <p className="text-lg text-gray-600">
            For those who want to enjoy AYANA BALI VILLAS to the fullest
          </p>
        </div>

        <div className="space-y-4">
          {/* Facilities Section */}
          <div className="border-t border-gray-200">
            <button
              onClick={() => toggleSection('facilities')}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-xl font-serif text-gray-800">
                Recommended facilities around the Villas
              </span>
              <span className={`transform transition-transform duration-200 ${
                openSection === 'facilities' ? 'rotate-45' : ''
              }`}>
                +
              </span>
            </button>
            {openSection === 'facilities' && (
              <div className="pb-4 text-gray-600">
                Content about recommended facilities...
              </div>
            )}
          </div>

          {/* Packages Section */}
          <div className="border-t border-gray-200">
            <button
              onClick={() => toggleSection('packages')}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-xl font-serif text-gray-800">
                Accommodation package plans
              </span>
              <span className={`transform transition-transform duration-200 ${
                openSection === 'packages' ? 'rotate-45' : ''
              }`}>
                +
              </span>
            </button>
            {openSection === 'packages' && (
              <div className="pb-4 text-gray-600">
                Content about accommodation packages...
              </div>
            )}
          </div>

          {/* Itineraries Section */}
          <div className="border-t border-gray-200">
            <button
              onClick={() => toggleSection('itineraries')}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-xl font-serif text-gray-800">
                Itineraries to enjoy AYANA Bali to the fullest
              </span>
              <span className={`transform transition-transform duration-200 ${
                openSection === 'itineraries' ? 'rotate-45' : ''
              }`}>
                +
              </span>
            </button>
            {openSection === 'itineraries' && (
              <div className="pb-4 text-gray-600">
                Content about itineraries...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Infosection

