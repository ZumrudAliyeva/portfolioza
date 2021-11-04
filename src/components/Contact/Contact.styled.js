import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  height: auto;
  background: ${(p) => p.theme.mainBgColor};
  position: relative;
  padding-bottom: 30px;

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const ContactPageTitle = styled.div`
  /* padding-left: 60px; */
  padding-bottom: 42px;
  width: 100%;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
export const FormContainer = styled.div`
  width: 42%;
  height: 90%;
  padding: 30px;
  padding-bottom: 0;
  margin-left: 60px;
  background: transparent;

  @media screen and (max-width: 768px) {
    width: 95%;
    margin: 0 auto;
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  input,
  textarea {
    width: 100%;
    background: no-repeat;
    box-shadow: none;
    padding: 10px 0px;
    margin-bottom: 30px;
    border: none;
    color: ${(p) => p.theme.textColor};
    border-bottom: 1px solid ${(p) => p.theme.textColor};
    outline: none;
    background: transparent;
    &:focus {
      border-bottom: 1px solid ${(p) => p.theme.secondaryColor};
    }
    &::placeholder {
      font-size: 0.8rem;
      font-weight: 300;
      color: ${(p) => p.theme.textColor};
    }
  }
  input[name="user_name"],
  input[name="user_email"] {
    width: 48%;
  }
`;
export const SubmitButton = styled.div`
  button {
    width: 150px;
    position: relative;
    padding: 15px 30px;
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
      width: 120px;
      font-size: 0.8rem;
    }
    @media screen and (max-width: 480px) {
    }
  }
`;
export const ResultDiv = styled.div`
  width: 100%;
  margin-bottom: 22px;
  color: ${(p) => p.theme.primaryColor};
`;

export const MapContainer = styled.div`
  width: 50%;
  min-width: 50%;
  height: 100%;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  position: relative;
  overflow: hidden !important;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
    align-items: flex-end;
    padding-bottom: 30px;
  }
`;

export const Miow = styled.img`
  width: 70%;
  height: auto;
  @media screen and (max-width: 768px) {
    width: 61%;
  }
`;

export const ContactInfo = styled.div`
  width: 70%;
  height: auto;
  padding: 42px 30px;
  text-align: center;
  background: ${(p) => p.theme.glassColor};
  box-shadow: ${(p) => p.theme.shadow};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  p {
    color: #fff;
    font-weight: 300;
    margin-bottom: 10px;
  }

  &:hover {
    background: ${(p) => p.theme.gradientColor};
  }

  @media screen and (max-width: 768px) {
    padding: 22px 5px;
    width: 61%;
    font-size: 0.8rem;
  }
`;
