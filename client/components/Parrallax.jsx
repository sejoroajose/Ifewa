import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ParallaxSection = ({
  backgroundImage,
  title,
  description,
  className = '',
  children,
}) => {
  const sectionRef = useRef(null)
  const backgroundRef = useRef(null)

  useEffect(() => {
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
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl">{description}</p>
          {children}
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection
