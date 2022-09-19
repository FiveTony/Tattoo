import React from "react"
import {
  Column2,
  Img,
  ImgWrap,
  AboutWrapper,
  AboutContainer,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  AboutRow,
} from "./AboutElements"
import img1 from "../../images/photo_about1.jpg"

const AboutSection = () => {
  return (
    <>
      <AboutContainer lightBg={true} id="about">
        <AboutWrapper>
          <AboutRow imgStart={true}>
            <Column1 className="column1">
              <TextWrapper>
                <TopLine>Обо мне</TopLine>
                  <Heading lightText={false}>Моя любовь — графика!</Heading>
                  <Subtitle darkText={true}>
                    Я рисую с детства и, благодаря этому хобби, отражаю свой
                    внутренний мир. Вкладываю частичку себя в каждую свою
                    работу более 7 лет и верю, что для людей она - это нечто большее,
                    чем просто рисунок или текст. Что она несёт в себе нечто неповторимое и
                    значимое для каждого.
                  </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2 className="column2">
              <ImgWrap className="ImgWrap">
                <Img src={img1} alt="img1" />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  )
}

export default AboutSection
