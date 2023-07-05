import { useContext, useEffect, useState }  from 'react';
import { Calendar, momentLocalizer, dateFnsLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment);
import axios from 'axios';
import Swal from 'sweetalert2';
import AppointmentContext from '../../context/appointments/appointmentContext';
import ProfessionalContext from '../../context/professional/professionalContext';
import es from 'date-fns/locale/es';
import 'moment/locale/es';
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";


const BigCalendar = ({profesional}) => {

  // cambio de idioma
  const locales = {
    es: es,
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const { user_name } = profesional;
  console.log('CONSOLE profesional: ', profesional);

  const appointmentContext =  useContext(AppointmentContext);
  const professionalContext =  useContext(ProfessionalContext);
  const { addAppointment} = appointmentContext;
  const { working_schedule, professional, getProfessional } = professionalContext;

  const [workingSchedule, setWorkingSchedule] = useState([]);

  const addNewAppointment = (fecha) => {
    const appointment = {
        // id:  Math.floor(Math.random() * 100),
        // date_time: `${moment(date.$d).format('YYYY-MM-DD')}T${moment(time.$d).format('HH:mm:ss')}`,
        date_time: fecha,
        price: profesional.appointment_price,
        paid: false,
        status: "Pendiente",
        type: 'Virtual',
        therapist_user_name: profesional.user_name,
        patient_user_name: "pJuanetes",
        // image: profesional[0].foto
    }
    console.log('data a postear: ', appointment);
    addAppointment(appointment);
  }

  const formatWorkingSchedule = (schedule) => {
    console.log("CONSOLE working_schedule.length: ", working_schedule.length);
    const eventList = schedule.map(({id, date, start_time, end_time}) => {
      console.log(`!!!!!!: ${date}T${start_time}`);
      return {
          id,
          start: moment(`${date}T${start_time}`).toDate(),
          end: moment(`${date}T${end_time}`).toDate(),
          title: "Disponible",
          data: {
            id,
            fecha: `${date}T${start_time}`
          }
      }
    });
    console.log('Response deleted!!!!! FORMATED:', eventList);
    setWorkingSchedule(eventList);
  }

  const deletedAvailability = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8081/api/v1/therapists/${user_name}/schedule/${id}`);
      console.log('Response deleted!!!!!: ', response.data.working_schedule
      );
      formatWorkingSchedule(response.data.working_schedule);
    } catch (error) {
        console.log(error);
    }
  }




  const handleSubmit = async (id, fecha) => {
    Swal.fire({
      title: 'Generacion de Turno',
      text: "Estas seguro que queres agendar este horario?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        deletedAvailability(id);
        console.log('CONSOLE new professional: ', professional);
        addNewAppointment(fecha);
        Swal.fire(
          'Correcto',
          'Turno generado correctamente',
          'success'
        )
      }
    })
  };

  const components = {
    event: (props) => {
      console.log('CONSOLE Props!!!: ', props.event);
      return <div className="available" onClick={() => handleSubmit(props?.event?.data?.id, props?.event?.data?.fecha)}><p>{props.title}</p></div>
    }
  }

  useEffect(() => {
    getProfessional(user_name);
    formatWorkingSchedule(working_schedule);
  // eslint-disable-next-line
  }, [])

  if(!working_schedule) return <p>Cargando...</p>
  
  return(
    <div>
      <Calendar
        culture='es'
        localizer={localizer}
        events={workingSchedule}
        components={components}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={['month','day']}
        messages={{
          next: "Despues",
          previous: "Atras",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día"
        }}
      />
    </div>
  );
};


export default BigCalendar;
