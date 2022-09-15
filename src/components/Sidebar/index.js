import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
   return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon onClick={toggle}>
            <CloseIcon />
         </Icon>
         <SidebarWrapper>
            <SidebarMenu>
               <SidebarLink to="about" onClick={toggle}>Обо мне</SidebarLink>
               <SidebarLink to="myServices" onClick={toggle}>Виды работ</SidebarLink>
               <SidebarLink to="myWorks" onClick={toggle}>Мои работы</SidebarLink>
               {/* <SidebarLink to="signup" onClick={toggle}> Sign Up</SidebarLink> */}
            </SidebarMenu>
            <SideBtnWrap>
               {/* <SidebarRoute to="/signin">Sign In</SidebarRoute> */}
            </SideBtnWrap>
         </SidebarWrapper>
      </SidebarContainer >
   )
}

export default Sidebar