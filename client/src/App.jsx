import './index.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import ParallaxSection from '../components/Parrallax'
import hero from '../public/Images/hero.jpg'
import natureAnimation from '../public/ifewa.json'
import Service from '../components/Service'
import ChapterCards from '../components/ChapterCards'
import Oasis from '../components/Oasis'
import ResortActivities from '../components/ResortActivities'



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
      < ChapterCards />
      <ResortActivities />
      <Oasis />
      
    </>
  )
}

export default App
