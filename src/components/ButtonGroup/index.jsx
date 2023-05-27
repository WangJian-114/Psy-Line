import React, { useState } from 'react';

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div>
      <div className='div_opciones'>      
        <button
          className={activeButton === 1 ? 'active' : ''}
          onClick={() => handleClick(1)}
        >
          Inicio
        </button>

        <button
          className={activeButton === 2 ? 'active' : ''}
          onClick={() => handleClick(2)}
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