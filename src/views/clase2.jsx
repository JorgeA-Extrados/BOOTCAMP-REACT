import React from "react";

const Saludo = ({ nombre }) => {
  return <h1>Hola, {nombre}</h1>;
};

const Tarjeta = ({ children }) => {
  return <div className="tarjeta">{children}</div>;
};

const Clase2 = ({ nombre }) => {
  const usuario = "Juan";
  const mostrarMensaje = true;
  const mostrar = true;

  const [contador, setContador] = React.useState(0);
  return (
    <>
      <h1>Título</h1>
      <p>Párrafo</p>

      <button className="mi-boton" onClick={() => alert("Clic")}>
        Clic aquí
      </button>

      {/* Codigo de Ejemplo */}

      <div className="container">
        <h1>Hola, mundo!</h1>
        <p>Este es un párrafo.</p>
        <img src="logo.png" alt="Logo" />
      </div>
      {/* Uso de operadores ternarios: Permite renderizar elementos basados en una condición. */}
      <div>
        {usuario ? (
          <h1>Bienvenido, {usuario}</h1>
        ) : (
          <h1>Por favor, inicia sesión</h1>
        )}
      </div>

      {/* Uso de operadores lógicos: Permite renderizar elementos si se cumple una condición. */}
      <div>
        {mostrar && <p>Este mensaje se muestra si `mostrar` es true.</p>}
      </div>

      {/* Fragmentos (<></> o <React.Fragment>): Permiten devolver múltiples elementos sin necesidad de un contenedor adicional. */}
      <>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
      </>

      {/* Ejemplo */}
      <div>
        {usuario ? (
          <h1>Bienvenido, {usuario}</h1>
        ) : (
          <h1>Por favor, inicia sesión</h1>
        )}
        {mostrarMensaje && (
          <p>Este mensaje se muestra si `mostrarMensaje` es true.</p>
        )}
      </div>

      {/* Props */}
      <h1>{nombre}</h1>

      {/* UseState */}

      <div>
        <p>{contador}</p>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      </div>

      {/* Componentes funcionales y su sintaxis */}
      <div>
        <Saludo nombre="Juan Pedro" />
        <Tarjeta>
          <p>Este es el contenido de la tarjeta.</p>
        </Tarjeta>
      </div>
    </>
  );
};

export default Clase2;
