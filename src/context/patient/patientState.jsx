import React, { useReducer } from 'react';
import axios from 'axios';
import patientContext from './patientContext';
import patientReducer from './patientReducer';
import { GET_PATIENS_DATA, SET_JOURNAL } from '../types';

const PatientState = props => {

    const initialState = {
        patientData: {},
        journalNormal:[],
    }

    const getPatientData = async () => {
        try {
            const response = await axios.get('http://localhost:8081/api/v1/patients/pJuanetes');
            console.log('reponse: ', response);
            const journalBack = response.data.journal;
            let journal= [];
            response.data.journal.map((diary) => {
                let dateList = diary.date.split('-')
                console.log('dateList: ', dateList);
                console.log('dateList2: ', new Date(dateList[0], dateList[1], dateList[2]));
                journal = [
                  ...journal,
                  {
                    id:diary.id,
                    title: diary.emotion,
                    start: new Date(dateList[0], dateList[1]-1, dateList[2]),
                    end:new Date(dateList[0], dateList[1]-1, dateList[2]),
                    image: `img/${diary.emotion.toLowerCase()}.png`,
                  }
                ];
            })
            response.data.journal = journal;
            response.data.journalBack = journalBack;
            console.log('reponse: ', response.data.journal);
            dispatch({
                type: GET_PATIENS_DATA,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    }
    
    const addJournal = async (evento) => {
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
    
    const [state, dispatch] = useReducer(patientReducer, initialState);

    return(
        <patientContext.Provider
            value={{
                patientData:state.patientData,
                journalNormal: state.journalNormal,
                getPatientData,
                addJournal
            }}
        >
            {props.children}
        </patientContext.Provider>
    )
}

export default PatientState;