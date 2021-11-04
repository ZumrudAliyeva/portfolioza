import styled from "styled-components";
import { FaGithubAlt } from "react-icons/fa";
import { BiLink } from "react-icons/bi";

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 60px;
  background: ${(p) => p.theme.mainBgColor};
  @media screen and (max-width: 768px) {
    padding: 30px;
  }
  @media screen and (max-width: 480px) {
  }

`;
export const PortfolioNavbar = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 60px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;
      font-size: 1rem;
      cursor: pointer;
      color: ${(p) => p.theme.textColor};
      position: relative;
      transition: all ease 0.8s;
      &::before {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        width: 0%;
        height: 1px;
        background-color: ${(p) => p.theme.textColor};
      }
      &:hover {
        opacity: 0.8;
        transform: translateY(5px);
        &::before {
          width: 76%;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding-top: 0;
    ul {
      width: 100%;
      li {
        width: auto;
        padding: 5px 6px;
        font-size: 0.8rem;
        white-space: nowrap;
      }
    }
  }
`;
export const Portfolio = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 80px;
`;

////////////////////// ProjectsItem /////////////////////////////

export const ProItem = styled.div`
  width: 30%;
  height: 450px;
  margin: 15px;
  position: relative;
  overflow: hidden;
  box-sizing: inherit;
  background: ${(p) => p.theme.mainBgColor};
  border: 1px solid ${(p) => p.theme.textColor};
  box-shadow: ${(p) => p.theme.shadow};
  &:hover {
    transition: all ease-in-out 1s;
    transform: scale(0.9);

    div {
      transform: scale(1);
      h3{
          color: #fff;
      }
    }
    img {
        display: block;
    }
  }
  @media screen and (max-width: 768px) {
    width: 44%;
  }
  @media screen and (max-width: 667px) {
    width: 80%;
    height: 400px;
  }
`;
export const ProImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
  transform: rotate(13deg);
  transition: all ease-in-out 0.8s;
  display: none;
`;
export const ProContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 60px;
  padding-top: 50%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  display: block;
  transform: scale(0.9);
  /* backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); */
  /* background-image: var(--gradient); */
  h3 {
    font-size: 2rem;
    color: ${(p) => p.theme.textColor};
    span {
      margin-top: 60px;
    }
  }
  @media screen and (max-width: 812px) {
    padding: 20px;
    padding-top: 75%;
    h3 {
      font-size: 1.5rem;
      text-align: center;
      span {
        margin-top: 30px;
      }
    }
  }
  @media screen and (max-width: 667px) {
    padding: 10px;
    padding-top: 75%;
    h3 {
      font-size: 1.5rem;
      span {
        margin-top: 15px;
      }
    }
  }
`;

export const GithubIcon = styled(FaGithubAlt)`
  color: #fff;
  width: 22px;
  height: auto;
  margin-top: 22px;
  margin-right: 22px;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(0.8);
  }
  @media screen and (max-width: 768px) {
    width: 18px;
  }
`;
export const LinkIcon = styled(BiLink)`
  color: #fff;
  width: 22px;
  height: auto;
  margin-top: 22px;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(0.8);
  }
  @media screen and (max-width: 768px) {
    width: 18px;
  }
`;
