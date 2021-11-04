import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 42px;
  border-top: 1px solid #111;
  background: ${(p) => p.theme.sideBgColor};
  position: relative;
  bottom: 0;
  padding: 0px 15px;

  span {
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    height: auto;
    padding: 0px 10px;
  }
`;
export const FooterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55%;
  position: relative;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    font-size: 0.8rem;
  }
`;
export const Copy = styled.span`
  display: flex;
  justify-content: flex-end;
  position: relative;
  @media screen and (max-width: 480px) {
      justify-content: flex-start;
      padding-left: 9px;
      font-size: 0.8rem;
    }
`;
export const Social = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    margin: 0 10px;
    color: #fff;
    &:hover {
      opacity: 0.6;
    }
    @media screen and (max-width: 768px) {
    }
    @media screen and (max-width: 480px) {
      justify-content: flex-start;
      font-size: 0.8rem;
      a {
        margin: 0;
        margin-right: 5px;
      }
    }
  }
`;
export const Datetime = styled.span`
  display: flex;
  justify-content: flex-end;
  span {
    margin-left: 30px;
  }
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    align-items: flex-end;
    span {
      margin: 0px;
      font-size: 0.8rem;
    }
  }
`;
