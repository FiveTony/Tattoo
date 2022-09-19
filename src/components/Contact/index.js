import {
  ContactWrapper,
  ContactContainer,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  SocialIconLink,
  SocialIcons,
  SocialMedia,
  SocialMediaWrap,
  SocialIconLinkText,
} from "./ContactElements"
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
      <ContactContainer lightBg={true} id="contact" className="ContactContainer">
        <ContactWrapper className="ContactWrapper">
          <TextWrapper className="TextWrapper">
            <TopLine>Получить консультацию</TopLine>
            <Heading lightText={false}>Контакты</Heading>
            <Subtitle darkText={true}>
              Связаться со мной и получить консультацию
            </Subtitle>
            {/* <BtnWrap>
                           <Button to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={1} dark={1} dark2={0}>"Что-то сделать"</Button>
                        </BtnWrap> */}
          </TextWrapper>
          <SocialMedia className="SocialMedia">
            <SocialMediaWrap>
              <SocialIcons>
                <SocialIconLink
                  href="https://vk.com/dablin_tattoo"
                  onClick={() => {
                    try {
                      window.ym(90441101, "reachGoal", "ContactsBtnVK")
                    } catch (error) {
                      console.log(error)
                    }
                  }}
                  target="_blank"
                  aria-label="VK"
                >
                  <FaVk />
                  <SocialIconLinkText>dablin_tattoo</SocialIconLinkText>
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.youtube.com"
                  onClick={() => {
                    try {
                      window.ym(90441101, "reachGoal", "ContactsBtnYoutube")
                    } catch (error) {
                      console.log(error)
                    }
                  }}
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                  <SocialIconLinkText>Youtube</SocialIconLinkText>
                </SocialIconLink>
                <div style={{ display: "flex" }}>
                  <div style={{ display: "grid", gridGap: "12px" }}>
                    <SocialIconLink
                      href="https://api.whatsapp.com/send?phone=89165368686"
                      onClick={() => {
                        try {
                          window.ym(
                            90441101,
                            "reachGoal",
                            "ContactsBtnWhatsapp"
                          )
                        } catch (error) {
                          console.log(error)
                        }
                      }}
                      target="_blank"
                      aria-label="Whatsapp"
                    >
                      <FaWhatsapp />
                    </SocialIconLink>
                    <SocialIconLink
                      // href="viber://add?number=79165368686"
                      onClick={() => {
                        try {
                          window.ym(90441101, "reachGoal", "ContactsBtnViber")
                        } catch (error) {
                          console.log(error)
                        }
                      }}
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
                  onClick={() => {
                    try {
                      window.ym(90441101, "reachGoal", "ContactsBtnTelegram")
                    } catch (error) {
                      console.log(error)
                    }
                  }}
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
