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
    if (buttonId === 3) {
      navigate('/sessions',{state:{miOpcion:buttonId}});
    } 
    // if (buttonId === 4) {
    //   navigate('/sessions',{state:{miOpcion:buttonId}});
    // }    
     if (buttonId === 5) {
       navigate('/gardenpage',{state:{miOpcion:buttonId}});
     } 
    if (buttonId === 6) {
      navigate('/payments',{state:{miOpcion:buttonId}});
    }
    if (buttonId === 4) {
      navigate('/diarypage',{state:{miOpcion:buttonId}});
    }


  };

  return (
    <div>
      <div className='div_opciones'>      
        <button
          onClick={() => handleClick(1)}
          className={`menu_button ${activeButton === 1 ? 'active' : ''}`}
        >
          Inicio
        </button>

        <button
          onClick={() => handleClick(2)}
          className={`menu_button ${activeButton === 2 ? 'active' : ''}`}
        >
          Buscar Psicólogo
        </button>

        <button
          className={`menu_button ${activeButton === 3 ? 'active' : ''}`}
          onClick={() => handleClick(3)}
        >
          Turnos
        </button>

        <button
          className={`menu_button ${activeButton === 4 ? 'active' : ''}`}
          onClick={() => handleClick(4)}
        >
          Diario
        </button>
        <button
          className={`menu_button ${activeButton === 5 ? 'active' : ''}`}
          onClick={() => handleClick(5)}
        >
          Jardín
        </button>

        <button
          className={`menu_button ${activeButton === 6 ? 'active' : ''}`}
          onClick={() => handleClick(6)}
        >
          Pagos
        </button>
      </div>
  </div>
  );
};
  

export default ButtonGroup;