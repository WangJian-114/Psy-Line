import React, { useState } from 'react'; 
import data from './data.json';

const BuscarPersonas = () => {
  const [filtroConsulta, setFiltroConsulta] = useState('');
  const [filtroEspecialidad, setFiltroEspecialidad] = useState('');
  const [filtroUbicacion, setFiltroUbicacion] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleFiltroConsultaChange = (event) => {
    setFiltroConsulta(event.target.value);
  };

  const handleFiltroEspecialidadChange = (event) => {
    setFiltroEspecialidad(event.target.value);
  };

  const handleFiltroUbicacionChange = (event) => {
    setFiltroUbicacion(event.target.value);
  };

  const buscarPersonas = () => {
    const resultadosFiltrados = data.filter((persona) => {
      if (
        (filtroConsulta === 'ambas' || persona.consulta === filtroConsulta) &&
        (filtroEspecialidad === '' || persona.especialidad === filtroEspecialidad) &&
        (filtroUbicacion === '' || persona.ubicacion === filtroUbicacion)
      ) {
        return true;
      }
      return false;
    });

    setResultados(resultadosFiltrados);
  };

  return (
    <div>
      <h1>Búsqueda de Personas</h1>

      <div>
        <label>
          Filtro Consulta:
          <select value={filtroConsulta} onChange={handleFiltroConsultaChange}>
            <option value="">Todos</option>
            <option value="consultaVirtual">Consulta Virtual</option>
            <option value="consultaPresencial">Consulta Presencial</option>
            <option value="ambas">Ambas</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Filtro Especialidad:
          <select value={filtroEspecialidad} onChange={handleFiltroEspecialidadChange}>
            <option value="">Todas</option>
            <option value="psicoanalisis">Psicoanálisis</option>
            <option value="terapiaCognitivaConductual">Terapia Cognitiva-Conductual</option>
            <option value="terapiaFamiliar">Terapia Familiar</option>
            <option value="terapiaGrupal">Terapia Grupal</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Filtro Ubicación:
          <select value={filtroUbicacion} onChange={handleFiltroUbicacionChange}>
            <option value="">Todas</option>
            <option value="Palermo">Palermo</option>
            <option value="Recoleta">Recoleta</option>
            <option value="Caballito">Caballito</option>
          </select>
        </label>
      </div>

      <button onClick={buscarPersonas}>Buscar</button>

      <div>
        <h2>Resultados:</h2>
        {resultados.map((persona) => (
          <div key={persona.nombre}>
            <h3>{persona.nombre} {persona.apellido}</h3>
            <p>Especialidad: {persona.especialidad}</p>
            <p>Descripción: {persona.descripcion}</p>
            <img src={persona.foto} alt={persona.nombre} className='persona_imagen' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuscarPersonas;
