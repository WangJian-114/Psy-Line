
const ProfessionalCard = ({professional}) => {
  console.log("first ", professional);
    return (
      <div key={1} className='resultado-container-rectangulo'>
        <div className='resultado-container' key={professional.id}>
          <img src={`../${professional.foto}`} alt={professional.nombre} className='resultado-img' />
          <div className='resultado-container-datos'>
            <div className='resultado-datos'>
              <h3>{professional.nombre} {professional.apellido}</h3>
              <p>Especialidad: {professional.especialidad}</p>
              <li>Precio: {professional.precio}</li>
              <li>Descripción: {professional.descripcion}</li>
              <li>Ubicacion: {professional.ubicacion}</li>
              <span>Sesiones realizadas: {professional.sesiones_realizadas}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProfessionalCard;