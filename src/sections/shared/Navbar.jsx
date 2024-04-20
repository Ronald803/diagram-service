import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { white } from "tailwindcss/colors";
import { useAuth } from "../../modules/auth/hooks/auth-provider";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const auth = useAuth();
  const [loggedIn, setLoggedIn] = useState(auth ? true : false);
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  };

  const logOut = () => {
    auth.logout();
  };

  const navStyle = `${props.bgColor} text-white border-gray-200 p-3`;

  return (
    <div className="text-white relative">
      <nav className={navStyle}>
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <div className="items-center w-1/2 flex justify-start">
            <div className="pl-2">
              <img className="w-10" src="https://cdn.discordapp.com/attachments/1125580906023899329/1226996283600933005/image.png?ex=6626cc56&is=66145756&hm=9f7ffea51d4e30e53f56a4eb0af801cccd540aa50fbdc8c700fda76408c66ff3&" />
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
                    onClick={redirectToLogin}
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
                    Log out
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
