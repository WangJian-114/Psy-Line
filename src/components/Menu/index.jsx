import ButtonGroup from "../ButtonGroup";
import React, { useContext, useEffect }  from 'react';
import PatientContext from '../../context/patient/patientContext';

const Menu = () => {
  const patientContext =  useContext(PatientContext);
  const { getPatientData } = patientContext;

  useEffect(() => {
    getPatientData();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className='div_menu'> 
        <div className='div_parte_icono'>
          <div className='fondo_foto'>
            <img src="../img/123.jpeg" alt="" />
          </div>
          <div className='div_nombre'>
            <div className='div_texto'>
              <p className='nombre'>Jian Wang</p>
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