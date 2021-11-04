import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import About from "./components/About/About";
import { ThemeProvider } from "styled-components";
import { Cursor, darkTheme, lightTheme } from "./components/Main.styled";

const LightTheme = {
  background: "#fff",
  color: "#111"
}
const DarkTheme = {
  background: "#111",
  color: "#fff"
}
const themes = {
  light: LightTheme,
  dark: DarkTheme
}


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [time, setTime] = useState("");
  const date = new Date().toDateString();

  const showTime = () => {
    setTime(new Date().toLocaleTimeString());
  };
  setInterval(showTime, 1000);

const [theme, setTheme] = useState("dark")
const [isActive, setIsActive] = useState(false)

const themeToggler = () => {
  theme ==="dark" ? setTheme("light") : setTheme("dark")
  setIsActive(!isActive)
}

  return (
    <>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <Header isOpen={isOpen} toggle={toggle} isActive={isActive} themeToggler={themeToggler}/>
    <Home theme={theme} setTheme={setTheme}/>
    <About theme={theme} setTheme={setTheme}/>
    <Projects theme={theme} setTheme={setTheme}/>
    <Contact theme={theme} setTheme={setTheme}/>
    <Footer date={date} time={time} theme={theme} setTheme={setTheme}/>
    
    </ThemeProvider>
    </>
  );
}

export default App;
