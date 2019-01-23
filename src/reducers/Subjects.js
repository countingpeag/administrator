import { SEARCH_SUBJECT, 
    SUBJECT_INFO, 
    UPDATE_SUBJECT, 
    UPDATE_SUBJECT_RESPONSE, 
    ADD_SUBJECT, 
    ADD_SUBJECT_RESPONSE } from '../actions';

export const searchSubject = (state = {}, action) => {
    switch(action.type){
        case SEARCH_SUBJECT:
            return action.payload;
        default:
            return state;
    }
};

export const subjectInfo = (state = {}, action) => {
    switch(action.type){
        case SUBJECT_INFO:
            return action.payload;
        default:
            return state;
    }
};

export const updateSubject = (state = {}, action) => {
    switch(action.type){
        case UPDATE_SUBJECT:
            return action.payload;
        default:
            return state;
    }
};

export const updateSubjectResponse = (state = {}, action) => {
    switch(action.type){
        case UPDATE_SUBJECT_RESPONSE:
            return action.payload;
        default:
            return state;
    }
};

export const addSubject = (state = {}, action) => {
    switch(action.type){
        case ADD_SUBJECT:
            return action.payload;
        default:
            return state;
    }
};

export const addSubjectResponse = (state = {}, action) => {
    switch(action.type){
        case ADD_SUBJECT_RESPONSE:
            return action.payload;
        default:
            return state;
    }
};