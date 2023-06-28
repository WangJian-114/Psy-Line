import React, { useState } from 'react';
import ActivityForGarden from '../ActivityForGarden';

const GardenDesign = ({ ...props }) => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [actividades, setActividadesPendientes] = useState([
    { id: 1, nombre: "Tarea 1" },
    { id: 2, nombre: "Tarea 2" },
    { id: 3, nombre: "Tarea 3" },
    { id: 4, nombre: "Tarea 4" },
    { id: 5, nombre: "Tarea 5" },
    { id: 6, nombre: "Tarea 6" },
    { id: 7, nombre: "Tarea 7" },
    { id: 8, nombre: "Tarea 8" },
    { id: 9, nombre: "Tarea 9" },
    { id: 10, nombre: "Tarea 10" },
    { id: 11, nombre: "Tarea 11" },
    { id: 12, nombre: "Tarea 12" },
    { id: 13, nombre: "Tarea 13" },
    { id: 14, nombre: "Tarea 14" }
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
    <div>
      <div className="jard-n">Jardín</div>
      <div className="frame-1374">
        <div className="frame-1371">
          <div className="frame-1366"></div>
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
      <div className="completed-tasks">Actividades completadas: {completedTasks}</div>
    </div>
  );
};

export default GardenDesign;
