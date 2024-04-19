import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginRequest from "../api/auth-functionality"


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [token, setToken] = useState( localStorage.getItem("token") || "" );
  const navigate = useNavigate();

  const logout = () => {
    setToken(""),
    localStorage.removeItem("token"),
    navigate("/login")
  }

  const login = async (email, password) => {
    const token = await loginRequest(email,password);
    setToken(token.token);
    localStorage.setItem("token", token);
    navigate("/");
  }

  return <AuthContext.Provider value={{token, logout, login}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => { return useContext(AuthContext) };