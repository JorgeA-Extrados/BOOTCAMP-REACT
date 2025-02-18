import React, { useEffect, useState } from "react";

const Clase4 = () => {
  // useEffect(() => {
  //     // Código del efecto
  //     return () => {
  //       // Código de limpieza (opcional)
  //     };
  //   }, [dependencias]);

  //Sin dependencias:
  useEffect(() => {
    console.log("Efecto ejecutado en cada renderizado");
  });

  //Con dependencias:
  const [contador, setContador] = useState();
  useEffect(() => {
    console.log("Efecto ejecutado cuando `contador` cambia");
  }, [contador]);

  //Array vacío:
  useEffect(() => {
    console.log("Efecto ejecutado solo en el montaje");
    return () => console.log("Efecto limpiado en el desmontaje");
  }, []);

  //Limpieza de efectos:
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalo); // Limpieza
  }, []);

  //Ciclo de vida de los componente

  //Montaje
  useEffect(() => {
    console.log("Componente montado");
    return () => console.log("Componente desmontado");
  }, []);

  //Actualizacion
  useEffect(() => {
    console.log("Componente actualizado");
  }, [contador]); // Se ejecuta cuando `contador` cambia

  //Desmontaje:
  useEffect(() => {
    console.log("Componente montado");
    return () => console.log("Componente desmontado");
  }, []);

  //Ejemplo ciclo de vida
  const [contador2, setContador2] = useState(0);

  useEffect(() => {
    console.log("Componente montado o actualizado");
    return () => console.log("Componente desmontado");
  }, [contador2]);

  //Renderizado de listas

  const lista = [
    {
      id: 1,
      text: "Introducción a React y configuración del entorno. 1",
    },
    {
      id: 2,
      text: "Introducción a React y configuración del entorno. 2",
    },
    {
      id: 3,
      text: "Introducción a React y configuración del entorno. 3",
    },
    {
      id: 4,
      text: "Introducción a React y configuración del entorno. 4",
    },
    {
      id: 5,
      text: "Introducción a React y configuración del entorno. 5",
    },
  ];

  return (
    <>
      <div>
        <h2>{hora}</h2>
      </div>

      <div>
        <p>{contador2}</p>
        <button onClick={() => setContador2(contador2 + 1)}>Incrementar</button>
      </div>

      <div>
        <ul>
          {lista.map((list) => (
            <li key={list.id}>{list.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Clase4;
