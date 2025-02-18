import React, { useEffect, useState } from "react";
import axios from "axios";

const Clase6 = () => {
  //Ejemplo con fetch
  //   const [datos, setDatos] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.json())
  //       .then((data) => setDatos(data))
  //       .catch((error) => console.error(error));
  //   }, []);

  //Ejemplo con AXIOS
  const [datos, setDatos] = useState([]);

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => setDatos(response.data))
  //     .catch(error => console.error(error));
  // }, []);

  //Mostrar un indicador de carga y error
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
        .get("https://jsonplaceholder.typicode.com/posts")
    //Simulador de error
    // axios
    //   .get("https://jsonplaceholder.typicode.com/este-endpoint-no-existe")
      .then((response) => {
        setDatos(response.data);
        setCargando(false);
      })
      .catch((error) => {
        setError(error);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {/* Uso de Fetch */}
      <div>
        <h1>Lista de Posts</h1>
        <ul>
          {datos.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Clase6;
