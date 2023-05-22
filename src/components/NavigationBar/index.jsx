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
          <button className="boton_opciones">
            <FiSettings color='white' fontSize={26} />
          </button>
        </nav>
      </div>
    </>
  );
}

export default NavigationBar