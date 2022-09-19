import { useEffect, useState } from "react"
import { FaBars, FaPhoneAlt } from "react-icons/fa"
import { IconContext } from "react-icons"
import { animateScroll as scroll } from "react-scroll/modules"

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  MyIcon,
  MyLink,
} from "./NavbarElements"

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
    window.addEventListener("scroll", changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  const handleClickPhone = () => {
    try {
      window.ym(90441101, "reachGoal", "ContactsBtnTel")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/tattoo" onClick={toggleHome}>
            DABlin Tattoo
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                onClick={() => {
                  try {
                    window.ym(90441101, "reachGoal", "AboutRouteFromBtn")
                  } catch (error) {
                    console.log(error)
                  }
                }}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Обо мне
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="myServices"
                onClick={() => {
                  try {
                    window.ym(90441101, "reachGoal", "ServicesRouteFromBtn")
                  } catch (error) {
                    console.log(error)
                  }
                }}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Виды работ
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="myWorks"
                onClick={() => {
                  try {
                    window.ym(90441101, "reachGoal", "MyWorksRouteFromBtn")
                  } catch (error) {
                    console.log(error)
                  }
                }}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Мои работы
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                onClick={() => {
                  try {
                    window.ym(90441101, "reachGoal", "ContactsRouteFromBtn")
                  } catch (error) {
                    console.log(error)
                  }
                }}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Контакты
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn onClick={handleClickPhone}>
            <MyLink href="tel: 89165368686">
              <MyIcon>
                <FaPhoneAlt />
              </MyIcon>
              89165368686
            </MyLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar
