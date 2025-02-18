import React from "react";
import { Navigate } from "react-router-dom";


// const isAuthenticated = () => {
//   const token = localStorage.getItem("token");
//   return !!token;
// };

// const ProtectedRoute = ({ element }) => {
//   return isAuthenticated() ? element : <Navigate to="/" replace />;
// };

// export default ProtectedRoute;

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

const RutaPrivada = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

// const RutaPrivada = ({ autenticado, children }) => {
//   return autenticado ? children : <Navigate to="/login" />;
// };


export default RutaPrivada;