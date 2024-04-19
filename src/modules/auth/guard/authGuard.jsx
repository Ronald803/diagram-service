import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/auth-provider";

const PrivateRoute = () => {
   const token = useAuth();
   return !token.token ? <Navigate to="/login" /> : <Outlet />;
};

export default PrivateRoute;