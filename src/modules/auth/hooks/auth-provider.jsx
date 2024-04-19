import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginRequest from "../api/auth-functionality"


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [token, setToken] = useState( localStorage.getItem("token") || sessionStorage.getItem("token") || "");
  const navigate = useNavigate();

  const logout = () => {
    setToken(""),
    localStorage.removeItem("token"),
    sessionStorage.clear()
    navigate("/login")
  }

  const login = async (email, password, remember) => {
    const token = await loginRequest(email,password);

    if(token.errorMessage){
      throw new Error(token.errorMessage);
    }
    
    setToken(token.token);

    if(remember){
      localStorage.setItem("token", token.token);
    }else {
      sessionStorage.setItem("token", token.token);
    }

    navigate("/");
  }

  return <AuthContext.Provider value={{token, logout, login}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => { return useContext(AuthContext) };