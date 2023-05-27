
const Activity = () => {
  return (
    <div className="frame">
      <div className="div_activity">

        <h1 className="titulo">Tu actividad</h1>

        <div className="frame_actividad">
          <div className="frame_botones">
            <div className="div_botones_superiores">
              <button className="boton_turnos_confirmados">
                <h1 className="texto">Turnos confirmados:</h1>
                <h1 className="texto_cantidad"> 2</h1> {/* esta hardcodeado */}
              </button>
              <button className="boton_pagos_pendientes">
                <h1 className="texto">Pagos pendientes:</h1>
                <h1 className="texto_cantidad"> 2</h1> {/* esta hardcodeado */}
              </button>
            </div>
            <div className="div_boton_inferior">
              <button className="boton_ultimo_ingreso_diario">
                <h1 className="texto_ultimo_ingreso">Último ingreso al diario</h1>
                <h1 className="texto_fecha_ultimo_ingreso">25/03/2023</h1> {/* esta hardcodeado */}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Activity
