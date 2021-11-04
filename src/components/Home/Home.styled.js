import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(p) => p.theme.mainBgColor};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  width: 85%;
  padding: 10px 0;
  margin-bottom: 10px;
  text-align: center;
  overflow: hidden;
  box-sizing: inherit;
  h1 {
    font-size: 7rem;
    font-weight: 400;
    line-height: 1.2;
    font-family: "Cormorant Garamond";
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: ${(p) => p.theme.gradientColor};
    position: relative;
    cursor: pointer;
    transition: all ease-in-out 0.9s;
    &:hover {
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    h1 {
      font-size: 3rem;
    }
  }
`;

export const HomeTitleOne = styled.h1``;
export const HomeTitleTwo = styled.h1``;

export const HomeText = styled.h4`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.2;
  margin-top: 100px;
  font-family: "Epilogue";
  color: ${(p) => p.theme.textColor};
  cursor: pointer;
  position: absolute;
  bottom: 5%;
  &:hover {
    transform: rotate(-10deg);
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
    line-height: 1.2;
    position: relative;
    bottom: auto;
    margin-top: 30px;
  }
`;

const rotate = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;

export const ScrollBtn = styled(Link)`
  width: 120px;
  height: 120px;
  position: absolute;
  bottom: 15px;
  right: 15px;
  border-radius: 50%;
  cursor: pointer;
  animation: ${rotate} 8s linear infinite;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
