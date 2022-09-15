import React from "react"
import Icon1 from "../../images/svg-1.svg"
import Icon2 from "../../images/photoMyWorks1.jpg"
import Icon3 from "../../images/photoMyWorks2.jpg"
import Icon4 from "../../images/photoMyWorks3.jpg"
import {
  MyWorksContainer,
  MyWorksH1,
  MyWorksWrapper,
  MyWorksCard,
  MyWorksIcon,
  MyWorksH2,
  MyWorksP,
} from "./MyWorksElements"

const data = [
   Icon2,
   Icon3,
   Icon4,
   Icon3,
   Icon2,
   Icon4,
   Icon1,
]

const MyWorks = () => {
  return (
    <MyWorksContainer id="myWorks">
      <MyWorksH1>Мои работы</MyWorksH1>
      <MyWorksWrapper>
        {data.map((item, index) => {
         console.log(item)
          return (
            <MyWorksCard key={index}>
              <MyWorksIcon src={item} />
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
