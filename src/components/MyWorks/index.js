import React from "react"
import Icon1 from "../../images/myWorksInit/myWorksPhoto1.jpg"
import Icon2 from "../../images/myWorksInit/myWorksPhoto2.jpg"
import Icon3 from "../../images/myWorksInit/myWorksPhoto3.jpg"
import Icon4 from "../../images/myWorksInit/myWorksPhoto4.jpg"
import Icon5 from "../../images/myWorksInit/myWorksPhoto5.jpg"
import Icon6 from "../../images/myWorksInit/myWorksPhoto6.jpg"
import Icon7 from "../../images/myWorksInit/myWorksPhoto7.jpg"
import Icon8 from "../../images/myWorksInit/myWorksPhoto8.jpg"
import Icon9 from "../../images/myWorksInit/myWorksPhoto9.jpg"
import Icon10 from "../../images/myWorksInit/myWorksPhoto10.jpg"
import Icon11 from "../../images/myWorksInit/myWorksPhoto11.jpg"
import Icon12 from "../../images/myWorksInit/myWorksPhoto12.jpg"
import Icon13 from "../../images/myWorksInit/myWorksPhoto13.jpg"
import Icon14 from "../../images/myWorksInit/myWorksPhoto14.jpg"
import Icon15 from "../../images/myWorksInit/myWorksPhoto15.jpg"
import Icon16 from "../../images/myWorksInit/myWorksPhoto16.jpg"
import Icon17 from "../../images/myWorksInit/myWorksPhoto17.jpg"
import Icon18 from "../../images/myWorksInit/myWorksPhoto18.jpg"
import Icon19 from "../../images/myWorksInit/myWorksPhoto19.jpg"
import Icon20 from "../../images/myWorksInit/myWorksPhoto20.jpg"
import Icon21 from "../../images/myWorksInit/myWorksPhoto21.jpg"
import Icon22 from "../../images/myWorksInit/myWorksPhoto22.jpg"
import Icon23 from "../../images/myWorksInit/myWorksPhoto23.jpg"
import Icon24 from "../../images/myWorksInit/myWorksPhoto24.jpg"
import Icon25 from "../../images/myWorksInit/myWorksPhoto25.jpg"
import Icon26 from "../../images/myWorksInit/myWorksPhoto26.jpg"
import Icon27 from "../../images/myWorksInit/myWorksPhoto27.jpg"
import Icon28 from "../../images/myWorksInit/myWorksPhoto28.jpg"
import Icon29 from "../../images/myWorksInit/myWorksPhoto29.jpg"
import Icon30 from "../../images/myWorksInit/myWorksPhoto30.jpg"
import Icon31 from "../../images/myWorksInit/myWorksPhoto31.jpg"
import Icon32 from "../../images/myWorksInit/myWorksPhoto32.jpg"
import Icon33 from "../../images/myWorksInit/myWorksPhoto33.jpg"

import {
  MyWorksContainer,
  MyWorksH1,
  MyWorksWrapper,
  MyWorksCard,
  MyWorksModalImage,
} from "./MyWorksElements"

const data = [
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
  Icon10,
  Icon11,
  Icon12,
  Icon13,
  Icon14,
  Icon15,
  Icon16,
  Icon17,
  Icon18,
  Icon19,
  Icon20,
  Icon21,
  Icon22,
  Icon23,
  Icon24,
  Icon25,
  Icon26,
  Icon27,
  Icon28,
  Icon29,
  Icon30,
  Icon31,
  Icon32,
  Icon33,
]

const MyWorks = () => {
  return (
    <MyWorksContainer id="myWorks">
      <MyWorksH1>Мои работы</MyWorksH1>
      <MyWorksWrapper>
        {data.map((item, index) => {
          return (
            <MyWorksCard key={index}>
              <MyWorksModalImage
                src={item}
                small={item}
                large={item}
                hideDownload={true}
                hideZoom={true}
                alt="Мои тату работы"
              />
              {/* <MyWorksH2>Reduce expenses</MyWorksH2> */}
              {/* <MyWorksP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                magna scelerisque, dignissim urna id, vehicula risus.
              </MyWorksP> */}
            </MyWorksCard>
          )
        })}
      </MyWorksWrapper>
    </MyWorksContainer>
  )
}

export default MyWorks
