import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { SplitText } from '../utils/SplitText'


const AnimatedQuote = () => {
  const quoteRef = useRef(null)
  const imagesRef = useRef(null)
  const splitTextRef = useRef(null)
  const timelineRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const quote = quoteRef.current
    const images = imagesRef.current?.children
    if (!quote) return

    splitTextRef.current = new SplitText(quote)
    timelineRef.current = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
      paused: false,
    })

    gsap.set(quote, { perspective: 400 })
    gsap.set(images, { autoAlpha: 0, scale: 0 })
    gsap.set(splitTextRef.words, {
      display: 'inline-block',
      margin: 0,
      padding: 0,
      opacity: 0,
    })

    const animate = () => {
      const tl = timelineRef.current
      const splitText = splitTextRef.current
      if (!tl || !splitText) return

      tl.clear()
      tl.from(
        images,
        {
          duration: 0.6,
          autoAlpha: 0,
          scale: 0,
          stagger: 0.1,
          ease: 'power3.out',
        },
        0.1
      )
        .to(
          images,
          {
            duration: 0.4,
            autoAlpha: 1,
            scale: 1,
            stagger: 0.1,
            ease: 'power3.inOut',
          },
          '-=0.3'
        )
        .from(
          splitText.chars,
          {
            duration: 0.6,
            autoAlpha: 0,
            scale: 3,
            force3D: true,
            stagger: 0.03,
          },
          '+=0.4'
        )
        .to(
          splitText.words,
          {
            duration: 0.2,
            color: '#ff8709',
            scale: 0.9,
            stagger: 0.1,
          },
          'words'
        )
        .to(
          splitText.words,
          {
            duration: 0.4,
            color: 'white',
            scale: 1,
            stagger: 0.1,
          },
          'words+=0.1'
        )
        .to(
          [splitText.lines, images],
          {
            duration: 0.5,
            x: () => (window.innerWidth < 768 ? 50 : 100),
            autoAlpha: 0,
            stagger: 0.2,
            ease: 'power3.in',
          },
          '+=2'
        )
    }

    animate()
    if (isAnimating) {
      timelineRef.current.play()
    }

    const handleVisibility = () => {
      if (document.hidden) {
        timelineRef.current?.pause()
      } else {
        timelineRef.current?.play()
      }
    }

    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
      if (splitTextRef.current && splitTextRef.current.revert) {
        splitTextRef.current.revert()
      }
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [isAnimating])

  return (
    <div className="flex flex-row mx-auto justify-center items-center min-h-screen">
      <div className="w-full   text-center">
        <div
          ref={quoteRef}
          className="text-5xl md:text-6xl w-full  mx-auto text-center font-ramillas-regular px-8 leading-tight text-white"
          aria-live="polite"
        >
          Welcome to Ifewa Resort, Experience Wellness and Lifestyle
        </div>
      </div>
    </div>
  )

}

export default AnimatedQuote
