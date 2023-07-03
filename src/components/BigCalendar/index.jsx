import { useContext, useEffect, useState }  from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment);
import axios from 'axios';
import Modal from './Modal';


const BigCalendar = ({therapist_user_name, professional}) => {

  const { working_schedule } = professional;
  console.log('working_schedule: ', working_schedule);
  console.log('working_schedule123: ', moment("2023-07-24T10:00:00").toDate());

  const [workingSchedule, setWorkingSchedule] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [timeValue, setTimeValue] = useState('');

  const handleTimeChange = (event) => {
    setTimeValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Valor del input de tiempo:', timeValue);
    const newData = [{
      therapist_user_name: "jperez",
      day_of_week: "WEDNESDAY",
      start_time: "10:11",
      end_time: "11:11",
    }]
    try {
      console.log('console: ', newData);
      const response = await axios.patch(`http://localhost:8081/api/v1/therapists/${therapist_user_name}/schedule`, newData);
      console.log('Response put: ', response.data);
    } catch (error) {
        console.log(error);
    }
  };

  const myEventsList = [
    {
      start: moment("2023-07-24T10:00:00").toDate(),
      end: moment("2023-07-24T11:00:00").toDate(),
      title: "Disponible",
      // data: {
      //   type: 'ocupado'
      // }
    },
    {
      start: moment("2023-07-27T10:00:00").toDate(),
      end: moment("2023-07-27T11:00:00").toDate(),
      title: "Disponible",
      // data: {
      //   type: 'ocupado'
      // }
    },
    {
      start: moment("2023-07-30T10:00:00").toDate(),
      end: moment("2023-07-30T11:00:00").toDate(),
      title: "Disponible",
    }
  ];

  const components = {
    event: (props) => {
      console.log('Props: ', props.event.start);
      return <div className="available" onClick={handleOpen}><p>{props.title}</p></div>
    }
  }
  
  return(
    <div>
      <Calendar
        culture='es'
        localizer={localizer}
        events={myEventsList}
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
      <Modal 
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        timeValue={timeValue}
        handleTimeChange={handleTimeChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};


export default BigCalendar;
