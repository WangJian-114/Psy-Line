import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import NavigationBar from '../NavigationBar';

const Login = () => {
  const navigate = useNavigate();
  
  const [checked, setChecked] = useState(true);

  const handleChangePatient = (event) => {
    console.log('event ', event)
    setChecked(!checked);
    navigate('/main',{state:{miOpcion:1}} );
  };

  const handleChangeProfesional = (event) => {
    setChecked(!checked);
    navigate('/main');
  };

  return (

    <div className='body_container'>
          <NavigationBar />

      <div className="login_container">

        <div className='division_parte_izquierda_login'>

        <h3 className="login_title">Elegir Tipo de Cuenta</h3>
        <div className="form">
          <div className="image_container">
            <div className="image_group" name="patient" onClick={handleChangePatient}>
              <img className='image' src="img/paciente.png" alt="" />
              <p>Paciente</p>
              <Switch
                checked={checked}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </div>
            <div className="image_group" name="profesional" onClick={handleChangeProfesional}>
              <img className='image' src="img/doctor.png" alt="" />
              <p>Profesional</p>
              <Switch
                checked={!checked}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </div>
          </div>
          <p>Hola!<br/> Por favor completa tus datos para empezar</p>
        </div>
        </div> 
        
        <div className='division_parte_derecha_login'>

        <div className="login_form">
          <TextField id="outlined-basic" label="Email" variant="outlined" margin="normal"/>
          <TextField id="outlined-basic" label="Password" variant="outlined" margin="normal"/>
        </div>
        <div className="action_group">
          <Link to='/home'>No tenes cuenta? crear una</Link>
          <Button className="login"variant='contained'>Login</Button>
        </div>
        <Link to='/home'className='password_link'>Me olvide la contraseña</Link>
        </div>
      </div>
    </div>
  )
}

export default Login