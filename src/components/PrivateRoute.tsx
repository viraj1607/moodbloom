import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const user = localStorage.getItem("token");

  return user ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
