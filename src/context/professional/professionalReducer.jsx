import { GET_PROFESSIONAL, GET_ALL_PROFESSIONAL } from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_PROFESSIONAL :
            console.log("action.payload: ", action.payload);
            console.log("state.professionalList: ", state.professionalList);
            return {
                ...state,
                professional: state.professionalList.filter(professional => professional.user_name === action.payload)
            }
        
        case GET_ALL_PROFESSIONAL:
            return {
                ...state,
                professionalList: action.payload
            }

        default:
            return state;
    }
}