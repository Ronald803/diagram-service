import { useState } from "react";
import BodyComponent from "../sections/generator/BodyComponent";
import Footer from "../sections/shared/Footer";
import Navbar from "../sections/shared/Navbar";
import AuthProvider from "../modules/auth/hooks/auth-provider";
import CodeEditorProvider from "../modules/codeEditor/context/CodeEditorProvider";
import NodesProvider from "../modules/nodes/context/NodesProvider";

const HomePage = () => {
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
      <AuthProvider>
        <div className={color}>
          <Navbar
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            bgColor={color_}
            secondary={secondary}
          />
          <CodeEditorProvider>
            <NodesProvider>
              <BodyComponent theme={theme} secondary={secondary} />
            </NodesProvider>
          </CodeEditorProvider>

          <Footer bgColor={color_} />
        </div>
      </AuthProvider>
    </>
  );
};

export default HomePage;
