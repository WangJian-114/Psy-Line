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
            {/* <SessionCard />
            <SessionCard /> */}

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
