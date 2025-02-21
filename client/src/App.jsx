import './index.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import VideoSection from '../components/videoBackground'
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
      <VideoSection
        videoUrl="https://res.cloudinary.com/dnu6az3um/video/upload/v1740151581/background_hmhnwo.mp4"
        title="Nature Blooms"
        description="Experience a fusion of functionality, wellness and lifestyle; immerse yourself in nature; a day at a time!"
      >
        <button className="px-8 py-3 bg-white text-black rounded-full font-ramillas-regular hover:bg-opacity-90 transition-all">
          Buy Now
        </button>
      </VideoSection>
      <Service />
      <Card />
      <ResortActivities />
      <Customers />
      <Footer />
    </>
  )
}

export default App
