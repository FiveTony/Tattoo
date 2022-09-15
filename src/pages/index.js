import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Footer from '../components/Footer'
import AboutSection from '../components/About'
import MyWorks from '../components/MyWorks'
import MyServices from '../components/MyServices'
import ContactSection from '../components/Contact'

const Home = () => {
   const [isOpen, setIsOpen] = useState(false)

   const toggle = () => {
      setIsOpen(!isOpen)
   }

   return (
      <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />
         <HeroSection />
         <AboutSection/>
         <MyServices />
         <MyWorks/>
         <ContactSection/>
         {/* <InfoSection {...homeObjOne} /> */}
         {/* <InfoSection {...homeObjTwo} /> */}
         {/* <InfoSection {...homeObjThree} /> */}
         <Footer />
      </>

   )
}

export default Home