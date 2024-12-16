import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lottie from 'lottie-react'

gsap.registerPlugin(ScrollTrigger)

const ParallaxSection = ({
  backgroundImage,
  title,
  description,
  className = '',
  lottieAnimation = null,
  lottieProps = {},
  children,
}) => {
  const sectionRef = useRef(null)
  const backgroundRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobileView()
    window.addEventListener('resize', checkMobileView)

    const section = sectionRef.current
    const background = backgroundRef.current

    gsap.to(background, {
      backgroundPosition: '50% 100%',
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.from(section.querySelector('.content'), {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      window.removeEventListener('resize', checkMobileView)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`relative h-screen bg-cover bg-fixed bg-center ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="content absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
        <div className="text-center max-w-2xl p-8">
          <h2 className="text-3xl font-aime mb-4">{title}</h2>
          <p className="text-xl">{description}</p>
          {lottieAnimation && (
            <div
              className={`
                mx-auto mb-6 
                ${
                  isMobile
                    ? 'w-4/5' 
                    : 'w-3/4'
                } 
              `}
            >
              <Lottie
                animationData={lottieAnimation}
                loop={true}
                autoplay={true}
                {...lottieProps}
                className="w-full h-auto"
              />
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection
