import { useParams } from 'react-router-dom';

const PaginaDetalle = () => {
  const { id } = useParams();

  // Obtener los detalles de la persona según el id
  const personaDetalle = obtenerPersonaPorId(id);

  return (
    // Renderizar los detalles de la persona
    <div>
      <h1>{personaDetalle.nombre}</h1>
      <p>{personaDetalle.apellido}</p>
      <p>{personaDetalle.especialidad}</p>
      <p>{personaDetalle.consulta}</p>
      {/* Resto de los detalles... */}
    </div>
  );
};

export default PaginaDetalle;
