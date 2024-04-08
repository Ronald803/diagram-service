import React, { useState } from "react";
import BodyComponent from "./sections/generator/BodyComponent";
import Footer from "./sections/shared/Footer";
import Navbar from "./sections/shared/Navbar";

function App() {
  const [theme, setTheme] = useState("_dark");
  const [isDarkMode, setDarkMode] = useState(false);
  const [color, setColor] = useState("");
  const [color_, setColor_] = useState("bg-primary");
  const [secondary, setSecondary] = useState("");

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    isDarkMode
      ? setColor("bg-darkTheme") ||
        setTheme("dracula") ||
        setColor_("bg-darkAux") ||
        setSecondary("bg-secondary")
      : setColor("bg-defaultTheme") ||
        setTheme("github") ||
        setColor_("bg-primary") ||
        setSecondary("bg-primary");
  };

  return (
    <>
      <div className={color}>
        <Navbar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          bgColor={color_}
          secondary={secondary}
        />
        <BodyComponent theme={theme} secondary={secondary}/>
        <Footer bgColor={color_} />
      </div>
    </>
  );
}

export default App;
