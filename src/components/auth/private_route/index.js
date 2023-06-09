import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () =>
  localStorage.getItem("user") ? <Outlet /> : <Navigate replace to="/login" />;

export default PrivateRoute;
