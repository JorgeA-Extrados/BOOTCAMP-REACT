import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Clase1 from "../views/clase1";
import Home from "../views/home";
import Clase2 from "../views/clase2";
import Clase3 from "../views/clase3";
import Clase4 from "../views/clase4";
import Clase5 from "../views/clase5";
import Clase6 from "../views/clase6";
import Clase7 from "../views/clase7";
import Clase8 from "../views/clase8";
import Usuario from "../views/usuario";
import Login from "../views/login";
import RutaPrivada from "./ProtectedRoute";
import Dashboard from "../views/dashboard";
import Clase9 from "../views/clase9";
import Clase10 from "../views/clase10";


const AppRoutes = ({ autenticado, setAutenticado }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clase1" element={<Clase1 />} />
      <Route path="/clase2" element={<Clase2 nombre="Pedro" />} />
      <Route path="/clase3" element={<Clase3 />} />
      <Route path="/clase4" element={<Clase4 />} />
      <Route path="/clase5" element={<Clase5 />} />
      <Route path="/clase6" element={<Clase6 />} />
      <Route path="/clase7" element={<Clase7 />} />
      <Route path="/clase8" element={<Clase8 />} />
      <Route path="/clase8" element={<Clase8 />} />
      <Route path="/clase9" element={<Clase9 />} />
      <Route path="/clase10" element={<Clase10 />} />
      <Route path="/usuario/:id" element={<Usuario />} />
      <Route
        path="/login"
        element={<Login onLogin={() => setAutenticado(true)} />}
      />
      <Route
        path="/dashboard"
        element={
          <RutaPrivada autenticado={autenticado}>
            <Dashboard />
          </RutaPrivada>
        }
      />
    </Routes>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
