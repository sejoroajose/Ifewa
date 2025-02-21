import { useRef, useEffect, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import PropTypes from 'prop-types'

const VideoSection = ({
  videoUrl,
  title,
  description,
  className = '',
  children,
}) => {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef(null)
  const contentRef = useRef(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className={`relative h-screen overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: 0 }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }} />

      <div
        ref={contentRef}
        className="relative flex items-center justify-center h-full px-4"
        style={{ zIndex: 2 }}
      >
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-ramillas-italic mb-8 text-white leading-tight animate-fadeIn">
            {title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-ramillas-italic mb-12 leading-relaxed max-w-2xl mx-auto animate-fadeIn">
            {description}
          </p>
          <div className="space-y-6 animate-fadeIn">{children}</div>
        </div>
      </div>

      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all z-10"
        style={{ zIndex: 3 }}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </button>
    </section>
  )
}

VideoSection.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default VideoSection
