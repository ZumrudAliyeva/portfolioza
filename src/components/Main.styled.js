import styled from "styled-components";

////////////// themes /////////////////////
export const lightTheme = {
  mainBgColor: "#fff",
  secondBgColor: "E8BD48",
  sideBgColor: "#108E5B",
  primaryColor: "#005991",
  secondaryColor: "#7EA157",
  logo: "#111117",
  lineColor: "#111117",
  textColor: "#141414",
  glassColor: "rgba(255, 255, 255, 0.2)",
  gradientColor: "linear-gradient(90deg,#00c4cc,#7d2ae8)",
  shadow: "0 22px 40px rgba(0, 0, 0, 0.1)"
}
export const darkTheme = {
  mainBgColor: "#141414",
  secondBgColor: "#16161c",
  sideBgColor: "#005991",
  primaryColor: "#005991",
  secondaryColor: "#018d82",
  logo: "#fff",
  lineColor: "#fff",
  textColor: "#fff",
  glassColor: "rgba(45, 45, 50, 0.2)",
  gradientColor: "linear-gradient(90deg,#00c4cc,#7d2ae8)",
  shadow: "0 22px 40px rgba(0, 0, 0, 0.1)"
}

////////////// theme button ////////////////

export const ThemeButton = styled.button`
outline: none;
background:transparent;
border: none;
cursor: pointer;
width: auto;
height: auto;
position: absolute;
top: 22%;
right: 30px;
color: ${p=>p.theme.textColor};
`
////////////////////////////////////////

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Container = styled.div`
  padding: 0 15px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 480px) {
  }
`;
export const TitleWrapper = styled.div`
  /* width: auto; */
  padding: 10px  60px;
  margin-bottom: 10px;
  overflow: hidden;
  box-sizing: inherit;
  border-bottom: 1px solid ${(p) => p.theme.textColor};
  h1 {
    font-size: 7rem;
    font-weight: 400;
    line-height: 1.2;
    font-family: "Cormorant Garamond";
    color: #fff;
  }
  `;
export const PageTitle = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  padding: 30px 60px;
  position: relative;
  @media screen and (max-width: 768px){ 
  }
  @media screen and (max-width: 480px){
  }  
  `;

export const Title = styled.h1`
  font-size: 6rem;
  font-weight:400;
  line-height: 1.5;
  font-family: "Cormorant Garamond";
  color: ${p=>p.theme.textColor};
  @media screen and (max-width: 768px){ 
  }
  @media screen and (max-width: 480px){
    font-size: 3rem;
  line-height: 1.2;
}  
  `;

export const Subtitle = styled.h4`
  font-size: 4rem;
  font-weight:400;
  line-height: 1.5;
  font-family: "Cormorant Garamond";
  color: ${p=>p.theme.textColor};
  @media screen and (max-width: 768px){ 
  }
  @media screen and (max-width: 480px){
    font-size: 2rem;
  line-height: 1.2;
}  
  `;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
  font-family: "Epilogue";
  color: ${p=>p.theme.textColor};
  @media screen and (max-width: 768px){ 
  }
  @media screen and (max-width: 480px){
    font-size: 1rem;
}  
`;

