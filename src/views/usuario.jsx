import React from 'react'
import { useParams } from 'react-router-dom';


const Usuario = () => {
    const { id } = useParams();
    console.log('====================================');
    console.log(';');
    console.log('====================================');
  return <h1>Usuario ID: {id}</h1>;
};

export default Usuario