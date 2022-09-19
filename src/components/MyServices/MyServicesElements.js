import styled from "styled-components"
import ModalImage from "react-modal-image";

export const MyServicesContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 1000px) {
    height: 1200px;
  }
  @media screen and (max-width: 768px) {
    height: 1600px;
  }
  @media screen and (max-width: 480px) {
    height: 1200px;
  }
`
export const MyServicesWrapper = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  // padding: 0 10px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const MyServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 440px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1000px) {
    padding: 20px;
    height: 420px;
    width: 400px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px;

    height: 280px;
    width: 240px;
  }

  // &:hover {
  //   transform: scale(1.02);
  //   transition: all 0.2s ease-in-out;
  //   cursor: pointer;
  // }
`
export const MyServicesIcon = styled.img`
  height: 280px;
  width: 280px;
  margin-bottom: 40px;
  border-radius: 10px;
`

export const MyServicesModalImage = styled(ModalImage)`
  height: 300px;
  width: 300px;
  margin-bottom: 30px;
  border-radius: 10px;

  @media screen and (max-width: 480px) {
      margin-bottom: 10px;
      height: 200px;
      width: 200px;
  }
`

export const MyServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 40px;

  @media screen and (max-width: 1000px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }

`

export const MyServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;

  @media screen and (max-width: 1000px) {
    max-width: 300px;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 480px) {
    max-width: 180px;
    font-size: 0.8rem;
  }
`

export const MyServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`
