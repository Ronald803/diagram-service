import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { white } from "tailwindcss/colors";
import LoginCard from "../login/LoginCard";

function Navbar(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [hideLoginCard, setHideLoginCard] = useState("hidden");
  const openLoginCard = () => {
    if (hideLoginCard == "hidden") {
      setHideLoginCard("");
    } else {
      setHideLoginCard("hidden");
    }
  };

  const logOut = () => {};

  const navStyle = `${props.bgColor} text-white border-gray-200 p-3`

  return (
    <div className="text-white relative">
      <nav className={navStyle}>
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <div className="items-center w-1/2 flex justify-start">
            <div className="pl-2">
              <img className="w-10" src="./src/assets/logo.png"/>
            </div>
            <span className="text-3xl font-semibold pl-2">
              Diagram Generator
            </span>
            <span className="px-8">
              <DarkModeSwitch
                style={{ marginBottom: "0.25rem" }}
                checked={props.isDarkMode}
                onChange={props.toggleDarkMode}
                sunColor={white}
                size={32}
              />
            </span>
          </div>
          <div className="w-1/2 pr-5">
            <ul className="font-medium flex flex-col">
              {loggedIn == false ? (
                <li className="self-end">
                  <button
                    onClick={openLoginCard}
                    className="text-2xl hover:text-black "
                  >
                    Login
                  </button>
                </li>
              ) : (
                <li className="self-end">
                  <button
                    onClick={logOut}
                    className="text-2xl hover:text-black "
                  >
                    Cerrar Sesión
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className={hideLoginCard}>
        <div className="fixed right-0 z-50">
          <LoginCard secondary={props.secondary}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
