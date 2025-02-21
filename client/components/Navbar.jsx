import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Agro-Tour', path: '/agro-tour' },
    { name: 'Service Hub', path: '/service-hub' },
    { name: 'Country Club', path: '/country-club' },
    { name: 'Cottage Ville', path: '/cottage-ville' },
    { name: 'Residential', path: '/residential' },
  ]

  return (
    <nav className="fixed w-full z-50 bg-white bg-opacity-30 backdrop-blur-sm font-ramillas-regular">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img
                className="h-20 w-auto"
                src="/Images/logo.png"
                alt="Ifewa Resort Logo"
              />
            </a>
          </div>

          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-ifewa-green font-ramillas-regular hover:bg-ifewa-gold hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden md:block ml-4 font-inter-cdnfonts">
              <a
                href="https://wa.me/2347067211158"
                className="bg-ifewa-gold font-ramillas-regular text-white px-4 py-2 text-sm font-medium hover:bg-yellow-600 transition-colors duration-300"
              >
                Buy Now
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-ifewa-green inline-flex items-center justify-center p-2  text-white hover:bg-ifewa-gold focus:outline-none"
              >
                {isOpen ? 'Close' : 'Menu'}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-ifewa-green">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-white hover:bg-ifewa-gold block px-3 py-2  text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/buy-now"
              className="bg-ifewa-gold text-white block px-3 py-2  text-base font-medium text-center mt-2"
            >
              Buy Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
