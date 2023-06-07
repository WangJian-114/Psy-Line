import { Button } from "@mui/base";
import { FiChevronLeft } from "react-icons/fi";

const Profile = () => {
  return (
    <>
        <div className="div_contenido_perfil">
            <div className="div_titulo_e_icono_pagina">
                <Button className="boton_atras">
                    <FiChevronLeft fontSize={36}/>
                    {/* falta agregarle el comportamiento de que vuelva para atras */}
                </Button>
                <div className="div_titulo">
                    <h1 className="titulo">Información del profesional</h1>
                </div>
            </div>
        </div>

        <div className="div_informacion_profesional">
            <div className="div_informacion">
                <div className="div_carta_profesional_y_biografia">
                
                        {/* aca va a ir el componente de biografia del psicologo al que le hayan apretado ver perfil */}

                    <div className="biografia">
                        {/* la bio tambien se extrae del profesional X */}
                        <h1 className="texto_biografia">Licenciada en psicología de la UBA. 
                        Realicé la Especialización en Terapia Cognitiva-conductual abordando desde este marco teórico crisis... 
                        (Biografía)</h1>
                
                    </div>
                </div>
                <div className="div_terapia_online">
                    <h1 className="texto_terapia">Terapia online</h1>
                    <div className="div_calendario_y_cita">
                    
                        <div className="div_calendario">
                        {/* aca dentro va a ir el calendario */}
                        </div>
                        <div className="div_cita_y_contactar">
                            <div className="div_cita">
                                <div className="encuadre_cita">
                                    <h1 className="texto_cita_programada_para">Cita programada para</h1>
                                    {/* la hora y el dia de la cita surgen de que la persona apreta X dia y hora en el calendario */}
                                    <h1 className="texto_fecha_que_se_eligio_en_calendario">14 de mayo a las 14:00 hs</h1>
                                </div>
                            </div>
                            <div className="div_botones">
                                <Button className="boton_contratar_profesional">
                                    <h1 className="texto_boton_contratar_profesional">Contactar profesional</h1>
                                </Button>
                                <Button className="boton_pedir_cita">
                                    <h1 className="texto_boton_pedir_cita">Pedir cita</h1>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Profile