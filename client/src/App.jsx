import './index.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import ParallaxSection from '../components/Parrallax'
import hero from '../public/Images/hero.jpg'
import natureAnimation from '../public/ifewa.json'
import Service from '../components/Service'
import ChapterCard from '../components/ChapterCards'
import ResortActivities from '../components/ResortActivities'

/* import Oasis from '../components/Oasis'
import Infosection from '../components/Infosection' */
import Customers from '../components/Customers'
import Footer from '../components/footer'


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
      <ChapterCard />
      <ResortActivities />
  
      
      {/* <Oasis />
      <div className="mt-80">
        <Infosection />
      </div> */}
      <Customers />
      <Footer />
    </>
  )
}

export default App
