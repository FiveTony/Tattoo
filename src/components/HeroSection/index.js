import { useState } from "react"
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  MyButton,
} from "./HeroSectionElements"
import Video from "../../videos/video3.mp4"
import { Button } from "../ButtonElement"

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => setHover(!hover)

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Тату-студия</HeroH1>
        <HeroP>в Мытищах</HeroP>
        <HeroBtnWrapper>
          <MyButton
            to="contact"
            className="myButton"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={()=>{
              try {
                window.ym(90441101,'reachGoal','HeroSectionBtnContact')
              } catch (error) {
                console.log(error)
              }
            }}
          >
            Получить консультацию{hover ? <ArrowForward /> : <ArrowRight />}
          </MyButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
