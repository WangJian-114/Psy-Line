import React, { useState } from 'react';
import ActivityForGarden from '../ActivityForGarden';

const GardenDesign = ({ ...props }) => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [actividades, setActividadesPendientes] = useState([
    { id: 1, nombre: "1. Practica la atención plena durante al menos 10 minutos todos los días." },
    { id: 2, nombre: "2. Realiza una actividad física que te guste al menos tres veces durante esta semana (caminar, nadar, bailar, etc.)"},
    { id: 3, nombre: "3. Dedica 10 minutos al día para escribir en el diario" },
    { id: 4, nombre: "4. Establece un objetivo específico y alcanzable para la semana y desarrolla un plan de acción para lograrlo." },
    { id: 5, nombre: "5. Dedica tiempo hoy para realizar una actividad creativa que te inspire (pintar, escribir, tocar música, etc.)"},
    { id: 6, nombre: "6. Identifica una creencia negativa que tengas sobre ti y trabaja en reemplazarla por una creencia más positiva." },
    { id: 7, nombre: "7. Realiza una buena acción o acto de amabilidad hacia alguien más hoy." },
    { id: 8, nombre: "8. Practica la respiración profunda y la relajación muscular para reducir el estrés y la ansiedad unos minutos." },
    { id: 9, nombre: "9. Establece límites saludables en tus relaciones y aprende a decir no cuando sea necesario." },
    { id: 10, nombre: "10. Encuentra al menos 30 minutos al día para hacer algo que te apasione y te brinde una sensación de fluidez" },
    { id: 11, nombre: "11. Reflexiona sobre tus intereses, pasiones y habilidades, y encuentra formas de integrarlos en tu vida diaria." },
    { id: 12, nombre: "12. Identifica al menos una tarea en tu trabajo o vida cotidiana que te haga sentir significado y propósito." },
    { id: 13, nombre: "13. Busca oportunidades para ayudar o hacer una diferencia positiva en la vida de otras personas.  " },
    { id: 14, nombre: "14. Establece metas y combinando aquello que amas, en lo que eres bueno." }
  ]);

  const [actividadesSeleccionadas, setActividadesSeleccionadas] = useState([]);
  const [actividadesEliminadas, setActividadesEliminadas] = useState([]);

  const handleTaskCompletion = (id, isSelected) => {
    if (isSelected) {
      setActividadesSeleccionadas((prevActividades) =>
        prevActividades.concat(id)
      );
      setCompletedTasks((prevCompletedTasks) => prevCompletedTasks + 1);
    } else {
      setActividadesSeleccionadas((prevActividades) =>
        prevActividades.filter((actividad) => actividad !== id)
      );
      setCompletedTasks((prevCompletedTasks) => prevCompletedTasks - 1);
    }
  };

  const handleGuardar = () => {
    const nuevasActividadesPendientes = actividades.filter(
      (actividad) => !actividadesSeleccionadas.includes(actividad.id)
    );
    setActividadesPendientes(nuevasActividadesPendientes);
    setActividadesEliminadas((prevActividadesEliminadas) =>
      prevActividadesEliminadas.concat(actividadesSeleccionadas)
    );
    setActividadesSeleccionadas([]);
  };

  const imagen = `${Math.min(actividadesEliminadas.length + 1, 14)}_jardin.png`;

  return (
    <div className='garden_container'>
      <div className="jard-n">Jardín</div>
      <div className="frame-1374">
        <div className="frame-1371">
          {/* <div className="frame-1366"></div> */}
          <img
            className="frame-29-1-1"
            src={`img/${imagen}`}
            alt=""
          />
        </div>

        <div className="frame-1377">
          <div className="frame-1375">
            <div className="por-favor-selecciona-las-actividades-que-has-realizado-y-presiona-guardar-para-ver-el-avance-en-el-jard-n">
              Por favor selecciona las actividades que has realizado y presiona Guardar para ver el avance en el Jardín :)
            </div>
            <div className="line-5"></div>
          </div>

          <div className="frame-1378">
            {actividades.map((actividad) => (
              <ActivityForGarden
                key={actividad.id}
                nombreActividad={actividad.nombre}
                id={actividad.id}
                isSelected={actividadesSeleccionadas.includes(actividad.id)}
                onTaskCompletion={handleTaskCompletion}
              />
            ))}
          </div>
        </div>
      </div>
      <button className="boton_guardar_actividades" onClick={handleGuardar}>
        <div className="guardar_actividades">Guardar</div>
      </button>
      {/* <div className="completed-tasks">Actividades completadas: {completedTasks}</div> */}
    </div>
  );
};

export default GardenDesign;
