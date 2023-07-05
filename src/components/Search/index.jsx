import React, { useState, useContext, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import './styles/search.css';
import ProfessionalContext from '../../context/professional/professionalContext';
import { useTranslation } from 'react-i18next';
import '../../i18n/config';


const BuscarPersonas = () => {
  const { t } = useTranslation();
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

  if (!professionalList) {
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
            <option value="PRESENCIAL">Consulta Presencial</option>
            <option value="HIBRIDO">Ambas</option>
          </select>
        </div>

        <div className='filtro-item'>
          <select value={filtroEspecialidad} onChange={handleFiltroEspecialidadChange}>
            <option value="">Categorías</option>
            <option value="ADICCIONES">Adicciones</option>
            <option value="ANALISIS_DE_SUEÑO">Análisis de Sueños</option>
            <option value="ANOREXIA">Anorexia</option>
            <option value="ANSIEDAD">Ansiedad</option>
            <option value="ATAQUE_DE_PANICO">Ataques de pánico</option>
            <option value="BULLYING">Bullying</option>
            <option value="DEPENDENCIA_EMOCIONAL">Dependencia emocional</option>
            <option value="DEPRESION">Depresión</option>
            <option value="DUELO">Duelo</option>
            <option value="ESTRES">Estrés</option>
            <option value="TRASTORNO_POR_ESTRES_POSTRAUMATICO">Estrés Postraumático</option>
            <option value="INSOMNIO">Insomnio</option>
            <option value="LUDOPATIA">Ludopatía</option>
            <option value="PSICOANALISIS">Psicoanálisis</option>
            <option value="SEXOLOGIA">Sexología</option>
            <option value="SUICIDIO">Suicidio</option>
            <option value="TDAH">Tdah</option>
            <option value="COGNITIVO_CONDUCTUAL">Terapia Cognitiva-Conductual</option>
            <option value="TERAPIA_FAMILIAR">Terapia Familiar</option>
            <option value="TERAPIA_GRUPAL">Terapia Grupal</option>
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
          placeholder="Honorario Máximo"
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
        {(professionalList?.length!== 0) ? professionalList.map(({name, last_name,appointment_price, appointment_modality, therapy_treatments, practice_area, user_name, picture }) => (
          <div key={user_name} className='resultado-container-rectangulo'>
            <div className='resultado-container' key={user_name}>
              <img src={picture} alt={name} className='resultado-img' />
              <div className='resultado-container-datos'>
                <div className='resultado-datos'>
                  <h3>{name} {last_name}</h3>
                  <p>Modalidad: {appointment_modality}</p> {/* aca yo pondria si la sesion es virtual y presencial o cual */}
                  <li>Honorarios: ${appointment_price} ARS</li>
                  <li>Categorias: {(therapy_treatments[0]) ? therapy_treatments[0].therapy_treatment : ''} - {(therapy_treatments[1]) ? therapy_treatments[1].therapy_treatment : ''} - {(therapy_treatments[2]) ? therapy_treatments[2].therapy_treatment : ''} - {(therapy_treatments[3]) ? therapy_treatments[3].therapy_treatment : ''} ...</li>
                  <li>Ubicacion: {practice_area}</li> 
                </div>
                <Link to={`/profile/${user_name}`} className="perfil_button">Ver perfil</Link>
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
