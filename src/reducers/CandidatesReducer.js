import { GET_CANDIDATES, GET_CANDIDATES_SELECTED, GET_CANDIDATES_SELECTED_REQUEST, UPDATE_CANDIDATE_SELECTION } from '../actions';

export const candidatesData = (state = {}, action) => {
    switch(action.type){
        case GET_CANDIDATES:
            return action.payload;
        default:
            return state;
    }
};

export const candidatesSelected = (state = {}, action) => {
    switch(action.type){
        case GET_CANDIDATES_SELECTED:
            return action.payload;
        default:
            return state;
    }
};

export const candidateSelectionRequest = (state = {}, action) => {
    switch(action.type){
        case GET_CANDIDATES_SELECTED_REQUEST:
            return action.payload;
        default:
            return state;
    }
};

export const updateCandidatesSelection = (state = {}, action) => {
    switch(action.type){
        case UPDATE_CANDIDATE_SELECTION:
            return action.payload;
        default:
            return state;
    }
};