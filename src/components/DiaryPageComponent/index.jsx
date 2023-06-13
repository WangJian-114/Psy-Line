import React from 'react';

import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles/DiaryPageComponent.css'

import { Link, useLocation } from 'react-router-dom';




const CalendarComponent = () => {

  const location = useLocation();
    // Obtener el valor del parámetro de la URL
    const searchParams = new URLSearchParams(location.search);
    const miAnimo = searchParams.get('miAnimo');
    let miCarita;
    console.log ("miAnimo..:" + miAnimo);
    if (miAnimo === null) {miCarita ="img/smile.png"}
    if (miAnimo === 1) {miCarita ="img/lol.png"};
    console.log ("miCarita..:" + miCarita);

  const localizer = momentLocalizer(moment);
  const events = [
    {
      title: 'Lol',
      start: new Date(2023, 5, 10),
      end: new Date(2023, 5, 10),
      image: {miCarita},
    },
    {
      title: 'Feliz',
      start: new Date(2023, 5, 5),
      end: new Date(2023, 5, 5),
      image: "img/smile.png",
    },
  ];
  const Event = ({ event }) => {
    return (
      <div>
        <div>{event.title}</div>
        <img src={event.image} style={{ width: '30px', height: '30px' }} alt="Event" />
      </div>
    );
  };



  const CustomMonthDay = ({ date }) => {
    const formattedDate = moment(date).format('DD');
    const linkTo = `/diaryentry?date=${formattedDate}`;
  
    return <Link to={linkTo}>{formattedDate}</Link>;
  };


  return (
    <div className='seccion_pagina_1'>
      Calendario
      <div style={{ height: '500px', width: '700px' }}>
        <Calendar
         localizer={localizer}
         events={events}
         startAccessor="start"
         endAccessor="end"
         components={{event:Event, month:{dateHeader: CustomMonthDay}}}
         views={['month','week','day']}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;