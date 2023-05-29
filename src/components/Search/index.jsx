import React, { useState } from 'react'; 
import './styles/search.css';
import data from './data.json';

const BuscarPersonas = () => {
  const [filtroPrecioMin, setFiltroPrecioMin] = useState('');
  const [filtroPrecioMax, setFiltroPrecioMax] = useState('');
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


  function buscarPersonas() {
    const resultadosFiltrados = data.filter((persona) => {
      if ((filtroConsulta === 'ambas' || persona.consulta === filtroConsulta) &&
        (filtroEspecialidad === '' || persona.especialidad === filtroEspecialidad) &&
        (filtroUbicacion === '' || persona.ubicacion === filtroUbicacion) &&
        (filtroPrecioMin === '' || persona.precio >= filtroPrecioMin) &&
        (filtroPrecioMax === '' || persona.precio <= filtroPrecioMax)) {
        return true;
      }
      return false;
    });

    setResultados(resultadosFiltrados);
  }

  return (
    <div className='seccion-pagina'>
      <h1>Búsqueda de Psicólogo</h1>
      <div className='filtro-container'>
        <div className='filtro-item'>
          <select value={filtroConsulta} onChange={handleFiltroConsultaChange}>
            <option value="">Modalidad de Consulta</option>
            <option value="consultaVirtual">Consulta Virtual</option>
            <option value="consultaPresencial">Consulta Presencial</option>
            <option value="ambas">Ambas</option>
          </select>
        </div>

        <div className='filtro-item'>
          <select value={filtroEspecialidad} onChange={handleFiltroEspecialidadChange}>
            <option value="">Especialidad</option>
            <option value="psicoanalisis">Psicoanálisis</option>
            <option value="terapia Cognitiva Conductual">Terapia Cognitiva-Conductual</option>
            <option value="terapia Familiar">Terapia Familiar</option>
            <option value="terapia Grupal">Terapia Grupal</option>
          </select>
        </div>

        <div className='filtro-item'>
          <select value={filtroUbicacion} onChange={handleFiltroUbicacionChange}>
            <option value="">Localidad</option>
            <option value="Palermo">Palermo</option>
            <option value="Recoleta">Recoleta</option>
            <option value="Caballito">Caballito</option>
            <option value="Zona Norte">Palermo</option>
            <option value="Zona Oeste">Recoleta</option>
            <option value="Zona Este">Caballito</option>
            <option value="Zona Sur">Palermo</option>
          </select>
        </div>

        <div className='filtro-etiqueta'> 
          <label htmlFor="precioMin ">Precio Mínimo:</label>
        </div> 
        <input
          className='filtro-input'
          type="number"
          id="precioMin"
          value={filtroPrecioMin}
          onChange={(e) => setFiltroPrecioMin(e.target.value)}
        />
        <div className='filtro-etiqueta'>
          <label htmlFor="precioMax ">Precio Máximo:</label>
        </div>
        <input
          className='filtro-input'
          type="number"
          id="precioMax"
          value={filtroPrecioMax}
          onChange={(e) => setFiltroPrecioMax(e.target.value)}
        /> 
        <button className='buscar-button' onClick={buscarPersonas}>Buscar</button>
      </div>
      <div>
        {resultados.map((persona, index) => (
          <div className='resultado-container-rectangulo'>
            <div className='resultado-container' key={index}>
              <img src={persona.foto} alt={persona.nombre} className='resultado-img' />
              <div className='resultado-container-datos'>
                <div className='resultado-datos'>
                  <h3>{persona.nombre} {persona.apellido}</h3>
                  <p>Especialidad: {persona.especialidad}</p>
                  <p>Precio: {persona.precio}</p>
                  <p>Descripción: {persona.descripcion}</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuscarPersonas;
