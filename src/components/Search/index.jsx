import React, { useState, useContext, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import './styles/search.css';
import ProfessionalContext from '../../context/professional/professionalContext';

const BuscarPersonas = () => {
  const [filtroPrecioMax, setFiltroPrecioMax] = useState('');
  const [filtroConsulta, setFiltroConsulta] = useState('');
  const [filtroEspecialidad, setFiltroEspecialidad] = useState('');
  const [filtroUbicacion, setFiltroUbicacion] = useState('');
  const [filtroNombre, setFiltroNombre] = useState('');

  const professionalContext =  useContext(ProfessionalContext);
  const { professionalList, getFilterResults, getAllProfessionals } = professionalContext;
  const handleFiltroConsultaChange = (event) => {
    setFiltroConsulta(event.target.value);
  };

  const handleFiltroEspecialidadChange = (event) => {
    setFiltroEspecialidad(event.target.value);
  };

  const handleFiltroUbicacionChange = (event) => {
    setFiltroUbicacion(event.target.value);
  };

  const handleFiltroNombreChange = (event) => {
    setFiltroConsulta(event.target.value);
  };

  const buscarPersonas = () => {
    getFilterResults(filtroPrecioMax, filtroConsulta, filtroEspecialidad, filtroUbicacion, filtroNombre);
    setResultados(professionalList);
  }

  useEffect(() => {
    getAllProfessionals();
    // eslint-disable-next-line
  }, [])

  if (professionalList.length === 0) {
    return (<p>Cargando...</p>)
  }

  return (
    <div className='seccion-pagina'>
      <h1 className='titulo_buscar_psicologo'>Buscar Psicólogo</h1>
      <div className='filtro-container'>

          

        <div className='filtro-item'>
          <select value={filtroConsulta} onChange={handleFiltroConsultaChange}>
            <option value="">Modalidad de Consulta</option>
            <option value="VIRTUAL">Consulta Virtual</option>
            <option value="IN_PERSON">Consulta Presencial</option>
            <option value="HYBRID">Ambas</option>
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
            <option value="PSYCHOANALYSIS">Psicoanálisis</option>
            <option value="sexologia">Sexología</option>
            <option value="suicidio">Suicidio</option>
            <option value="tdah">Tdah</option>
            <option value="COGNITIVE_BEHAVIORAL_THERAPY">Terapia Cognitiva-Conductual</option>
            <option value="FAMILY_THERAPY">Terapia Familiar</option>
            <option value="GROUP_THERAPY">Terapia Grupal</option>
          </select>
        </div>

        <div className='filtro-item'>
          <select className='location_select' value={filtroUbicacion} onChange={handleFiltroUbicacionChange}>
            <option value="">Localidad</option>
            <option value="PALERMO">Palermo</option>
            <option value="RECOLETA">Recoleta</option>
            <option value="CABALLITO">Caballito</option>
            <option value="BELGRANO">Belgrano</option>
            <option value="ALMAGRO">Almagro</option>
            <option value="AGRONOMIA">Agronomia</option>
            <option value="PARQUE_AVELLANEDA">Parque avellaneda</option>
          </select>
        </div>

        <input
          className='filtro-input'
          type="number"
          id="precioMax"
          placeholder="Valor Máximo"
          value={filtroPrecioMax}
          onChange={(e) => setFiltroPrecioMax(e.target.value)}
        />

        <input
          className='filtro-inputnombre'
          type="text"
          id="fnombre"
          placeholder="Nombre y/o Apellido"
          value={filtroNombre}
          onChange={(e) => setFiltroNombre(e.target.value)}
        />
        
        <button className='buscar-button' onClick={buscarPersonas}>Buscar</button>
      </div>

      <div>
        {(professionalList?.length!== 0) ? professionalList.map((persona, index) => (
          <div key={index} className='resultado-container-rectangulo'>
            <div className='resultado-container' key={index}>
              <img src={persona.foto} alt={persona.nombre} className='resultado-img' />
              <div className='resultado-container-datos'>
                <div className='resultado-datos'>
                  <h3>{persona.name} {persona.last_name}</h3>
                  <p>Modalidad: {persona.appointment_modality}</p> {/* aca yo pondria si la sesion es virtual y presencial o cual */}
                  <li>Valor: {persona.appointment_price}</li>
                  <li>Cateogrias: {persona.specialty}</li> {/* aca tiene que ir las especialidades puestas con una , en medio tipo Especialidad: Depresión, Ansiedad, etc. */}
                  <li>Ubicacion: {persona.practice_area}</li> 
                </div>
                <Link to={`/profile/${persona.user_name}`} className="perfil_button">Ver perfil</Link>
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
