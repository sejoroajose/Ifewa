/* import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../public/ifewa.json'

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{
        margin: 0,
        padding: 0,
        height: '100vh',
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 animate-gradient-slow"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}
      />

      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-100"
        style={{
          backgroundImage: "url('/Images/land.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4"> 
        {/* bg-ifewa-green bg-opacity-60 backdrop-blur-sm 
        <div className="text-center max-w-4xl">
          <h1 className="text-white text-5xl md:text-6xl font-aime font-bold mb-4 drop-shadow-lg animate-fade-in">
            Welcome to Ifewa Resort
          </h1>
          <p className="text-white text-xl md:text-2xl drop-shadow-md animate-fade-in-delayed">
            Experience Tranquility and Elegance
          </p>
        </div>
        {/* <div className="flex justify-center md:block">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-full max-w-[300px] md:max-w-full scale-150 h-auto opacity-100"
          />
        </div> 
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-slow {
          animation: gradient 15s ease infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed {
          animation: fadeIn 1s ease-out 0.5s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}

export default HeroSection */

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

const HeroSection = () => {
  const [showScrollButton, setShowScrollButton] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setShowScrollButton(window.scrollY < heroBottom - 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#hero-section + *")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero-section"
      className="relative w-full h-screen overflow-hidden"
      style={{
        margin: 0,
        padding: 0,
        height: "100vh",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 animate-gradient-slow"
        style={{
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
        }}
      />

      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-100"
        style={{
          backgroundImage: "url('/Images/land.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg animate-fade-in font-tt_ramillas">
            Welcome to Ifewa Resort
          </h1>
          <p className="text-white text-xl md:text-2xl drop-shadow-md animate-fade-in-delayed font-inter-cdnfonts italic">
            Experience Tranquility and Elegance
          </p>
        </div>
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-5 cursor-pointer transition-all duration-300 z-20"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="text-gray-800 w-10 h-10" />
        </button>
      )}

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient-slow {
          animation: gradient 15s ease infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed {
          animation: fadeIn 1s ease-out 0.5s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}

export default HeroSection





