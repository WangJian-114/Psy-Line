import React, { useReducer } from 'react';
import professionalContext from './professionalContext';
import professionalReducer from './professionalReducer';
import { GET_PROFESSIONAL, GET_ALL_PROFESSIONAL } from '../types';
import axios from 'axios';

const ProfessionalState = props => {

    const initialState = {
        professionalList: [],
        professional: null
    }

    const getAllProfessionals = async () => {
        try {
            const response = await axios.get('http://localhost:8081/api/v1/therapists');
            dispatch({
                type: GET_ALL_PROFESSIONAL,
                payload: response.data,
            })  
        } catch (error) {
            console.log(error);
        }
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
                getAllProfessionals,
            }}
        >
            {props.children}
        </professionalContext.Provider>
    )
}

export default ProfessionalState;