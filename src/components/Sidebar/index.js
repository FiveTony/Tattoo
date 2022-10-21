import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
} from "./SidebarElements"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            onClick={() => {
              try {
                window.ym(90441101, "reachGoal", "AboutRouteFromBtn")
              } catch (error) {
                console.log(error)
              }
              toggle()
            }}
          >
            Обо мне
          </SidebarLink>
          <SidebarLink
            to="myServices"
            onClick={() => {
              try {
                window.ym(90441101, "reachGoal", "ServicesRouteFromBtn")
              } catch (error) {
                console.log(error)
              }
              toggle()
            }}
          >
            Виды работ
          </SidebarLink>
          <SidebarLink
            to="myWorks"
            onClick={() => {
              try {
                window.ym(90441101, "reachGoal", "MyWorksRouteFromBtn")
              } catch (error) {
                console.log(error)
              }
              toggle()
            }}
          >
            Мои работы
          </SidebarLink>
          <SidebarLink
            to="contact"
            onClick={() => {
              try {
                window.ym(90441101, "reachGoal", "ContactsRouteFromBtn")
              } catch (error) {
                console.log(error)
              }
              toggle()
            }}
          >
            Контакты
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          {/* <SidebarRoute to="/signin">Sign In</SidebarRoute> */}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
