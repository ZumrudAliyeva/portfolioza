import React from "react";
import { FooterLeft, Copy, Datetime, FooterContainer,FooterContent, Social } from "./Footer.styled";

const Footer = ({date, time}) => {
  return (
      <FooterContainer>
        <FooterContent>
          <FooterLeft>
          <Copy>&copy; Thank you for visiting</Copy>
          <Social>
          <a href="https://github.com/ZumrudAliyeva">github</a>
          <a href="https://www.linkedin.com/in/zumrud-aliyeva-638816224/">linkedin</a>
          </Social>
          </FooterLeft>
          <Datetime>
          <span>{date}</span>
          <span>{time}</span>
          </Datetime>
        </FooterContent>
      </FooterContainer>
  );
};

export default Footer;
