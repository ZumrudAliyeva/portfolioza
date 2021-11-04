import styled from "styled-components";
// import {lightTheme, darkTheme} from "../Main.styled"

export const AboutContainer = styled.div`
  background-color: ${(p) => p.theme.mainBgColor};
  width: 100%;
  height: 100%;
  padding: 30px 0px;
`;
export const AboutFlexRow = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const Skills = styled.ul`
  overflow: hidden;
  width: 100%;
  padding: 30px;
  background-color: transparent;
  border-top: 1px solid ${(p) => p.theme.textColor};
  border-bottom: 1px solid ${(p) => p.theme.textColor};
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    padding: 15px;
  }
`;
export const Item = styled.div`
  background: transparent;
  text-align: center;
  width: 100px;
  margin: 15px;
  padding: 10px;
  position: relative;

  img {
    filter: grayscale(1);
  }

  &:hover {
    /* border-color: var(--primary-color); */
    img {
      filter: grayscale(0);
      transform: scale(1.2);
    }
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    margin: 10px;
    padding: 8px;
  }
`;

export const SkillIcon = styled.img`
  width: 70px;
  height: 70px;
  margin-top: 22px;
  margin-bottom: 22px;
  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

export const Education = styled.div`
  background-color: ${(p) => p.theme.mainBgColor};
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  margin: 0;
  margin-bottom: 60px;
  padding: 60px;
  color: ${(p) => p.theme.textColor};
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 30px;
    padding-top: 0;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const Info = styled.div`
  background: ${(p) => p.theme.mainBgColor};
  width: 40%;
  padding: 42px;
  color: ${(p) => p.theme.textColor};
  border-top: 1px solid ${(p) => p.theme.textColor};
  border-bottom: 1px solid ${(p) => p.theme.textColor};
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    z-index: -1;
    width: 100%;
    height: 100%;
    background: ${(p) => p.theme.gradientColor};
    transition: all ease 0.8s;
  }
  h6 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    font-size: 1rem;
    font-weight: 300;
  }
  &:hover {
    transform: translateY(-10px);
    &::before {
      transform: translateX(100%);
    }
  }

  @media screen and (max-width: 768px) {
    width: 95%;
    height: auto;
    padding: 30px;
    margin-bottom: 22px;
    text-align: center;
    h6 {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 8px;
    }
    p {
      font-size: 0.8rem;
      font-weight: 300;
    }
  }
`;
export const TextBox = styled.div`
  width: 60%;
  height: 100%;
  padding: 30px 80px;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  /* margin-right: 60px; */
  p {
    line-height: 1.5;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 60px 30px;
    text-align: center;
  }
`;
export const AboutImage = styled.div`
  width: auto;
  height: 70%;
  margin: 0 auto;
  margin-right: 60px;
  position: relative;
  z-index: 2;
  img {
    height: auto;
    width: 300px;
    margin-left: auto;
    position: relative;
  }

  &::before {
    content: "";
    background-color: transparent;
    border: 1px solid ${(p) => p.theme.textColor};
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -8px;
    left: -8px;
  }
  &::after {
    content: "";
    background-color: transparent;
    border: 1px solid ${(p) => p.theme.textColor};
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -16px;
    left: -16px;
  }
  &:hover {
    &::before {
      bottom: -13px;
      left: -13px;
    }
    &::after {
      bottom: 13px;
      left: 13px;
    }
  }
  @media screen and (max-width: 768px) {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    img {
      margin: 0;
    }
  }
`;

export const SkillsTitle = styled.div`
  width: 100%;
  text-align: center;
  padding: 60px;
  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`;

export const CvButton = styled.a`
  width: 180px;
  position: relative;
  padding: 15px 30px;
  margin-top: 60px;
  background-color: transparent;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid ${(p) => p.theme.textColor};
  outline: none;
  color: ${(p) => p.theme.textColor};
  font-weight: 300;
  text-transform: uppercase;
  &:hover {
    background: ${(p) => p.theme.textColor};
    color: ${(p) => p.theme.mainBgColor};
  }

  @media screen and (max-width: 768px) {
    width: 130px;
    padding: 10px 15px;
    margin-top: 30px;
    font-size: 0.8rem;
  }
`;
