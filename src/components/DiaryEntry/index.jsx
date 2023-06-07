
const DiaryEntry = () => {
  return (
    <>
      <h1>holaaa</h1>
      <div className="div_diary_general_diary">
        <div className="div_diario_diary">
          <div className="div_texto_titulo_diary">
            <div className="texto_e_icono_diary">
              
              <div className="div_texto_diary">
                <h1 className="texto_titulo_diary">Diario</h1>
              </div>
              <div className="div_icono_diary">

              </div>

            </div>
          </div>

          <div className="div_estados_de_animo">
            <h1 className="div_texto_selecciona_estado_animo">Selecciona tu estado de ánimo:</h1>
            <div className="div_box_estados">
              <div className="box_selecciona_estado_animo">
                <div className="div_background_estados">

                  <button className="boton_carita_1">
                    <img src="img\lol.png" className="carita_1" alt="carita_1"/>

                  </button>
                  <button className="boton_carita_2">
                    <img src="img\smile.png" className="carita_2" alt="carita_2"/>

                  </button>

                  <button className="boton_carita_3">
                    <img src="img\shy.png" className="carita_3" alt="carita_3"/>

                  </button>

                  <button className="boton_carita_4">
                    <img src="img\neutral.png" className="carita_4" alt="carita_4"/>

                  </button>

                  <button className="boton_carita_5">
                    <img src="img\sarcastic.png" className="carita_5" alt="carita_5"/>

                  </button>

                  <button className="boton_carita_6">
                    <img src="img\angry.png" className="carita_6" alt="carita_6"/>

                  </button>

                  <button className="boton_carita_7">
                    <img src="img\thinking.png" className="carita_7" alt="carita_7"/>

                  </button>

                  <button className="boton_carita_8">
                    <img src="img\sad.png" className="carita_8" alt="carita_8"/>

                  </button>
                
                </div>
              </div>  
            </div>
          </div>

          <div className="div_seccion_titulo_boton_y_escritura">

            <div className="div_recuadro_titulo_y_escritura">
              <h1 className="texto_diario_detallar">Podes detallar más al respecto a continuación:</h1>

              <div className="div_input_diary">

                <textarea className="input_diary" type="text" rows="12"  placeholder="Escribe aquí..." />
                
              </div>

            </div>
            
            <button className="boton_guardar_entrada_diario">
              <h1 className="texto_guardar_entrada">Guardar</h1>
            </button>

          </div>
        
        </div>
      </div>

    </>
  );
}

export default DiaryEntry