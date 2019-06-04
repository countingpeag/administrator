import { SEARCH_TEACHER_NAME, UPDATE_TEACHER_DATA, SEARCH_TEACHER_REQUEST } from '../actions';

export const teacherInfo = (state = {}, action) => {
    switch(action.type){
        case SEARCH_TEACHER_NAME:
            return action.payload;
        default:
            return state;
    }
};

export const teacherSearchRequest = (state = {}, action) => {
    switch(action.type){
        case SEARCH_TEACHER_REQUEST:
            return action.payload;
        default:
            return state;
    }
};

export const updateTeacher = (state = {}, action) => {
    switch(action.type){
        case UPDATE_TEACHER_DATA:
            return action.payload;
        default:
            return state;
    }
};
