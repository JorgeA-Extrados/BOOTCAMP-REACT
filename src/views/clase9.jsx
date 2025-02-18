import React, { useState } from "react";

const Clase9 = () => {
  const [formulario, setFormulario] = useState({ nombre: "", email: "" });
  const [errores, setErrores] = useState({});

  const manejarCambio = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarCampoObligatorio = (valor) => {
    return valor.trim() !== "";
  };

  const validarLongitud = (valor, min, max) => {
    return valor.length >= min && valor.length <= max;
  };

  //   const manejarEnvio = (e) => {
  //     e.preventDefault();
  //     const nuevosErrores = {};
  //     if (!formulario.nombre) nuevosErrores.nombre = "Nombre es obligatorio";
  //     if (!validarEmail(formulario.email))
  //       nuevosErrores.email = "Correo inválido";
  //     setErrores(nuevosErrores);
  //     if (Object.keys(nuevosErrores).length === 0) {
  //       console.log("Formulario válido", formulario);
  //     }
  //   };

  // Función que maneja el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();
    const nuevosErrores = {};

    // Validación del nombre
    if (!validarCampoObligatorio(formulario.nombre)) {
      nuevosErrores.nombre = "Nombre es obligatorio";
    } else if (!validarLongitud(formulario.nombre, 3, 10)) {
      nuevosErrores.nombre = "El nombre debe tener entre 3 y 10 caracteres";
    }

    // Validación del email
    if (!validarEmail(formulario.email)) {
      nuevosErrores.email = "Correo inválido";
    }

    // Actualizar el estado de errores
    setErrores(nuevosErrores);

    // Si no hay errores, el formulario es válido
    if (Object.keys(nuevosErrores).length === 0) {
      console.log("Formulario válido", formulario);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={manejarEnvio}>
          <div>
            <input
              type="text"
              name="nombre"
              value={formulario.nombre}
              onChange={manejarCambio}
              placeholder="Nombre"
            />
            {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formulario.email}
              onChange={manejarCambio}
              placeholder="Email"
            />
            {errores.email && <p style={{ color: "red" }}>{errores.email}</p>}
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Clase9;
