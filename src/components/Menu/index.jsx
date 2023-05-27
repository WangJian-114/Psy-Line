import ButtonGroup from "../ButtonGroup";

const Menu = () => {
  return (
    <>
      <div className='div_menu'> 
        <div className='div_parte_icono'>
          <div className='fondo_foto'>
            
          </div>
          <div className='div_nombre'>
            <div className='div_texto'>
              <p className='nombre'>Luis Tadeo</p>
            </div>
          </div>

        </div>

        <div className='div_outside_opciones'>
          <ButtonGroup /> 
        </div>
      </div>
    </>
  );
}

export default Menu