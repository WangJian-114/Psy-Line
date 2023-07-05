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
                <div className="datos_paycard">
                  {appointments?.length !== 0 ? 
                    appointments.map(appointment => (
                      <PayCard {...appointment} />
                    )): null
                  }
                </div>
              </div>

              {/* todo bien con agregar mil componentes paycard arriba, el Pagos Realizados se muestra a continuacion
              de ellos junto con los pagos realizados :) funciona joya */}

              <div className="elementos_pagados">
                <h1 className="titulo_pagos_realizados">Pagos Realizados</h1>
                
                  <div className="div_fondo_paycard">
                    <img src='https://www.cbre.ca/-/media/project/cbre/shared-site/canada-emerald/canada-headshots/juan-perez-752x752.jpg' className="imagen_psicologo_en_pagos" alt="imagen_psicologo"/>


                    <div className="datos_paycard">
                      {/* aca están hardcodeados los datos del turno que está en pagos */}
                      <h1 className="nombre_psicologo_en_paycard">Juan Perez</h1>

                      <h1 className="fecha_turno_en_pagos">•Fecha: 2023-07-03 a las: 14:00:00</h1>

                      <h1 className="modalidad_turno_pagos">•Modalidad: Virtual</h1>

                      <h1 className="el_turno_es_confirmado_o_no">• Estado de turno: Pagado</h1>
                    </div>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPayments