
const ProfessionalCard = ({professional}) => {
  console.log("Profesional: ", professional);
    return (
      <div key={1} className='resultado-container-rectangulo'>
        <div className='resultado-container' key={professional.user_name}>
          {/* <img src={`../${professional.foto}`} alt={professional.name} className='resultado-img' /> */}
          <div className='resultado-container-datos'>
            <div className='resultado-datos'>
              <h3>{professional.name} {professional.last_name}</h3>
              <p>Especialidad: {professional.specialty}</p>
              <li>Precio: {professional.appointment_price}</li>
              <li>Descripción: {professional.bio}</li>
              <li>Ubicacion: {professional.practice_area}</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProfessionalCard;