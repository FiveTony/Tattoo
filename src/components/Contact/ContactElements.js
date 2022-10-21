import styled from "styled-components"
import { Link } from "react-router-dom"

export const ContactContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  // overflow: hidden;
  @media screen and (max-width: 768px) {
    padding-top: 100px;
  }
`

export const ContactWrapper = styled.div`
  max-width: 1260px;
  margin: 0 auto;

  display: flex;
  z-index: 1;

  padding: 0 40px;

  justify-content: space-between;
  height: 480px;

  @media screen and (max-width: 1140px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    padding: 0;
    max-width: auto;
    height: auto;
  }
`

export const LeftColumn = styled.div`
  margin-top: 40px;
  margin-left: 60px;
  width: 400px;
  @media screen and (max-width: 1140px) {
    margin-left: 20px;
    width: auto;
  }
  @media screen and (max-width: 768px) {
    margin-left: 80px;
  }
  @media screen and (max-width: 580px) {
    margin-left: 60px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 40px;
  }
`

export const TextWrapper = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-bottom: 60px;
  }
  @media screen and (max-width: 480px) {
    // max-width: 200px;
  }
`

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 1140px) {
    letter-spacing: 1px;
  }
  @media screen and (max-width: 768px) {
    letter-spacing: 1.4px;
    font-size: 16px;
  }
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 1140px) {
    font-size: 30px;
  }
`
export const Subtitle = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "fff")};

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 580px) {
    width: 90%;
  }
`
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const ImgWrap = styled.div`
  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    margin: auto 0;
    height: 70%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`
export const Img = styled.img`
  height: 100%;
  padding-right: 0;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const SocialMedia = styled.section`
  width: fit-content;

  @media screen and (max-width: 1140px) {
    max-width: 200px;
    margin-top: 40px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 60px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 0px;
  }
`
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto 0 auto;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`

export const SocialLogo = styled(Link)`
  // color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  // margin-bottom: 16px;
  font-weight: bold;

  margin-top: auto;
  margin-bottom: auto;
`

export const SocialIcons = styled.div`
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  width: 240px;
  display: grid;
  grid-gap: 14px;
`

export const SocialIconLink = styled.a`
  color: #232a34;
  font-size: 18px;
  // margin-left: 10px;
  display: flex;
  text-decoration: none;

  svg {
    margin-bottom: auto;
    margin-top: auto;

    width: 24px;
    height: 24px;
  }

  @media screen and (max-width: 768px) {
    svg {
      width: 32px;
      height: 32px;
    }
  }
`
export const SocialIconLinkText = styled.p`
  color: #232a34;
  font-size: 18px;
  margin-left: 14px;

  margin-top: auto;
  margin-bottom: auto;
`
