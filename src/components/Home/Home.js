import React from "react";
import {
  HomeContainer,
  ScrollBtn,
  HomeText,
  HomeTitleOne,
  HomeTitleTwo,
  Wrapper,
} from "./Home.styled";
import scrllBlack from "../../assets/scrll_black.png";
import scrllWhite from "../../assets/scrll_white.png";

const Home = ({ theme, setTheme }) => {
  return (
    <HomeContainer id="home">
      <Wrapper>
        <HomeTitleOne>Zumrud Aliyeva</HomeTitleOne>
      </Wrapper>
      <Wrapper>
        <HomeTitleTwo>Front-End Web Developer</HomeTitleTwo>
      </Wrapper>
      <HomeText>Welcome to my portfolio</HomeText>
      <ScrollBtn
        to="about"
        smooth={true}
        activeClass="active"
        spy={true}
        offset={50}
        duration={1200}
      >
        <img src={theme === "light" ? scrllBlack : scrllWhite} alt="" />
      </ScrollBtn>
    </HomeContainer>
  );
};

export default Home;
