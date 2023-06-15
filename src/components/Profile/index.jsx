import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { Button } from "@mui/base";
import moment from 'moment';
import { FiChevronLeft } from "react-icons/fi";
import ProfessionalCard from "../ProfessionalCard";
import Calendar from "../Calendar";
import AppointmentContext from '../../context/appointments/appointmentContext';
import ProfessionalContext from '../../context/professional/professionalContext';

const Profile = () => {
    const { id } = useParams();
    const appointmentContext =  useContext(AppointmentContext);
    const professionalContext =  useContext(ProfessionalContext);

    const { appointments, professionalAppointments, addAppointment,getProfessionalAppointments } = appointmentContext;
    const { professional, getProfessional, } = professionalContext;

    const [date, setDate] = useState(dayjs('2022-04-17'));
    const [time, setTime] = useState();

    const addNewAppointment = () => {
        console.log("time: ", moment(time.$d).format('HH:mm'));
        const appointment = {
            id:  Math.floor(Math.random() * 100),
            id_professional: professional[0].id,
            therapist_user_name: professional[0].apellido,
            patient_user_name: "Luis Tadeo",
            price: 1000,
            modality: professional[0].consulta,
            status: "PENDIENTE",
            date: `${moment(date.$d).format('DD-MM-YYYY')} - ${moment(time.$d).format('HH:mm')}`,
            image: professional[0].foto
        }
        addAppointment(appointment);
    }

    useEffect(() => {
        getProfessional(id);
        getProfessionalAppointments(id);
    // eslint-disable-next-line
    }, [appointments])

    // Revisar si existe el proyecto
    if(!professional) return <p>Cargando...</p>;

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

                    <ProfessionalCard professional={professional[0]} />
                    <div className="div_biografia">
                        {/* la bio tambien se extrae del profesional X */}
                        <h1 className="texto_biografia">Licenciada en psicología de la UBA. 
                        Realicé la Especialización en Terapia Cognitiva-conductual abordando desde este marco teórico crisis... 
                        (Biografía)</h1>
                
                    </div>
                    </div>
                    <h1 className="texto_terapia">Terapia online</h1>
                    <div className="div_terapia_online">
                        <div className="div_calendario_y_cita">
                            <div className="div_calendario">
                            {/* aca dentro va a ir el calendario */}
                                <Calendar date={date} setDate={setDate} time={time} setTime={setTime}/>
                            </div>
                            <div className="div_cita_y_contactar">
                                {professionalAppointments.length !== 0 ?
                                    professionalAppointments.slice(0,3).map(appointment => (
                                        <div className="div_cita">
                                            <div className="encuadre_cita">
                                                <h1 className="texto_cita_programada_para">Cita programada para</h1>
                                                {/* la hora y el dia de la cita surgen de que la persona apreta X dia y hora en el calendario */}
                                                <h1 className="texto_fecha_que_se_eligio_en_calendario">{appointment.date}</h1>
                                            </div>
                                        </div>
                                    ))
                                    :
                                    null
                                }
                           
                                <div className="div_botones">
                                    <Button className="boton_contratar_profesional">
                                        <h1 className="texto_boton_contratar_profesional">Contactar profesional</h1>
                                    </Button>
                                    <Button className="boton_pedir_cita" onClick={addNewAppointment}>
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