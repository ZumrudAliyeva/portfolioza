import React from "react";
import { Nav, NavLink, NavItem } from "./NavBar.styled";

const NavBar = () => {
  return (
    <Nav>
      <NavItem data-text="home">
        <NavLink
          to="home"
          smooth={true}
          activeClass="active"
          spy={true}
          offset={50}
          duration={1200}
        />
      </NavItem>
      <NavItem data-text="about">
        <NavLink
          to="about"
          smooth={true}
          activeClass="active"
          spy={true}
          offset={50}
          duration={1200}
        />
      </NavItem>
      <NavItem data-text="projects">
        <NavLink
          to="projects"
          smooth={true}
          activeClass="active"
          spy={true}
          offset={50}
          duration={1200}
        />
      </NavItem>
      <NavItem data-text="contact">
        <NavLink
          to="contact"
          smooth={true}
          activeClass="active"
          spy={true}
          offset={50}
          duration={1200}
        />
      </NavItem>
    </Nav>
  );
};

export default NavBar;
