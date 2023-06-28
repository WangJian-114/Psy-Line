import { useContext } from 'react';
import AppointmentContext from '../../context/appointments/appointmentContext';



const SessionCard = ({ id, therapist_user_name,  date_time, status, type }) => {

  const appointmentContext =  useContext(AppointmentContext);
  const { removeAppointments } = appointmentContext;

  const deleteAppointment = (id) => {
    console.log("eliminado...", id);
    removeAppointments(id);
  }

  return (
    <>
        <div className="div_borde_card">
          <div className="div_borde_interno_card">
            <div className="div_contenido_card">

              <div className="div_informacion_turno">
                  <div className="div_background_turno">
                    <div className="div_background_sombra_turno">
                      {/* nombre del psicólogo, fecha, modalidad, hardcodeado*/}
                      <h1 className="nombre_psicologo_card">Lic. {therapist_user_name}</h1>
        
                      <h1 className="fecha_turno_card">{date_time} hs</h1>

                      <h1 className="modalidad_turno">{type}</h1>

                      <h1 className="ha_sido_confimado_o_no">{status}</h1>

                    </div>
                  </div>
              </div>

              <div className="div_botones_de_turnos">
                <button className="boton_ver_mas_informacion">
                  <h1 className="texto_ver_mas_info">Ver más información</h1>
                </button>
                
                <button className="boton_cancelar_turno" onClick={() => deleteAppointment(id)}>
                  <h1 className="texto_cancelar_turno">Cancelar Turno</h1>
                </button>
              </div>

            </div>
          </div>
        </div>
    </>
  );
}

export default SessionCard