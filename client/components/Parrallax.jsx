import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PropTypes from 'prop-types'

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
  const contentRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobileView()
    window.addEventListener('resize', checkMobileView)

    const section = sectionRef.current
    const background = backgroundRef.current
    const content = contentRef.current

    // Enhanced parallax effect for resort feeling
    gsap.to(background, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    })

    // Fade in animation for content
    gsap.from(content, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top center',
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
      className={`relative h-screen overflow-hidden ${className}`}
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          willChange: 'transform',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      <div
        ref={contentRef}
        className="absolute inset-0 flex items-center justify-center px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-tt_ramillas mb-6 text-white leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
          <div className="space-y-6">{children}</div>
        </div>
      </div>
    </section>
  )
}

ParallaxSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default ParallaxSection
