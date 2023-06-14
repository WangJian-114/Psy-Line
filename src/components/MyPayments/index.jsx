import { useContext } from 'react';
import PayCard from "../PayCard";
import AppointmentContext from '../../context/appointments/appointmentContext';

const MyPayments = () => {
  const appointmentContext =  useContext(AppointmentContext);
  const { appointments } = appointmentContext;
  return (
    <>
      <div className="div_general_pagos">
        <div className="div_estructura_pagos">
          <div className="div_titulos_pagos">
            <div className="div_mis_pagos">
              <div className="div_interno_mis_pagos">
                <h1 className="titulo_mis_pagos">Mis Pagos</h1>
              </div>
              <div className="elementos_pendientes">
                <h1 className="titulo_pagos_pendientes">Pagos Pendientes</h1>
                {/* aca van a ir todos los PayCards con la informacion sobre el turno con pago pendiente */}
                {appointments?.length !== 0 ? 
                  appointments.map(appointment => (
                    <PayCard {...appointment} />
                  )): null
                }
              </div>

              {/* todo bien con agregar mil componentes paycard arriba, el Pagos Realizados se muestra a continuacion
              de ellos junto con los pagos realizados :) funciona joya */}

              <div className="elementos_pagados">
                <h1 className="titulo_pagos_realizados">Pagos Realizados</h1>
                <p>No tenes nada por aca</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPayments