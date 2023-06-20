import React  from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import moment from 'moment';
import 'moment/locale/es';
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import es from 'date-fns/locale/es';

import './styles/DiaryPageComponent.css';

import { Link, useLocation } from 'react-router-dom';

const CalendarComponent = () => {

  const location = useLocation();
    // Obtener el valor del parámetro de la URL
    const searchParams = new URLSearchParams(location.search);
    // en miAnimo guardo el valor de la carita que presione
    let miAnimo = searchParams.get('miAnimo');
    // defino esta variable para armar el nombre del archivo de la carita
    let miCarita;
    // defino un par de eventos para mostrar cuando se carga el almanaque
    const events = [
      {
        title: 'Lol',
        start: new Date(2023, 5, 10),
        end: new Date(2023, 5, 10),
        image: "img/smile.png",
      },
      {
        title: 'Feliz',
        start: new Date(2023, 5, 5),
        end: new Date(2023, 5, 5),
        image: "img/smile.png",
      },
    ];
  
    

    // si entre por primera vez, miAnimo viene en null
    if (miAnimo != null) {
    // creo un nuevo evento para el dia 14
      const newEvent = {
        title: '',
        start: new Date(2023, 5, 14),
        end: new Date(2023, 5, 14),
        image: "",
      };
      // lo agrego a la estructura de los eventos que tenia
      events.push(newEvent);
      // armo la variable miCarita con el nombre del archivo de la cara que habia presionado
      miCarita = "img/" + miAnimo + ".png";
      //  agrego el nombre y el archivo a la estructura para que el calendario muestre el titulo y la carita en el dia 14
      events[2].image = miCarita;
      events[2].title = miAnimo;
      }

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
    return (
      <div>
        <div>{event.title}</div>
        <img src={event.image} style={{ width: '30px', height: '30px' }} alt="Event" />
      </div>
    );
  };


  // Aqui defino como va a ser el formato a mostrar enla celda de cada dia
  const CustomMonthDay = ({ date }) => {
    const formattedDate = moment(date).format('DD');
    // agrego que el numero del dia sea un link que va a pasar como parametro el numero del dia a la pantalla del diario
    const linkTo = `/diaryentry?date=${formattedDate}`;
    return <Link to={linkTo}>{formattedDate}</Link>;
  };

  // el componente Calendario hace toda la magia
  return (
    <div className='seccion_pagina_1'>
      <h2 className='titulo_diary_calendar'>Diario</h2>
      <h2 className='texto_elegi_dia_escribir'>Seleccione un día para realizar una entrada en el diario:</h2>
      <div style={{ height: '600px', width: '1200px' }}>
        <Calendar
         culture="es"
         localizer={localizer}
         events={events}
         startAccessor="start"
         endAccessor="end"
         components={{event:Event, month:{dateHeader: CustomMonthDay}}}
         views={['month']}
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
  );
};

export default CalendarComponent;