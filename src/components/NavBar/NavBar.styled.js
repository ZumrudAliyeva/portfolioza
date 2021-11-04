import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.ul`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  @media screen and (max-width: 768px) {
    margin-bottom: 150px;
  }
  @media screen and (max-width: 480px) {
  }
`;
export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(p) => p.theme.textColor};
  box-shadow: ${(p) => p.theme.shadow};
  position: relative;
  cursor: pointer;

  &::after {
    content: attr(data-text);
    color: #fff;
    position: absolute;
    z-index: -1;
    left: 230%;
    font-size: 12px;
    bottom: -1px;
    overflow: hidden;
    width: 0;
    transition: all ease 1s;
  }

  &:hover {
    background-image: ${(p) => p.theme.gradientColor};
    &::after {
      width: auto;
    }
  }
  a {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    &.active {
      background-image: ${(p) => p.theme.gradientColor};
    }
  }

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
    width: 6px;
    height: 6px;
  }
`;
export const NavLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

////////////////// sidebar //////////////////////

export const SidebarContainer = styled.div`
  padding-right: 30px;
  width: 30%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99998;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: ${(p) => p.theme.sideBgColor};
  box-shadow: ${(p) => p.theme.shadow};
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  &::after {
    content: "";
    display: block;
    background-image: ${(p) => p.theme.gradientColor};
    width: 1px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99999;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 30px;
  }
  @media screen and (max-width: 480px) {

  }
`;
export const SideMenu = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SidebarItem = styled.li`
  text-align: right;
  font-size: 4rem;
  font-family: "Cormorant Garamond";
  color: #fff;
  width: 100%;
  cursor: pointer;

  a {
    &.active {
      font-style: italic;
      color: ${(p) => p.theme.primaryColor};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: ${(p) => p.theme.gradientColor};
    }

    &:hover {
      font-style: italic;
      color: ${(p) => p.theme.primaryColor};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: ${(p) => p.theme.gradientColor};
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    height: auto;
    margin-bottom: 15px;
    text-align: center;
  }
`;
export const Icon = styled.li`
  padding: 15px 0;
`;
