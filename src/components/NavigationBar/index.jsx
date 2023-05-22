import { FiSettings } from 'react-icons/fi';

const NavigationBar = () => {
  return (
    <>
      <div className="nav_container">
        <nav className="nav">
          <div className="nav_logoytexto">
            <img src="img\psyline-removebg-preview 15 (1).png" className="logo-navcontainer" alt="logo"/>
            <h1 className="nombre_psyline">PsyLine</h1>
          </div>
          <div className="div_fondo_icono">
            <FiSettings color='white' fontSize={26} />
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavigationBar