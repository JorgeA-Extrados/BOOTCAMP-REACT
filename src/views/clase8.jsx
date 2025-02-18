import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Usuario from "./usuario";

//React router dom
const Inicio = () => <h1>Página de Inicio</h1>;
const Acerca = () => <h1>Página Acerca de</h1>;

//useParams
// const Usuario = () => {
//   const { id } = useParams();
//   return <h1>Usuario ID: {id}</h1>;
// };

//Proteccion de rutas
// const Login = ({ onLogin }) => {
//   const [usuario, setUsuario] = useState("");

//   const manejarLogin = () => {
//     onLogin(usuario);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={usuario}
//         onChange={(e) => setUsuario(e.target.value)}
//       />
//       <button onClick={manejarLogin}>Iniciar sesión</button>
//     </div>
//   );
// };

// const Dashboard = () => <h1>Dashboard</h1>;

// const RutaPrivada = ({ autenticado, children }) => {
//   return autenticado ? children : <Navigate to="/login" />;
// };

const Clase8 = () => {
//   const [autenticado, setAutenticado] = useState(false);
  return (
    //   En este caso no pongo porque ya lo tengo implementado en mi appRoutes
    //El componente routes no funciona porque ya esta declarado en approutes
    //     <BrowserRouter>
    //     <nav>
    //       <Link to="/">Inicio</Link>
    //       <Link to="/acerca">Acerca</Link>
    //     </nav>
    //     <Routes>
    //       <Route path="/" element={<Inicio />} />
    //       <Route path="/acerca" element={<Acerca />} />
    //     </Routes>
    //   </BrowserRouter>
    <>
      {/* React router dom */}
      {/* <div>
        <nav>
          <Link
            style={{ borderColor: "#000", border: "1px solid", margin: 5 }}
            to="/"
          >
            Inicio
          </Link>
          <Link
            style={{ borderColor: "#000", border: "1px solid", margin: 5 }}
            to="/acerca"
          >
            Acerca
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca" element={<Acerca />} />
        </Routes>
      </div> */}

      {/* useParams */}
      {/* <div>
        <nav>
          <Link to="/usuario/1">Usuario 1</Link>
          <Link to="/usuario/2">Usuario 2</Link>
        </nav>
      </div> */}

      {/* Proteccion de rutas */}
      <div>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </>
  );
};

export default Clase8;
