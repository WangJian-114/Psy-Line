import React, { useReducer } from 'react';
import axios from 'axios';
import diaryContext from './diaryContext';
import diaryReducer from './diaryReducer';
import { SET_PATIEN_JOURNAL } from '../types';

const DiaryState = props => {

    const initialState = {
        journal : [],
    }

    const [state, dispatch] = useReducer(diaryReducer, initialState);

    const addDiary = async (journal) => {
        try {
            const response = await axios.post('http://localhost:8081/api/v1/patients/pJuanetes/journal', journal);
            console.log('addDiary response: ', response);
            dispatch({
                type: SET_PATIEN_JOURNAL,
                payload: response.data
            }) 
        } catch (error) {
            console.log(error);
        }
    }

    const putDiary = async (journal) => {
        try {
            const response = await axios.patch('http://localhost:8081/api/v1/patients/pJuanetes/journal', journal);
            console.log('putDiary response: ', response);
            dispatch({
                type: SET_PATIEN_JOURNAL,
                payload: response.data
            }) 
        } catch (error) {
            console.log(error);
        }
    }

    const deleteDiary = async (diaryId) => {
        try {
            const response = await axios.delete(`http://localhost:8081/api/v1/patients/pJuanetes/journal/${diaryId}`);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <diaryContext.Provider
            value={{
                journal:state.journal,
                addDiary,
                putDiary,
                deleteDiary,
            }}
        >
            {props.children}
        </diaryContext.Provider>
    )
}

export default DiaryState;