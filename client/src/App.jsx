import './index.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import ParallaxSection from '../components/Parrallax'
import hero from '../public/Images/hero.jpg'
import natureAnimation from '../public/ifewa.json'
import Service from '../components/Service'
import AgroTour from '../components/Agro'
import CountryClub from '../components/CountryClub'
import CottageVille from '../components/CottageVille'
import Oasis from '../components/Oasis'


function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <ParallaxSection
        backgroundImage={hero}
        title={'Where Natural Ambience pierce the soul'}
        lottieAnimation={natureAnimation}
        lottieProps={{
          loop: true,
          autoplay: true,
          style: {
            width: 'auto',
            height: 'auto',
            margin: '0',
          },
        }}
      />
      <Service/>
      < AgroTour />
      < CountryClub />
      < CottageVille />
      <Oasis />
    </>
  )
}

export default App
