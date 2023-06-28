import React, { useReducer } from 'react';
import professionalContext from './professionalContext';
import professionalReducer from './professionalReducer';
import { GET_PROFESSIONAL, GET_ALL_PROFESSIONAL, GET_FILTER_PROFESSIONAL } from '../types';
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

    const getFilterResults = async (max_price, modality, specialty, practice_area, name, therapy_treatment) => {
        try {
            console.log('url: ',`http://localhost:8081/api/v1/therapists?practice_area=${practice_area}&max_price=${max_price}&modality=${modality}&specialty=${specialty}`)
            const response = await axios.get(`http://localhost:8081/api/v1/therapists?practice_area=${practice_area}&max_price=${max_price}&modality=${modality}&therapy_treatment=${specialty}`);

            console.log('response: ', response);
            dispatch({
                type: GET_FILTER_PROFESSIONAL,
                payload: response.data,
            })  
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <professionalContext.Provider
            value={{
                professionalList:state.professionalList,
                professional:state.professional,
                getProfessional,
                getAllProfessionals,
                getFilterResults,
            }}
        >
            {props.children}
        </professionalContext.Provider>
    )
}

export default ProfessionalState;