import React from 'react'
import './index.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import ParallaxSection from '../components/Parrallax'
import hero from '../public/Images/hero.jpg'


function App() {

  return (
    <>
      <Navbar />
      <HeroSection /> 
      <ParallaxSection backgroundImage={hero}  title={'Where Natural Ambience pierce the soul'}/>
    </>
  )
}

export default App
