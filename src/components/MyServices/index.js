import React from "react"
import Icon1 from "../../images/photoMyServices1_2.jpg"
import Icon2 from "../../images/photoMyServices2_2.jpg"
import Icon3 from "../../images/photoMyServices3_1.jpg"
import {
  MyServicesContainer,
  MyServicesH1,
  MyServicesWrapper,
  MyServicesCard,
  MyServicesH2,
  MyServicesModalImage,
} from "./MyServicesElements"

const MyServices = () => {
  return (
    <MyServicesContainer id="myServices" className="MyServicesContainer">
      <MyServicesH1>Виды работ</MyServicesH1>
      <MyServicesWrapper className="MyServicesWrapper">
        <MyServicesCard className="MyServicesCard">
          <MyServicesModalImage
            small={Icon1}
            large={Icon1}
            alt="Разработка индивидуального эскиза"
            hideDownload={true}
            hideZoom={true}
            className="MyServicesModalImage"

          />
          {/* <MyServicesIcon src={Icon1} className="MyServicesIcon" /> */}
          <MyServicesH2>Разработка индивидуального эскиза</MyServicesH2>
          {/* <MyServicesP>
            Хочешь уникальную работу, которая подчеркнет твои сильные стороны и
            добавит тебе уверенности? Здесь ты получишь работу , которая будет
            такой же особенной как и ты.
          </MyServicesP> */}
        </MyServicesCard>
        <MyServicesCard>
          {/* <MyServicesIcon src={Icon2} /> */}
          <MyServicesModalImage
            small={Icon2}
            large={Icon2}
            alt="Нанесение татуировки, коррекция татуировки"
            hideDownload={true}
            hideZoom={true}

          />
          <MyServicesH2>
            Нанесение татуировки, коррекция татуировки
          </MyServicesH2>
          {/* <MyServicesP>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </MyServicesP> */}
        </MyServicesCard>
        <MyServicesCard>
          {/* <MyServicesIcon src={Icon3} /> */}
          <MyServicesModalImage
            small={Icon3}
            large={Icon3}
            alt="Перекрытие татуировки, перекрытие шрамов"
            hideDownload={true}
            hideZoom={true}

          />
          <MyServicesH2>Перекрытие татуировки, перекрытие шрамов</MyServicesH2>
          {/* <MyServicesP>
            Integer eget pretium eros. Cras facilisis facilisis urna id
            suscipit.
          </MyServicesP> */}
        </MyServicesCard>
      </MyServicesWrapper>
    </MyServicesContainer>
  )
}

export default MyServices
