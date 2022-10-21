import styled from "styled-components"
import ModalImage from "react-modal-image"

export const MyWorksContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;

  // background-color: #8080801f;

  // @media screen and (max-width: 768px) {
  //   height: 1100px;
  // }
  @media screen and (max-width: 480px) {
    padding: 100px 0;
  }
  padding: 100px 0;
`
export const MyWorksWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 26px;
  padding: 0 50px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const MyWorksCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  // max-height: 380px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 480px) {
    padding: 16px;
  }
`
export const MyWorksIcon = styled.img`
  // height: 240px;
  // width: 240px;
  // border-radius: 4px;

  // @media screen and (max-width: 480px) {
  //   height: 180px;
  //   width: 180px;
  // }
`

export const MyWorksModalImage = styled(ModalImage)`
  // height: 240px;
  // width: 240px;
  // border-radius: 4px;

  // @media screen and (max-width: 480px) {
  //   height: 220px;
  //   width: 220px;
  // }
`

export const MyWorksH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 40px;

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`

export const MyWorksH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const MyWorksP = styled.p`
  font-size: 1rem;
  text-align: center;
`
