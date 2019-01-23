import { GET_STUDENTS_VALIDATION, SET_STUDENTS_VALIDATION, GET_FORMOPTIONS_DATA, SEARCH_STUDENTS_VALIDATION } from '../actions';

export const validationOptionsData = ( state = {}, action) => {
    switch(action.type){
        case GET_FORMOPTIONS_DATA:
            return action.payload;
        default:
            return state;
    }
};

export const validationStudentsData = ( state = {}, action) => {
    switch(action.type){
        case GET_STUDENTS_VALIDATION:
            return action.payload;
        default:
            return state;
    }
}

export const searchStudentsValidation = ( state = {}, action) => {
    switch(action.type){
        case SEARCH_STUDENTS_VALIDATION:
            return action.payload;
        default:
            return state;
    }
}

export const sentStudentsValidation = ( state = {}, action ) => {
    switch(action.type){
        case SET_STUDENTS_VALIDATION:
            return action.payload;
        default:
            return state;
    }
};