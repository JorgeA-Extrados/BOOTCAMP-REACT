import React, { useState } from "react";

const Login = () => {
  const [usuario, setUsuario] = useState("");

  const manejarLogin = () => {
    localStorage.setItem("token", usuario);
  };

  return (
    <div>
      <input
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <button onClick={manejarLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;
