import React, { useReducer } from 'react';
import professionalData from '../../components/Search/data.json';
import professionalContext from './professionalContext';
import professionalReducer from './professionalReducer';
import { GET_PROFESSIONAL } from '../types';

// import clienteAxios from '../../config/axio';


const ProfessionalState = props => {

    const initialState = {
        professionalList: professionalData,
        professional: null
    }

    const [state, dispatch] = useReducer(professionalReducer, initialState);

    const getProfessional = (id) => {
        dispatch({
            type: GET_PROFESSIONAL,
            payload: id,
        })
    }

    return(
        <professionalContext.Provider
            value={{
                professionalList:state.professionalList,
                professional:state.professional,
                getProfessional,
            }}
        >
            {props.children}
        </professionalContext.Provider>
    )
}

export default ProfessionalState;