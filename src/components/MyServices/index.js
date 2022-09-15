import React from "react"
import Icon1 from "../../images/photoMyServices1_1.jpg"
import Icon2 from "../../images/photoMyServices2.jpg"
import Icon3 from "../../images/photoMyServices3.jpg"
import {
  MyServicesContainer,
  MyServicesH1,
  MyServicesWrapper,
  MyServicesCard,
  MyServicesIcon,
  MyServicesH2,
  MyServicesP,
} from "./MyServicesElements"

const MyServices = () => {
  return (
    <MyServicesContainer id="myServices" className="MyServicesContainer">
      <MyServicesH1>Виды работ</MyServicesH1>
      <MyServicesWrapper className="MyServicesWrapper">
        <MyServicesCard className="MyServicesCard">
          <MyServicesIcon src={Icon1} className="MyServicesIcon" />
          <MyServicesH2>Разработка индивидуального эскиза</MyServicesH2>
          <MyServicesP>
            Хочешь уникальную работу, которая подчеркнет твои сильные стороны и
            добавит тебе уверенности? Здесь ты получишь работу , которая будет
            такой же особенной как и ты.
          </MyServicesP>
        </MyServicesCard>
        <MyServicesCard>
          <MyServicesIcon src={Icon2} />
          <MyServicesH2>Нанесение татуировки, коррекция татуировки</MyServicesH2>
          <MyServicesP>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </MyServicesP>
        </MyServicesCard>
        <MyServicesCard>
          <MyServicesIcon src={Icon3} />
          <MyServicesH2>Перекрытие татуировки, перекрытие шрамов</MyServicesH2>
          <MyServicesP>
            Integer eget pretium eros. Cras facilisis facilisis urna id
            suscipit.
          </MyServicesP>
        </MyServicesCard>
      </MyServicesWrapper>
    </MyServicesContainer>
  )
}

export default MyServices
