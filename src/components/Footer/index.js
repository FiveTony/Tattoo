import React from "react"
import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksWrap,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements"
import {
  FaYoutube,
  FaVk,
  FaWhatsapp,
  FaViber,
  FaTelegram,
} from "react-icons/fa"
import { animateScroll as scroll } from "react-scroll/modules"

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              DABlin Tattoo
            </SocialLogo>
            <WebsiteRights>
              DABlin Tattoo © {new Date().getFullYear()} Copyright Text
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
