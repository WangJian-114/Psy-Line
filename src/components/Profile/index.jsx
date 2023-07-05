import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FiChevronLeft } from "react-icons/fi";
import ProfessionalCard from "../ProfessionalCard";
import BigCalendar from "../BigCalendar/index";
import AppointmentContext from '../../context/appointments/appointmentContext';
import ProfessionalContext from '../../context/professional/professionalContext';

const Profile = () => {
    const { id } = useParams();
    const appointmentContext =  useContext(AppointmentContext);
    const professionalContext =  useContext(ProfessionalContext);

    const { appointments, professionalAppointments, getProfessionalAppointments } = appointmentContext;
    const { professionalList, professional, getProfessional, getAllProfessionals } = professionalContext;

    useEffect(() => {
        getAllProfessionals();
        getProfessional(id);
        getProfessionalAppointments(id);
    // eslint-disable-next-line
    }, [appointments])



    if (professionalList?.length === 0) {
        return (<p>Cargando...</p>)
    }
    if(!professional) return <p>Cargando...</p>;

    return (
        <>
            <div className="div_contenido_perfil">
                <div className="div_titulo_e_icono_pagina">
                    <Link to='/search' className="boton_atras">
                        <FiChevronLeft fontSize={36}/>
                    </Link>
                    <div className="div_titulo">
                        <h1 className="titulo">Información del profesional</h1>
                    </div>
                </div>
            </div>

            <div className="div_informacion_profesional">
                <div className="div_informacion">
                    <div className="div_carta_profesional_y_biografia">
                        {professional && <ProfessionalCard professional={professional} />}
                        <div className="div_biografia">
                            <p className="texto_biografia">
                            {professional.bio}
                            </p>
                        </div>
                    </div>
                    <h1 className="texto_terapia">Terapia online</h1>
                    <div className="div_terapia_online">
                        <div className="div_calendario_y_cita">
                            <div className="div_calendario">
                                <BigCalendar 
                                    profesional={professional} 
                                />
                            </div>
                            <div className="div_cita_y_contactar">
                                {professionalAppointments.length !== 0 ?
                                    professionalAppointments.map(appointment => (
                                        <div className="div_cita">
                                            <div className="encuadre_cita">
                                                <h1 className="texto_cita_programada_para">Cita programada para</h1>
                                                <h1 className="texto_fecha_que_se_eligio_en_calendario">{appointment.date_time.replace('T',' a las: ')}</h1>
                                            </div>
                                        </div>
                                    ))
                                    :
                                    null
                                }
                           
                                {/* <div className="div_botones">
                                    <Button className="boton_contratar_profesional">
                                        Contactar profesional
                                    </Button>
                                    <Button disabled={professionalAppointments.length !== 0}          className="boton_pedir_cita" onClick={addNewAppointment}>
                                        Pedir cita
                                    </Button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  );
}

export default Profile