import { SEARCH_TEACHER_NAME, GET_SPECIALITIES_INFO, GET_SUBJECTS_INFO, SUBMIT_TEACHER_DATA } from '../actions';

export const teacherInfo = (state = {}, action) => {
    switch(action.type){
        case SEARCH_TEACHER_NAME:
            return action.payload;
        default:
            return state;
    }
};