import { useState, useContext, useEffect } from 'react';
import axios from 'axios';


const DailyPhrase = () => {

  const [frase, setFrase] = useState();

  const obtenerFrase = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/v1/quotes/19');
      console.log('Response quote: ', response.data);
      setFrase(response.data.quote);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    obtenerFrase();
  // eslint-disable-next-line
  }, [])

  return (
    <div className="seccion_pagina">
      <div className="div_intro">
        <h1 className="texto_bienvenida">¡Te damos la Bienvenida!</h1>
        <div className="div_frase">
          <h1 className="frase">Frase del dia: <br /> “{frase}”.</h1>
        </div>
        <button onClick={obtenerFrase}>cambiar frase</button>
      </div>
    </div>
  );
};

export default DailyPhrase;
