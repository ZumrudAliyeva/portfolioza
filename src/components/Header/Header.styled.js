import styled from "styled-components";
import { Link } from "react-scroll";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  z-index: 1100;
  background: transparent;
  position: fixed;
  top: 0;
  @media screen and (max-width: 768px){
    
  }
  @media screen and (max-width: 480px){
height: 50px;
  }
`;

export const HeaderTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  @media screen and (max-width: 768px){
    
  }
  @media screen and (max-width: 480px){
  padding: 0 10px;
  }
`;

export const Logo = styled(Link)`
width: 200px;
height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
  
  span {
    display: inline-block;
    height: 100%;
    width: auto;
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: 1px;
    font-family: 'Augustinne';
    color: ${(p) => p.theme.textColor};
    position: relative;
  }
    p{
      margin-left: 6px;
      font-size: 2.5rem;
    font-weight: 400;
      color: ${(p) => p.theme.primaryColor};
    }
    @media screen and (max-width: 768px){
    
  }
  @media screen and (max-width: 480px){
span{
  font-size: 2rem;
}  
p{
  font-size: 2rem;
}  
}
`;

export const MenuIcon = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    display: block;
    font-size: 1rem;
    font-weight: 300;
    color: ${(p) => p.theme.textColor};
    position: relative;
    cursor: pointer;
  }
  @media screen and (max-width: 768px){
    
  }
  @media screen and (max-width: 480px){
span{
  font-size: 0.8rem;
}  
}
`;

export const CircleMenu = styled.div`
  position: absolute;
  z-index: 1100;
  left: 15px;
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 768px){
    
  }
  @media screen and (max-width: 480px){
left: 10px;
}  
`;
