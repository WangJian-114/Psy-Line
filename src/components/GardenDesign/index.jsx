import React, { useState } from 'react';
import ActivityForGarden from '../ActivityForGarden';

const GardenDesign = ({ ...props }) => {

    const [isSelected, setIsSelected] = useState(false);

    const toggleButtonGarden = () => {
    setIsSelected(!isSelected);
  };


  return (
    <div>
        <div className="jard-n">Jardín</div>
        <div className="frame-1374">
        <div className="frame-1371">
            <div className="frame-1366">
  
            </div>

            <img className="frame-29-1-1" src="img\foto_jardin_1.png" />
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
            
            <ActivityForGarden /> {/* tarea 1 */}

            <ActivityForGarden /> {/* tarea 2 */}
            <ActivityForGarden /> {/* tarea 3 */}
            <ActivityForGarden /> {/* tarea 3 */}
            <ActivityForGarden /> {/* tarea 3 */}
            <ActivityForGarden /> {/* tarea 3 */}
            <ActivityForGarden /> {/* tarea 3 */}


            </div>
        </div>
        </div>
        <button className="boton_guardar_actividades">
            <div className="guardar_actividades">Guardar</div>
        </button>
    </div>
  );

}

export default GardenDesign