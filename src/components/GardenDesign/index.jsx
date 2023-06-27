import React, { useState } from 'react';
import ActivityForGarden from '../ActivityForGarden';

const GardenDesign = ({ ...props }) => {

    //const [isSelected, setIsSelected] = useState(false);
    const [completedTasks, setCompletedTasks] = useState(0);
  
    const handleTaskCompletion = () => {
        setCompletedTasks(completedTasks + 1);

    // const toggleButtonGarden = () => {
    // setIsSelected(!isSelected);
  };


  return (
    <div>
        <div className="jard-n">Jardín</div>
        <div className="frame-1374">
        <div className="frame-1371">
            <div className="frame-1366">
  
            </div>

            <img className="frame-29-1-1" src={`img/${completedTasks}_jardin.png`} />
        </div>

        <div className="frame-1377">
            <div className="frame-1375">
            <div className="por-favor-selecciona-las-actividades-que-has-realizado-y-presiona-guardar-para-ver-el-avance-en-el-jard-n">
                Por favor selecciona las actividades que has realizado y
                presiona Guardar para ver el avance en el Jardín :)
            </div>

            <div className="line-5"></div>
            </div>

            <div className="frame-1378">
            
            <ActivityForGarden onTaskCompletion={handleTaskCompletion} /> {/* tarea 1 */}
            <ActivityForGarden onTaskCompletion={handleTaskCompletion} /> {/* tarea 2 */}
            <ActivityForGarden onTaskCompletion={handleTaskCompletion} /> {/* tarea 3 */}
            <ActivityForGarden onTaskCompletion={handleTaskCompletion} /> {/* tarea 4 */}
            <ActivityForGarden onTaskCompletion={handleTaskCompletion} /> {/* tarea 5 */}
            <ActivityForGarden onTaskCompletion={handleTaskCompletion} /> {/* tarea 6 */}
            <ActivityForGarden onTaskCompletion={handleTaskCompletion} /> {/* tarea 7 */}
            <ActivityForGarden onTaskCompletion={handleTaskCompletion} /> {/* tarea 8 */}
            <ActivityForGarden onTaskCompletion={handleTaskCompletion} /> {/* tarea 9 */}
            <ActivityForGarden onTaskCompletion={handleTaskCompletion} /> {/* tarea 10 */}
            <ActivityForGarden onTaskCompletion={handleTaskCompletion} /> {/* tarea 11 */}
            <ActivityForGarden onTaskCompletion={handleTaskCompletion} /> {/* tarea 12 */}
            <ActivityForGarden onTaskCompletion={handleTaskCompletion} /> {/* tarea 13 */}
            <ActivityForGarden onTaskCompletion={handleTaskCompletion} /> {/* tarea 14 */}

            </div>
        </div>
        </div>
{/*         <button className="boton_guardar_actividades">
            <div className="guardar_actividades">Guardar</div>
        </button> */}
    </div>
  );

}

export default GardenDesign