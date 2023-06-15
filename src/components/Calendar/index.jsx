import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const Calendar = ({date, setDate, time, setTime }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem label="Agendas un turno con el profesional">
        <DateCalendar value={date} onChange={(newValue) => setDate(newValue)} />
        <TimePicker
          label="Elegir un horario"
          value={time} onChange={(newValue) => setTime(newValue)}
        />
      </DemoItem>
    </LocalizationProvider>
  );
  }
  
  export default Calendar;