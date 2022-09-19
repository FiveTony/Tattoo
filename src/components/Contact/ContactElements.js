import styled from "styled-components"
import { Link } from "react-router-dom"

export const ContactContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const ContactWrapper = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  height: 480px;
  padding-left: 100px;
  @media screen and (max-width: 1000px) {
    padding-left: 0px;
  }
  @media screen and (max-width: 768px) {
    display: grid;
  }
`

export const TextWrapper = styled.div`
  max-width: 520px;
  padding-top: 0;

  margin-left: 100px;
  margin-right: 100px;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
    margin-right: 0px;
    margin-left: 40px;
    max-width: 300px;
  }
  @media screen and (max-width: 480px) {
    max-width: 200px;
    
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

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "fff")};

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const ImgWrap = styled.div`
  max-width: 380px;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`
export const Img = styled.img`
  width: 100%;
  // margin: 0 0 10px 0;
  padding-right: 0;

  // @media screen and (max-width: 768px) {
  //   width: 80%;
  // }
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    margin-top: 0px;
    margin-left: 20px;
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
