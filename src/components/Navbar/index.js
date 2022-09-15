import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { animateScroll as scroll } from 'react-scroll/modules'

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({ toggle }) => {
   const [scrollNav, setScrollNav] = useState(false)

   const changeNav = () => {
      if (window.scrollY >= 80) {
         setScrollNav(true)
      } else {
         setScrollNav(false)
      }
   }
   useEffect(() => {
      window.addEventListener('scroll', changeNav)
   }, [])

   const toggleHome = () => {
      scroll.scrollToTop()
   }

   return (
      <IconContext.Provider value={{ color: "#fff" }}>
         <Nav scrollNav={scrollNav}>
            <NavbarContainer>
               <NavLogo to="/" onClick={toggleHome}>DABlin Tattoo</NavLogo>
               <MobileIcon onClick={toggle}>
                  <FaBars />
               </MobileIcon>
               <NavMenu>
                  <NavItem>
                     <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Обо мне</NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks to="myServices" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Виды работ</NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks to="myWorks" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Мои работы</NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Контакты</NavLinks>
                  </NavItem>
               </NavMenu>
            </NavbarContainer>
         </Nav>
      </IconContext.Provider>
   )
}

export default Navbar