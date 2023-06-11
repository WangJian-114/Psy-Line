import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function HomePage() {
  return (
    <div>
      <h1>Calendario</h1>
      <Calendar />
    </div>
  );
}

function DayPage({ match }) {
  const { day } = match.params;

  return (
    <div>
      <h1>Día seleccionado: {day}</h1>
      <p>Contenido de la página del día {day}</p>
    </div>
  );
}

function DairyPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route
          path="/day/:day"
          render={(props) => <DayPage {...props} />}
        />
        <Calendar value={selectedDate} onChange={handleDateChange} />
        <Link to={`/day/${selectedDate.getDate()}`}>Ver detalles del día</Link>
      </div>
    </Router>
  );
}

export default DairyPage;
