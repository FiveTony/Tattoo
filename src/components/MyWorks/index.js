import React from "react"
import Icon1 from "../../images/myWorks/myWorksPhoto1.jpg"
import Icon2 from "../../images/myWorks/myWorksPhoto2.jpg"
import Icon3 from "../../images/myWorks/myWorksPhoto3.jpg"
import Icon4 from "../../images/myWorks/myWorksPhoto4.jpg"
import Icon5 from "../../images/myWorks/myWorksPhoto5.jpg"
import Icon6 from "../../images/myWorks/myWorksPhoto6.jpg"
import Icon7 from "../../images/myWorks/myWorksPhoto7.jpg"
import Icon8 from "../../images/myWorks/myWorksPhoto8.jpg"
import Icon9 from "../../images/myWorks/myWorksPhoto9.jpg"
import Icon10 from "../../images/myWorks/myWorksPhoto10.jpg"
import Icon11 from "../../images/myWorks/myWorksPhoto11.jpg"
import Icon12 from "../../images/myWorks/myWorksPhoto12.jpg"
import Icon13 from "../../images/myWorks/myWorksPhoto13.jpg"
import Icon14 from "../../images/myWorks/myWorksPhoto14.jpg"
import Icon15 from "../../images/myWorks/myWorksPhoto15.jpg"
import Icon16 from "../../images/myWorks/myWorksPhoto16.jpg"
import Icon17 from "../../images/myWorks/myWorksPhoto17.jpg"
import Icon18 from "../../images/myWorks/myWorksPhoto18.jpg"
import Icon19 from "../../images/myWorks/myWorksPhoto19.jpg"
import Icon20 from "../../images/myWorks/myWorksPhoto20.jpg"
import Icon21 from "../../images/myWorks/myWorksPhoto21.jpg"
import Icon22 from "../../images/myWorks/myWorksPhoto22.jpg"
import Icon23 from "../../images/myWorks/myWorksPhoto23.jpg"
import Icon24 from "../../images/myWorks/myWorksPhoto24.jpg"
import Icon25 from "../../images/myWorks/myWorksPhoto25.jpg"
import Icon26 from "../../images/myWorks/myWorksPhoto26.jpg"
import Icon27 from "../../images/myWorks/myWorksPhoto27.jpg"
import Icon28 from "../../images/myWorks/myWorksPhoto28.jpg"
import Icon29 from "../../images/myWorks/myWorksPhoto29.jpg"
import Icon30 from "../../images/myWorks/myWorksPhoto30.jpg"
import Icon31 from "../../images/myWorks/myWorksPhoto31.jpg"
import Icon32 from "../../images/myWorks/myWorksPhoto32.jpg"
import Icon33 from "../../images/myWorks/myWorksPhoto33.jpg"
import Icon34 from "../../images/myWorks/myWorksPhoto34.jpg"

import {
  MyWorksContainer,
  MyWorksH1,
  MyWorksWrapper,
  MyWorksCard,
  MyWorksIcon,
  MyWorksH2,
  MyWorksP,
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
  Icon34,
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
                hideZoom={true}F
              />
              {/* <MyWorksH2>Reduce expenses</MyWorksH2> */}
              {/* <MyWorksP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                magna scelerisque, dignissim urna id, vehicula risus.{" "}
              </MyWorksP> */}
            </MyWorksCard>
          )
        })}
      </MyWorksWrapper>
    </MyWorksContainer>
  )
}

export default MyWorks
