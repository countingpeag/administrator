import { SEARCH_TEACHER_NAME, UPDATE_TEACHER_DATA, SEARCH_TEACHER_REQUEST, UPDATE_TEACHER_REQUEST, SAVE_TEACHER, SAVE_TEACHER_REQUEST } from '../actions';

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

export const teacherUpdated = (state = {}, action) => {
    switch(action.type){
        case UPDATE_TEACHER_DATA:
            return action.payload;
        default:
            return state;
    }
};

export const updateTeacherRequest = (state = {}, action) => {
    switch(action.type){
        case UPDATE_TEACHER_REQUEST:
            return action.payload;
        default:
            return state;
    }
};

export const teacherSaved = (state = {}, action) => {
    switch(action.type){
        case SAVE_TEACHER:
            return action.payload;
        default:
            return state;
    }
};

export const saveTeacherRequest = (state = {}, action) => {
    switch(action.type){
        case SAVE_TEACHER_REQUEST:
            return action.payload;
        default:
            return state;
    }
};