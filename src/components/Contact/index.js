import React from "react"
import { Button } from "../ButtonElement"
import {
  Column2,
  Img,
  ImgWrap,
  ContactWrapper,
  ContactContainer,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ContactRow,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIconLinkText,
} from "./ContactElements"
import img1 from "../../images/photo_about1.jpg"
import {
  FaYoutube,
  FaVk,
  FaWhatsapp,
  FaViber,
  FaTelegram,
} from "react-icons/fa"

const ContactSection = () => {
  return (
    <>
      <ContactContainer lightBg={true} id="contact">
        <ContactWrapper>
          <TextWrapper>
            <TopLine>Получить консультацию</TopLine>
            <Heading lightText={false}>Контакты</Heading>
            <Subtitle darkText={true}>Текст (можно убрать)</Subtitle>
            {/* <BtnWrap>
                           <Button to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={1} dark={1} dark2={0}>"Что-то сделать"</Button>
                        </BtnWrap> */}
          </TextWrapper>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialIcons>
                  <SocialIconLink
                    href="https://vk.com/dablin_tattoo"
                    target="_blank"
                    aria-label="VK"
                  >
                    <FaVk />
                    <SocialIconLinkText>dablin_tattoo</SocialIconLinkText>
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.youtube.com"
                    target="_blank"
                    aria-label="Youtube"
                  >
                    <FaYoutube />
                    <SocialIconLinkText>youtube</SocialIconLinkText>
                  </SocialIconLink>
                  <div style={{display:"flex"}}>
                    <div style={{ display: "grid", gridGap: "12px"  }}>
                      <SocialIconLink
                        href="https://api.whatsapp.com/send?phone=89165368686"
                        target="_blank"
                        aria-label="Whatsapp"
                      >
                        <FaWhatsapp />
                      </SocialIconLink>
                      <SocialIconLink
                        href="tel: 89165368686"
                        target="_blank"
                        aria-label="Viber"
                      >
                        <FaViber />
                      </SocialIconLink>
                    </div>
                    <SocialIconLinkText>89165368686</SocialIconLinkText>
                  </div>
                  <SocialIconLink
                    href="https://t.me/dablin_tattoo"
                    target="_blank"
                    aria-label="Telegram"
                  >
                    <FaTelegram />
                    <SocialIconLinkText>@dablin_tattoo</SocialIconLinkText>
                  </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </ContactWrapper>
      </ContactContainer>
    </>
  )
}

export default ContactSection
