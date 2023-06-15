import { GET_PROFESSIONAL } from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_PROFESSIONAL :
            console.log("action payload: ", action.payload);
            return {
                ...state,
                professional: state.professionalList.filter(professional => professional.id === action.payload)
            }
        default:
            return state;
    }
}