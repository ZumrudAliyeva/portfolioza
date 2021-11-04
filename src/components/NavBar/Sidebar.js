import React from "react";
import { MenuIcon } from "../Header/Header.styled";
import { ThemeButton } from "../Main.styled";
import { Icon, NavLink, SidebarContainer, SidebarItem, SideMenu } from "./NavBar.styled";

const Sidebar = ({ isOpen, toggle, themeToggler, isActive }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <MenuIcon>
          <span>close</span>
        </MenuIcon>
      </Icon>
      <ThemeButton onClick={themeToggler}>
      {isActive ? "moon" : "sun"}
    </ThemeButton>
      <SideMenu>
        <SidebarItem>
          <NavLink to="home" onClick={toggle}
          smooth={true}
          activeClass="active"
          spy={true}
          offset={50}
          duration={1000}>
            Home
          </NavLink>
        </SidebarItem>
        <SidebarItem>
          <NavLink to="about" onClick={toggle}
          smooth={true}
          activeClass="active"
          spy={true}
          offset={50}
          duration={1000}>
            About
          </NavLink>
        </SidebarItem>
        <SidebarItem>
          <NavLink to="projects" onClick={toggle}
          smooth={true}
          activeClass="active"
          spy={true}
          offset={50}
          duration={1000}>
            Projects
          </NavLink>
        </SidebarItem>
        <SidebarItem>
          <NavLink to="contact" onClick={toggle}
          smooth={true}
          activeClass="active"
          spy={true}
          offset={50}
          duration={1000}>
            Contact
          </NavLink>
        </SidebarItem>
      </SideMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
