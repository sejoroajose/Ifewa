import './index.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import ParallaxSection from '../components/Parrallax'
import hero from '/Images/hero.jpg'
import natureAnimation from '../src/ifewa.json'
import Service from '../components/Service'
import Card from '../components/Cards'
import ResortActivities from '../components/ResortActivities'
import Customers from '../components/Customers'
import Footer from '../components/footer'


function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <ParallaxSection
        backgroundImage={hero}
        title={'… place where Nature blooms'}
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
      <Card />
      <ResortActivities />     
      <Customers />
      <Footer />
    </>
  )
}

export default App
