import React, { useContext, useEffect, useState }  from 'react';
import { Link, useLocation } from 'react-router-dom';

import './styles/DiaryPageComponent.css';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import PatientContext from '../../context/patient/patientContext';
import moment from 'moment';
import 'moment/locale/es';
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import es from 'date-fns/locale/es';



const CalendarComponent = () => {

  const patientContext =  useContext(PatientContext);
  const { patientData, getPatientData } = patientContext;

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
  // fin cambio de idioma

  const Event = ({ event }) => {
    console.log('Evento: ', event);
    return (
      // <p>Hola</p>
      <Link to={`/diaryentry?date=${moment(event.end).format('DD/MM/YYYY')}&id=${event.id}`}>
        <div className="emotion">{event.title}</div>
        <img src={event.image} style={{ width: '30px', height: '30px' }} alt="Event" />
      </Link>
    );
  };


  // Aqui defino como va a ser el formato a mostrar enla celda de cada dia
  const CustomMonthDay = ({date}) => {
  
    const formattedDate = moment(date).format('DD');
    // agrego que el numero del dia sea un link que va a pasar como parametro el numero del dia a la pantalla del diario
    const linkTo = `/diaryentry?date=${moment(date).format('DD/MM/YYYY')}`;
    return <Link to={linkTo}>{formattedDate}</Link>;
  };



  useEffect(() => {
    if (!patientData){
      getPatientData();
    }
    // eslint-disable-next-line
  }, [])
  
  if (!patientData) return <p>Cargando...</p>  
 


  // el componente Calendario hace toda la magia
  return (
    <>
      <div className='seccion_pagina_1'>
        <h2 className='titulo_diary_calendar'>Diario</h2>
        <h2 className='texto_elegi_dia_escribir'>Seleccione un día para realizar una entrada en el diario:</h2>
        <div style={{ height: '600px', width: '1200px' }}>
          <Calendar
          culture="es"
          localizer={localizer}
          events={patientData.journal}
          startAccessor="start"
          endAccessor="end"
          components={{event:Event, month:{dateHeader: CustomMonthDay}}}
          views={['month','week']}
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
      </div>
    </>
  );
};

export default CalendarComponent;