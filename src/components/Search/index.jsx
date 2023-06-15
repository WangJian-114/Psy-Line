import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './styles/search.css';
import data from './data.json';

const BuscarPersonas = () => {
  const [filtroPrecioMin, setFiltroPrecioMin] = useState('');
  const [filtroPrecioMax, setFiltroPrecioMax] = useState('');
  const [filtroConsulta, setFiltroConsulta] = useState('');
  const [filtroEspecialidad, setFiltroEspecialidad] = useState('');
  const [filtroUbicacion, setFiltroUbicacion] = useState('');
  const [resultados, setResultados] = useState(data);

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
    const resultadosFiltrados = data.filter(({ especialidad, consulta, ubicacion, precio }) => {
      const cumpleConsulta = (filtroConsulta === '') ? true : consulta === filtroConsulta;
      const cumpleEspecialidad = (filtroEspecialidad === '') ? true : especialidad === filtroEspecialidad;
      const cumpleUbicacion = (filtroUbicacion === '') ? true : ubicacion === filtroUbicacion;
      const cumplePrecio =  ((filtroPrecioMax === '') ? true : precio <= filtroPrecioMax) && ((filtroPrecioMin === '') ? true : precio >= filtroPrecioMin);
      return cumpleConsulta && cumpleEspecialidad && cumpleUbicacion && cumplePrecio;
    });
    resultadosFiltrados.sort((a, b) => {
      if (a.sesiones_realizadas > b.sesiones_realizadas) {
        return -1;
      } else if (a.sesiones_realizadas < b.sesiones_realizadas) {
        return 1;
      } else {
        return 0;
      }
    });
    setResultados(resultadosFiltrados);
  }

  return (
    <div className='seccion-pagina'>
      <h1 className='titulo_buscar_psicologo'>Buscar Psicólogo</h1>
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
            <option value="">Categorías</option>
            <option value="adicciones">Adicciones</option>
            <option value="analisis de sueños">Análisis de Sueños</option>
            <option value="anorexia">Anorexia</option>
            <option value="ansiedad">Ansiedad</option>
            <option value="ataques de panico">Ataques de pánico</option>
            <option value="bullying">Bullying</option>
            <option value="dependencia emocional">Dependencia emocional</option>
            <option value="depresion">Depresión</option>
            <option value="duelo">Duelo</option>
            <option value="estres">Estrés</option>
            <option value="estres postraumatico">Estrés Postraumático</option>
            <option value="insomnio">Insomnio</option>
            <option value="ludopatia">Ludopatía</option>
            <option value="psicoanalisis">Psicoanálisis</option>
            <option value="sexologia">Sexología</option>
            <option value="suicidio">Suicidio</option>
            <option value="tdah">Tdah</option>
            <option value="terapia Cognitiva Conductual">Terapia Cognitiva-Conductual</option>
            <option value="terapia Familiar">Terapia Familiar</option>
            <option value="terapia Grupal">Terapia Grupal</option>
          </select>
        </div>

        <div className='filtro-item'>
          <select className='location_select' value={filtroUbicacion} onChange={handleFiltroUbicacionChange}>
            <option value="">Localidad</option>
            <option value="Palermo">Palermo</option>
            <option value="Recoleta">Recoleta</option>
            <option value="Caballito">Caballito</option>
            <option value="Zona Norte">Zona Norte</option>
            <option value="Zona Oeste">Zona Oeste</option>
            <option value="Zona Este">Zona Este</option>
            <option value="Zona Sur">Zona Sur</option>
          </select>
        </div>
        <div className='filtro-etiqueta'> 
          <label htmlFor="precioMin ">Valor Mínimo:</label>
        </div> 
        <input
          className='filtro-input'
          type="number"
          id="precioMin"
          value={filtroPrecioMin}
          onChange={(e) => setFiltroPrecioMin(e.target.value)}
        />
        <div className='filtro-etiqueta'>
          <label htmlFor="precioMax ">Valor Máximo:</label>
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
        {(resultados.length!== 0) ? resultados.map((persona, index) => (
          <div key={index} className='resultado-container-rectangulo'>
            <div className='resultado-container' key={index}>
              <img src={persona.foto} alt={persona.nombre} className='resultado-img' />
              <div className='resultado-container-datos'>
                <div className='resultado-datos'>
                  <h3>{persona.nombre} {persona.apellido}</h3>
                  <p>Especialidad: {persona.especialidad}</p>
                  <li>Precio: {persona.precio}</li>
                  <li>Descripción: {persona.descripcion}</li>
                  <li>Ubicacion: {persona.ubicacion}</li>
                </div>
                <Link to={`/profile/${persona.id}`} className="perfil_button">Ver perfil</Link>
              </div>
            </div>
          </div>
        ))
        : <p className='no_results_message'>No hay resultados que coincidan con tu búsqueda</p>}
      </div>
    </div>
  );
};

export default BuscarPersonas;
