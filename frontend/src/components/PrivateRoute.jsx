import { Navigate } from "react-router-dom";

const PrivateRoute = ({ user, Component }) => {
  return user ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
