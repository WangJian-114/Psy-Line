import { useContext } from 'react';
import AppointmentContext from '../../context/appointments/appointmentContext';
import SessionCard from "../SessionCard";

const CurrentSessions = () => {

  const appointmentContext =  useContext(AppointmentContext);
  const { appointments } = appointmentContext;

  return (
    <div>
          <div className="div_titulo_turnos">
            <div className="div_titulo_turnos_interno">
              <h1 className="titulo_turnos">Mis turnos</h1>
            </div>
          </div>

          <div className="div_turnos_confirmados_outline">
            <div className="div_turnos_confirmados_titulo">
              <h1 className="turnos_confirmados">Turnos confirmados</h1>
            </div>
            {/* aca van a ir los componentes de turnos confirmados, pongo 1 de ejemplo (se llama SessionCard) */}
            <div className="div_borde_card">
              <div className="div_borde_interno_card">
                <div className="div_contenido_card">
                  <div className="div_informacion_turno">
                      <div className="div_background_turno">
                        <div className="div_background_sombra_turno">
                          {/* nombre del psicólogo, fecha, modalidad, hardcodeado*/}
                          <h1 className="nombre_psicologo_card">Lic. Juan Perez</h1>
            
                          <h1 className="fecha_turno_card">•Fecha: 2023-07-03 a las: 14:00:00 </h1>

                          <h1 className="modalidad_turno">•Modalidad: Virtual</h1>

                          <h1 className="ha_sido_confimado_o_no">• Estado de turno: Confirmado</h1>

                        </div>
                      </div>
                  </div>
                </div>
              </div>
        </div>

          </div>

        <div className="div_turnos_pendientes_outline">
          <div className="div_turnos_pendientes_titulo">
            <h1 className="titulo_turnos_pendientes">Turnos pendientes</h1>
          </div>
            {/* aca van a ir los componentes de turnos pendientes, pongo 1 de ejemplo (se llama SessionCard) */}
            {appointments?.length !== 0 ? 
              appointments.map(appointment => (
                <SessionCard {...appointment} />
              )): null
            }
        </div>

    </div>
  );
};

export default CurrentSessions;
