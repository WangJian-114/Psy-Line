import React, { useReducer } from 'react';
import professionalContext from './professionalContext';
import professionalReducer from './professionalReducer';
import { GET_PROFESSIONAL, 
         GET_ALL_PROFESSIONAL, 
         GET_FILTER_PROFESSIONAL,
         GET_NEW_AVAILABLE_DAY
        } from '../types';
import axios from 'axios';

const ProfessionalState = props => {

    const initialState = {
        professionalList: undefined,
        professional: null,
        working_schedule: null,
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

    const getProfessional = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8081/api/v1/therapists/${id}`);

            dispatch({
                type: GET_PROFESSIONAL,
                payload: response.data,
            })
        } catch (error) {
            console.log(error);
        }

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

    const delelteAvailableDay = async (user_name, id) => {
        try {
            const response = await axios.delete(`http://localhost:8081/api/v1/therapists/${user_name}/schedule/${id}`);
            console.log('Response deleted: ', response.data);
            dispatch({
                type: GET_NEW_AVAILABLE_DAY,
                payload: id,
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
                working_schedule: state.working_schedule,
                getProfessional,
                getAllProfessionals,
                getFilterResults,
                delelteAvailableDay,
            }}
        >
            {props.children}
        </professionalContext.Provider>
    )
}

export default ProfessionalState;