import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementar, incrementar } from "../services/slices/contadorSlice";

//Lifting State Up:
const HijoA = ({ valor, onChange }) => (
  <input
    style={{ borderColor: "#000", border: "1px solid" }}
    type="text"
    value={valor}
    onChange={onChange}
  />
);
const HijoB = ({ valor }) => <p>{valor}</p>;

const Clase7 = () => {
  //Props:
  const Hijo = ({ mensaje }) => <p>{mensaje}</p>;
  const Padre = () => <Hijo mensaje="Hola desde el padre" />;

  //Lifting State Up:
  const [valor, setValor] = useState("");

  //Redux toolkit
  const valor2 = useSelector((state) => state.contador.valor);
  const dispatch = useDispatch();
  return (
    <>
      {/* Props: */}
      <div>
        <Padre />
      </div>

      {/* Lifting State Up: */}
      <div>
        <HijoA valor={valor} onChange={(e) => setValor(e.target.value)} />
        <HijoB valor={valor} />
      </div>

      {/* Redux toolkit  */}
      <div>
        <p>{valor2}</p>
        <button style={{ borderColor: "#000", border: "1px solid", margin: 5 }} onClick={() => dispatch(incrementar())}>Incrementar</button>
        <button style={{ borderColor: "#000", border: "1px solid", margin: 5 }} onClick={() => dispatch(decrementar())}>Decrementar</button>
      </div>
    </>
  );
};

export default Clase7;
