import React, { useReducer } from 'react';
import axios from 'axios';
import appointmentContext from './appointmentContext';
import appointmentReducer from './appointmentReducer';
import { GET_APPOINTMENT,
    PROFESSIONAL_APPOINTMENT,
        DELETE_APPOINTMENT,
         ADD_APPOINTMENT 
        } from '../types';

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

    const getProfessionalAppointments = async (id) => {
        console.log('Hola Ehecute');
        try {
            const response = await axios.get(`http://localhost:8081/api/v1/appointments/therapist/jperez`);
            console.log('getProfessionalAppointments: ', response);
            dispatch({
                type: PROFESSIONAL_APPOINTMENT,
                payload: id
            });
        } catch (error) {
            console.log(error);
        }


    }

    const addAppointment = async (appointment) => {
        try {
            const response = await axios.post('http://localhost:8081/api/v1/appointments', appointment);
            console.log('ADD APPOINTMENT: ', response);
            dispatch({
                type: ADD_APPOINTMENT,
                payload: response.data
            }) 
        } catch (error) {
            console.log(error);
        }
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