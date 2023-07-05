
const PayCard = ({therapist_user_name, date_time, status, type, image }) => {
  return (
    <>
      <div className="div_alrededor_paycard">
        <div className="div_borde_paycard">
          <div className="div_tarjeta_paycard">
            <div className="div_shadow_paycard">
              <div className="div_fondo_paycard">
                
                <img src='https://www.cbre.ca/-/media/project/cbre/shared-site/canada-emerald/canada-headshots/juan-perez-752x752.jpg' className="imagen_psicologo_en_pagos" alt="imagen_psicologo"/>

                {/* aca están hardcodeados los datos del turno que está en pagos */}
                <div className="datos_paycard">
                  <h1 className="nombre_psicologo_en_paycard">Juan Perez</h1>

                  <h1 className="fecha_turno_en_pagos">•Fecha: {date_time.replace('T',' a las: ')}</h1>

                  <h1 className="modalidad_turno_pagos">•Modalidad: {type}</h1>

                  <h1 className="el_turno_es_confirmado_o_no">• Estado de turno: {status}</h1>

                  {/* este boton va a haber que desactivarlo cuando el componente haya pasado a Pagos Realizados,
                  falta agregarle su comportamiento */}
                  <button className="boton_realizar_pago">
                    <h1 className="titulo_boton_realizar_pago">Realizar Pago</h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default PayCard