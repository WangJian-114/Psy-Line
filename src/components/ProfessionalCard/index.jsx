
const ProfessionalCard = ({professional}) => {
  console.log("Profesional: ", professional);
  const {user_name, name, last_name, specialty, appointment_price, therapy_treatments, practice_area, picture} = professional;
    return (
      <div key={1} className='resultado-container-rectangulo'>
        <div className='resultado-container' key={user_name}>
          <img src={picture} alt={professional.name} className='resultado-img' />
          <div className='resultado-container-datos'>
            <div className='resultado-datos'>
              <h3>{name} {last_name}</h3>
              <p>Especialidad: {specialty}</p>
              <li>Honorarios: ${appointment_price} ARS</li>
              <li>Categorias: {(therapy_treatments[0]) ? therapy_treatments[0].therapy_treatment : ''} - {(therapy_treatments[1]) ? therapy_treatments[1].therapy_treatment : ''} - {(therapy_treatments[2]) ? therapy_treatments[2].therapy_treatment : ''} - {(therapy_treatments[3]) ? therapy_treatments[3].therapy_treatment : ''} - {(therapy_treatments[4]) ? therapy_treatments[4].therapy_treatment : ''} -
              {(therapy_treatments[5]) ? therapy_treatments[5].therapy_treatment : ''} ...</li>
              <li>Ubicacion: {practice_area}</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProfessionalCard;