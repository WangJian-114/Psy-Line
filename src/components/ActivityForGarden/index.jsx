import React, { useState } from 'react';


const activityForGarden = ({ onTaskCompletion }) => {

    const [isSelected, setIsSelected] = useState(false);

    const toggleButtonGarden = () => {
    setIsSelected(!isSelected);
    if (!isSelected) {
        onTaskCompletion(); // Llamada a la función para aumentar el contador de tareas completadas
      }
    
  };


    return (
        <div>
       <div className="frame-13782">
                <div className="nombre-de-tarea-3">Nombre de tarea</div>

                <button 
                    className={`frame-1379 ${isSelected ? 'selected' : ''}`}
                    onClick={toggleButtonGarden}>
                <svg
                    className="check3"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M3.3335 8.66675L6.00016 11.3334L12.6668 4.66675"
                    stroke="#ECF6F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg>
                </button>
            </div>

        </div>
    );
}
 
export default  activityForGarden;