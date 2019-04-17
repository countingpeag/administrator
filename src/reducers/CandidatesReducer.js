import { GET_CANDIDATES } from '../actions';

export const candidatesData = (state = {}, action) => {
    switch(action.type){
        case GET_CANDIDATES:
            return action.payload;
        default:
            return state;
    }
};