import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Item, SkillIcon } from "./About.styled";
import reactIcon from "../../assets/icons/react.png"
import reduxIcon from "../../assets/icons/redux.png"
import htmlIcon from "../../assets/icons/html.png"
import cssIcon from "../../assets/icons/css-alt.png"
import jsIcon from "../../assets/icons/javascript.png"
import jqueryIcon from "../../assets/icons/jquery.png"
import bootstrapIcon from "../../assets/icons/bootstrap.png"
import sassIcon from "../../assets/icons/sass.png"
import muiIcon from "../../assets/icons/mui.png"
import tailwIcon from "../../assets/icons/Tailwind.png"
import styledIcon from "../../assets/icons/styledlogo.png"
import firebaseIcon from "../../assets/icons/firebase.png"
import webpIcon from "../../assets/icons/webpack.png"
import gitIcon from "../../assets/icons/git.png"
import vsIcon from "../../assets/icons/visualstudio.png"
import figmaIcon from "../../assets/icons/figma.png"
import nextIcon from "../../assets/icons/nextjs.png"

const AboutItem = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1200,
    speed: 2000,
    swipeToSlide: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 812,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
    ]
  };

  return (
    <>
<Slider {...settings}>
      <Item><SkillIcon src={htmlIcon} /></Item>
      <Item><SkillIcon src={cssIcon} /></Item>
      <Item><SkillIcon src={jsIcon} /></Item>
      <Item><SkillIcon src={jqueryIcon} /></Item>
      <Item><SkillIcon src={reactIcon} /></Item>
      <Item><SkillIcon src={reduxIcon} /></Item>
      <Item><SkillIcon src={nextIcon} /></Item>
      <Item><SkillIcon src={sassIcon} /></Item>
      <Item><SkillIcon src={bootstrapIcon} /></Item>
      <Item><SkillIcon src={muiIcon} /></Item>
      <Item><SkillIcon src={tailwIcon} /></Item>
      <Item><SkillIcon src={styledIcon} /></Item>
      <Item><SkillIcon src={figmaIcon} /></Item>
      <Item><SkillIcon src={gitIcon} /></Item>
      <Item><SkillIcon src={webpIcon} /></Item>
      <Item><SkillIcon src={vsIcon} /></Item>
      <Item><SkillIcon src={firebaseIcon} /></Item>
      </Slider>
    </>
  );
};

export default AboutItem;
