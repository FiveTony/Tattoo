import React from 'react'
import { FooterContainer, FooterLink, FooterLinksContainer, FooterLinksItems, FooterLinksWrap, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { FaYoutube, FaVk, FaWhatsapp, FaViber, FaTelegram } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll/modules'


const Footer = () => {
   const toggleHome = () => {
      scroll.scrollToTop()
   }
   return (
      <FooterContainer>
         <FooterWrap>
            {/* <FooterLinksContainer>
               <FooterLinksWrap>
                  <FooterLinksItems>
                     <FooterLinkTitle>About us</FooterLinkTitle>
                     <FooterLink to="/">How it works</FooterLink>
                     <FooterLink to="/">Careers</FooterLink>
                  </FooterLinksItems>
                  <FooterLinksItems>
                     <FooterLinkTitle>Videos</FooterLinkTitle>
                     <FooterLink to="/">Agency</FooterLink>
                     <FooterLink to="/">Submit</FooterLink>
                  </FooterLinksItems>
               </FooterLinksWrap>
               <FooterLinksWrap>
                  <FooterLinksItems>
                     <FooterLinkTitle>Contact us</FooterLinkTitle>
                     <FooterLink to="/">Contact</FooterLink>
                     <FooterLink to="/">Support</FooterLink>
                  </FooterLinksItems>
                  <FooterLinksItems>
                     <FooterLinkTitle>Social Media</FooterLinkTitle>
                     <FooterLink to="/">Instagram</FooterLink>
                     <FooterLink to="/">Facebook</FooterLink>
                  </FooterLinksItems>
               </FooterLinksWrap>
            </FooterLinksContainer> */}
            <SocialMedia>
               <SocialMediaWrap>
                  <SocialLogo to='/' onClick={toggleHome}>
                     DABlin Tattoo
                  </SocialLogo>
                  <WebsiteRights>
                  DABlin Tattoo  © {new Date().getFullYear()} Copyright Text
                  </WebsiteRights>
                  {/* <SocialIcons>
                     <SocialIconLink href="//www.vk.com" target="_blank" aria-label="VK">
                        <FaVk />
                     </SocialIconLink>
                     <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                        <FaYoutube />
                     </SocialIconLink>
                     <SocialIconLink href="https://api.whatsapp.com/send?phone=89165368686" target="_blank" aria-label="Whatsapp">
                        <FaWhatsapp />
                     </SocialIconLink>
                     <SocialIconLink href="tel: 89165368686" target="_blank" aria-label="Viber">
                        <FaViber />
                     </SocialIconLink>
                  </SocialIcons> */}
               </SocialMediaWrap>
            </SocialMedia>
         </FooterWrap>
      </FooterContainer >
   )
}

export default Footer