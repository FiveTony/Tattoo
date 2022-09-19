import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import Footer from "../components/Footer"
import AboutSection from "../components/About"
import MyWorks from "../components/MyWorks"
import MyServices from "../components/MyServices"
import ContactSection from "../components/Contact"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
    if (!isOpen)
      try {
        window.ym(90441101, "reachGoal", "MobBtnBurger")
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection />
      <MyServices />
      <MyWorks />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home
