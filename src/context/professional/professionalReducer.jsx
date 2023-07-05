import { GET_PROFESSIONAL, GET_ALL_PROFESSIONAL, GET_FILTER_PROFESSIONAL, GET_NEW_AVAILABLE_DAY } from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_PROFESSIONAL :
            console.log("action.payload??: ", action.payload);
            console.log("state.professionalList: ", state.professionalList);
            return {
                ...state,
                professional: action.payload,
                working_schedule: action.payload.working_schedule,
            }
        
        case GET_ALL_PROFESSIONAL:
            return {
                ...state,
                professionalList: action.payload
            }

        case GET_FILTER_PROFESSIONAL: 
            return {
                ...state,
                professionalList: action.payload
            }

        case GET_NEW_AVAILABLE_DAY:
            console.log("!!!!action.payload??: ", action.payload);
            return {
                ...state,
                working_schedule: state.working_schedule.filter(w => w.id !== action.payload)
            }

        default:
            return state;
    }
}