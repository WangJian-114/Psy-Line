
const PayCard = ({therapist_user_name, date_time, status, type, image }) => {
  return (
    <>
      <div className="div_alrededor_paycard">
        <div className="div_borde_paycard">
          <div className="div_tarjeta_paycard">
            <div className="div_shadow_paycard">
              <div className="div_fondo_paycard">
                
                <img src={`../img/p1.png`} className="imagen_psicologo_en_pagos" alt="imagen_psicologo"/>

                {/* aca están hardcodeados los datos del turno que está en pagos */}
                <h1 className="nombre_psicologo_en_paycard">{therapist_user_name}</h1>

                <h1 className="fecha_turno_en_pagos">• {date_time}</h1>

                <h1 className="modalidad_turno_pagos">• {type}</h1>

                <h1 className="el_turno_es_confirmado_o_no">• {status}</h1>

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
    </>
  );
}

export default PayCard