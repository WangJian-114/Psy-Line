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
    const { professionalList, professional, getProfessional } = professionalContext;
    const [date, setDate] = useState(dayjs('2022-04-17'));
    const [time, setTime] = useState();

    const addNewAppointment = () => {
        const appointment = {
            id:  Math.floor(Math.random() * 100),
            date_time: `${moment(date.$d).format('YYYY-MM-DD')}T${moment(time.$d).format('HH:mm:ss')}`,
            price: professional[0].appointment_price,
            paid: false,
            status: "PENDING",
            type: professional[0].appointment_modality,
            therapist_user_name: professional[0].user_name,
            patient_user_name: "pJuanetes",
            // image: professional[0].foto
        }
        console.log(appointment);
        addAppointment(appointment);
    }
    console.log('professionalList: ', professionalList.length === 0, professionalList);

    useEffect(() => {
        getProfessional(id);
        getProfessionalAppointments(id);
    // eslint-disable-next-line
    }, [appointments])



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
                        {professional && <ProfessionalCard professional={professional[0]} />}
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
                                    professionalAppointments.map(appointment => (
                                        <div className="div_cita">
                                            <div className="encuadre_cita">
                                                <h1 className="texto_cita_programada_para">Cita programada para</h1>
                                                {/* la hora y el dia de la cita surgen de que la persona apreta X dia y hora en el calendario */}
                                                <h1 className="texto_fecha_que_se_eligio_en_calendario">{appointment.date_time.replace('T',' a las: ')}</h1>
                                            </div>
                                        </div>
                                    ))
                                    :
                                    null
                                }
                           
                                <div className="div_botones">
                                    <Button className="boton_contratar_profesional">
                                        Contactar profesional
                                    </Button>
                                    <Button disabled={professionalAppointments.length !== 0}          className="boton_pedir_cita" onClick={addNewAppointment}>
                                        Pedir cita
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