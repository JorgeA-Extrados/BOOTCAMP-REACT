import React from "react";
import "../styles/clase5.css";
import styles from "../styles/Boton.module.css";
import styled from "styled-components";
import "tailwindcss";

const Clase5 = () => {
  //CSS en linea
  const estilo = {
    backgroundColor: "blue",
    color: "white",
    padding: "100px",
    borderRadius: "10px",
  };

  //styled-components
  const Boton = styled.button`
    background-color: ${(props) => (props.primario ? "blue" : "gray")};
    color: white;
    padding: 10px;
    &:hover {
      opacity: 0.8;
    }
  `;
  return (
    <>
      {/* CSS tradicional */}
      <div>
        <button className="mi-boton">Clic aquí</button>
      </div>

      {/* CSS en linea */}
      <div>
        <button style={estilo}>Clic aquí</button>
      </div>

      {/* CSS Modules */}
      <div>
        <button className={styles.miBoton}>Clic aquí</button>
      </div>

      {/* styled-components */}
      <div>
        <Boton primario>Botón Primario</Boton>
        <Boton>Botón Secundario</Boton>
        <a href="https://styled-components.com/docs" target="_blank">
          Styled Components
        </a>
      </div>

      {/* styled-components */}
      <div className="m-8">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-auto" style={{margin: 8}}>
          Clic aquí
        </button>
        <a href="https://tailwindcss.com/docs/installation/using-vite" target="_blank">
        tailwindcss
        </a>
      </div>
    </>
  );
};

export default Clase5;
