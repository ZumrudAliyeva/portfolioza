import React from "react";
import { animateScroll as scroll } from "react-scroll";
import NavBar from "../NavBar/NavBar";
import Sidebar from "../NavBar/Sidebar";
import { CircleMenu, HeaderContainer, HeaderTop, Logo, MenuIcon } from "./Header.styled";


const Header = ({ time, isOpen, toggle, isActive, themeToggler }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <HeaderContainer>
        <HeaderTop>
          <Logo to="/" onClick={toggleHome}>
            <span>Zumrud A</span><p>.</p>
          </Logo>
          <MenuIcon onClick={toggle}>
              <span>open</span>
          </MenuIcon>
        </HeaderTop>
        <CircleMenu>
            <NavBar/>
        </CircleMenu>
        <Sidebar isOpen={isOpen} toggle={toggle} isActive={isActive} themeToggler={themeToggler}/>
    </HeaderContainer>
  );
};

export default Header;
