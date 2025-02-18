import React from "react";

const Clase3 = () => {
  //OnClick
  const manejarClick = () => alert("Botón clickeado");

  //OnChange
  const manejarCambio = (e) => {
    console.log(e.target.value);
  };

  const manejarClick2 = (mensaje) => alert(mensaje);

  //UseState
  const [contador, setContador] = React.useState(0);

  //UseState con estado complejo
  const [formulario, setFormulario] = React.useState({ nombre: "", email: "" });
  const manejarCambio2 = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  //Inputs controlados:
  const [valor, setValor] = React.useState("");

  //Inputs no controlados:
  const inputRef = React.useRef();
  const manejarClick3 = () => alert(inputRef.current.value);
  return (
    <>
      <div>
        {/* OnClick */}
        <button style={{ margin: 5 }} onClick={manejarClick}>
          Clic aquí
        </button>
      </div>

      <div>
        {/* OnChange */}
        <input style={{ margin: 5 }} type="text" onChange={manejarCambio} />
      </div>

      <div>
        {/* OnClick funcion fuera del componente */}
        <button style={{ margin: 5 }} onClick={manejarClick}>
          Clic aquí
        </button>
        <br />
        {/* OnClick funcion dentro del componente */}
        <button
          style={{ margin: 5 }}
          onClick={() => alert("Botón clickeado 2")}
        >
          Clic aquí 2
        </button>
        <br />
        {/* OnClick con parametros */}
        <button
          style={{ margin: 5 }}
          onClick={() => manejarClick2("Parametro")}
        >
          Clic aquí
        </button>
      </div>

      {/* useState */}
      <div>
        <p>{contador}</p>
        <button style={{ margin: 5 }} onClick={() => setContador(contador + 1)}>
          Incrementar
        </button>
      </div>

      {/* useState estado complejo */}
      <div>
        <form>
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio2}
          />
          <input
            type="email"
            name="email"
            value={formulario.email}
            onChange={manejarCambio2}
          />
        </form>

        <h1>{formulario.nombre}</h1>
        <br />
        <h1>{formulario.email}</h1>
      </div>

      {/* Inputs controlados: */}
      <div>
        <input
          type="text"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <h1>{valor}</h1>
        <br />
      </div>

      {/* Inputs no controlados: */}
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={manejarClick3}>Mostrar valor</button>
      </div>
    </>
  );
};

export default Clase3;
