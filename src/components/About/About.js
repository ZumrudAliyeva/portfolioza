import React from "react";
import { PageTitle, Text, Title } from "../Main.styled";
import {
  AboutContainer,
  Skills,
  Education,
  Info,
  TextBox,
  AboutImage,
  SkillsTitle,
  AboutFlexRow,
  CvButton
} from "./About.styled";
import AboutItem from "./AboutItem";
import Img from "../../assets/contact-image.jpg";
import cv from "../../assets/Zumrud_Aliyeva.pdf"

const About = () => {
  return (
    <AboutContainer id="about">
      <PageTitle>
        <Title>About me</Title>
      </PageTitle>
      <AboutFlexRow>
        <TextBox>
          <Text>
            Hi, I’m Zumrud Aliyeva, a Front-End Developer located in Baku. I
            have a serious passion for entire frontend spectrum, UI designs, effects and creating
            intuitive, dynamic user experiences. Well-organised person, problem
            solver, independent employee with high attention to detail. I am
            interested in working on ambitious projects with positive people. If
            you have any request or question, don’t hesitate to use the form or
            send me an email.
          </Text>
          <CvButton href={cv} download>Download CV</CvButton>
        </TextBox>
        <AboutImage>
          <img src={Img} alt="" />
        </AboutImage>
      </AboutFlexRow>
      <SkillsTitle>
        <Title>My skills</Title>
      </SkillsTitle>
      <Skills>
        <AboutItem />
      </Skills>
      <SkillsTitle>
        <Title>Education</Title>
      </SkillsTitle>
      <Education>
        <Info>
            {/* <InfoBeforeImg src={magic} alt="" /> */}
          <h6>Baku Slavic University (2014-2018)</h6>
          <p>Azerbaijan philology and journalism - bachelor</p>
        </Info>
        <Info>
        {/* <InfoBeforeImg src={magic} alt="" /> */}
          <h6>Code Academy (2019-2020)</h6>
          <p>Programming - web developer</p>
        </Info>
      </Education>
    </AboutContainer>
  );
};

export default About;
