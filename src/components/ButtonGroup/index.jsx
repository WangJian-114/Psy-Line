import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


const ButtonGroup = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const miOpcion = location.state?.miOpcion;
  const [activeButton, setActiveButton] = useState(miOpcion);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
    if (buttonId === 1) {
      navigate('/main',{state:{miOpcion:buttonId}});
    } 
    if (buttonId === 2) {
      navigate('/search',{state:{miOpcion:buttonId}});
    }
  };

  return (
    <div>
      <div className='div_opciones'>      
        <button
          onClick={() => handleClick(1)}
          className={activeButton === 1 ? 'active' : ''}
        >
          Inicio
        </button>

        <button
          onClick={() => handleClick(2)}
          className={activeButton === 2 ? 'active' : ''}
        >
          Buscar Psicólogo
        </button>

        <button
          className={activeButton === 3 ? 'active' : ''}
          onClick={() => handleClick(3)}
        >
          Turnos
        </button>

        <button
          className={activeButton === 4 ? 'active' : ''}
          onClick={() => handleClick(4)}
        >
          Diario
        </button>
        <button
          className={activeButton === 5 ? 'active' : ''}
          onClick={() => handleClick(5)}
        >
          Arbol
        </button>

        <button
          className={activeButton === 6 ? 'active' : ''}
          onClick={() => handleClick(6)}
        >
          Pagos
        </button>
      </div>
  </div>
  );
};
  

export default ButtonGroup;