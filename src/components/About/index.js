import React from 'react'
import { Button } from '../ButtonElement'
import { Column2, Img, ImgWrap, AboutWrapper, AboutContainer, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, AboutRow } from './AboutElements'
import img1 from '../../images/photo_about1.jpg'

const AboutSection = () => {
   return (
      <>
         <AboutContainer lightBg={true} id="about">
            <AboutWrapper>
               <AboutRow imgStart={true}>
                  <Column1 className='column1'>
                     <TextWrapper>
                        <TopLine>Обо мне</TopLine>
                        <Heading lightText={false}>Заголовок (можно убрать)</Heading>
                        <Subtitle darkText={true}>Текст (можно убрать)</Subtitle>
                        {/* <BtnWrap>
                           <Button to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={1} dark={1} dark2={0}>"Что-то сделать"</Button>
                        </BtnWrap> */}
                     </TextWrapper>
                  </Column1>
                  <Column2 className='column2'>
                     <ImgWrap className='ImgWrap'>
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