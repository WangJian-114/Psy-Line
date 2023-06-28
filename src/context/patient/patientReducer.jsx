import { GET_PATIENS_DATA, SET_JOURNAL } from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_PATIENS_DATA:
            return {
                ...state,
                patientData: action.payload,
                journalNormal: action.payload.journalBack,
            }

        default:
            return state;
    }
}