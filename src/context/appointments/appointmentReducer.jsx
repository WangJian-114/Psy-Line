import { PROFESSIONAL_APPOINTMENT, DELETE_APPOINTMENT, ADD_APPOINTMENT } from '../types';

export default (state, action) => {
    switch(action.type) {
        case ADD_APPOINTMENT:
            return {
                ...state,
                appointments:[...state.appointments, action.payload],
            }

        case DELETE_APPOINTMENT:
            return {
                ...state,
                appointments:state.appointments.filter(appointment => appointment.id !== action.payload),
            }
        
        case PROFESSIONAL_APPOINTMENT:
            console.log('Accion professional_appointment: ', action.payload);
            return {
                ...state,
                professionalAppointments:state.appointments.filter(appointment => appointment.therapist_user_name == action.payload),
            }

        default:
            return state;
    }
}