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
              <img className="w-10" src="https://cdn.discordapp.com/attachments/1125580906023899329/1226996283600933005/image.png?ex=6626cc56&is=66145756&hm=9f7ffea51d4e30e53f56a4eb0af801cccd540aa50fbdc8c700fda76408c66ff3&"/>
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
