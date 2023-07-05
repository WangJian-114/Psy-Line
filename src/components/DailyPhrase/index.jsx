import { useState, useEffect } from 'react';
import axios from 'axios';
import { clockNumberClasses } from '@mui/x-date-pickers';


const DailyPhrase = () => {

  const [frase, setFrase] = useState('');
  const [contador, setContador] = useState(1);

  const obtenerFrase = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/v1/quotes/${contador}`);
      console.log('Response quote: ', response.data);
      setFrase(response.data.quote);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    obtenerFrase();
  // eslint-disable-next-line
  }, [contador]);

  const cambiarFrase = () => {
    console.log('Click');
    if(contador === 19){
      setContador(1);
      obtenerFrase();
    } else {
      setContador((prevContador) => prevContador + 1);
      obtenerFrase();
    }
  };

  return (
    <div className="seccion_pagina">
      <div className="div_intro">
        <h1 className="texto_bienvenida">¡Te damos la Bienvenida!</h1>
        <h3>Frase del dia: </h3>
        <div className="div_frase">
          <h1 className="frase">“{frase}”.</h1>
        </div>
        <div className="div_button">
          <button type="button" className='cambiar_frase_button' onClick={cambiarFrase}>Cambiar frase</button>
        </div>
      </div>
    </div>
  );
};

export default DailyPhrase;
