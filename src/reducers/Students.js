import { SEARCH_STUDENT, STUDENT_INFO, DELETE_STUDENT, DELETE_RESPONSE } from '../actions';

export const searchStudent = (state = {}, action) => {
    switch(action.type){
        case SEARCH_STUDENT:
            return action.payload;
        default:
            return state;
    }
};

export const studentInfo = (state = {}, action) => {
    switch(action.type){
        case STUDENT_INFO:
            return action.payload;
        default:
            return state;
    }
};

export const deleteStudent = (state = {}, action) => {
    switch(action.type){
        case DELETE_STUDENT:
            return action.payload;
        default:
            return state;
    }
};

export const deleteResponse = (state = {}, action) => {
    switch(action.type){
        case DELETE_RESPONSE:
            return action.payload;
        default:
            return state;
    }
};