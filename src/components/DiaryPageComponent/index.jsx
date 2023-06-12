import React from 'react';

import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles/DiaryPageComponent.css'



import { useNavigate } from 'react-router-dom';




const CalendarComponent = () => {

  const localizer = momentLocalizer(moment);
  const events = [
    {
      title: 'Lol',
      start: new Date(2023, 5, 10),
      end: new Date(2023, 5, 10),
      image: 'img/lol.png',
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


  const navigate = useNavigate();

  const handleClick = (date) => {
    const day = date.getDate();
    navigate('/diaryentry');
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
         components={{event:Event}}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;