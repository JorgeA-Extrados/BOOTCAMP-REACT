import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Clase1 = () => {
  //Ejemplo 1
  //   const tareas = [
  //     {
  //       id: 1,
  //       text: "Introducción a React y configuración del entorno.",
  //     },
  //     {
  //       id: 2,
  //       text: "Introducción a React y configuración del entorno.",
  //     },
  //     {
  //       id: 3,
  //       text: "Introducción a React y configuración del entorno.",
  //     },
  //     {
  //       id: 4,
  //       text: "Introducción a React y configuración del entorno.",
  //     },
  //     {
  //       id: 5,
  //       text: "Introducción a React y configuración del entorno.",
  //     },
  //   ];
  //   return (
  //     <ul>
  //       {tareas.map((tarea) => (
  //           <li key={tarea.id}>{tarea.text}</li>
  //       ))}
  //     </ul>
  //   );

  //Ejemplo 2
  // 1. Estado para almacenar la hora actual
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  // 2. Efecto secundario para actualizar la hora cada segundo
  useEffect(() => {
    // 2.1. Crear un intervalo que se ejecuta cada 1000 ms (1 segundo)
    const intervalo = setInterval(() => {
      // 2.2. Actualizar el estado `hora` con la hora actual
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    // 2.3. Limpieza: Detener el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalo);
  }, []); // 2.4. El array vacío [] indica que el efecto solo se ejecuta una vez (montaje)

  //   Explicación paso a paso:
  //   Estado (useState):

  //   hora: Almacena la hora actual en formato de cadena (toLocaleTimeString()).

  //   setHora: Función para actualizar el estado hora.

  //   Efecto secundario (useEffect):

  //   Se ejecuta cuando el componente se monta.

  //   Crea un intervalo que actualiza el estado hora cada segundo.

  //   Cuando el componente se desmonta, el intervalo se detiene para evitar fugas de memoria.

  //   Renderizado:

  //   React actualiza automáticamente el DOM cada vez que el estado hora cambia.

  //   Solo el contenido del <h2> se actualiza, gracias al Virtual DOM.

  return (
    <>
      {/* 3. Renderizar la hora en un elemento <h2></h2> */}
      <h2>{hora}</h2>
      <Header />
      <Footer />
    </>
  );
};

export default Clase1;
