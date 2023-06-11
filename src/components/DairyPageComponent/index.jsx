import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { useNavigate } from 'react-router-dom';




const CalendarComponent = () => {

  const navigate = useNavigate();

  const handleClick = (date) => {
  
  const day = date.getDate();
  navigate('/diaryentry');
  };

  return (
    <div className='seccion_pagina'>
      <h2>Calendario</h2>
      <div className='estilo_calendario'>
        <Calendar onClickDay={handleClick}/>
      </div>
    </div>
  );
};

export default CalendarComponent;