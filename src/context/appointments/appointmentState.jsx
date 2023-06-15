import React, { useReducer } from 'react';

import appointmentContext from './appointmentContext';
import appointmentReducer from './appointmentReducer';
import { GET_APPOINTMENT,
    PROFESSIONAL_APPOINTMENT,
        DELETE_APPOINTMENT,
         ADD_APPOINTMENT 
        } from '../types';

// import clienteAxios from '../../config/axio';


const AppointmentState = props => {

    const initialState = {
        appointments : [],
        professionalAppointments:[],
    }

    const [state, dispatch] = useReducer(appointmentReducer, initialState);

    const removeAppointments = (id) => {
        dispatch({
            type: DELETE_APPOINTMENT,
            payload: id
        })
    }

    const getProfessionalAppointments = (id) => {
        dispatch({
            type: PROFESSIONAL_APPOINTMENT,
            payload: id
        })
    }

    const addAppointment = (appointment) => {
        dispatch({
            type: ADD_APPOINTMENT,
            payload: appointment
        })
    }

    return(
        <appointmentContext.Provider
            value={{
                appointments:state.appointments,
                professionalAppointments: state.professionalAppointments,
                addAppointment,
                removeAppointments,
                getProfessionalAppointments
            }}
        >
            {props.children}
        </appointmentContext.Provider>
    )
}

export default AppointmentState;