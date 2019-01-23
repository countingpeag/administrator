import { GET_DATA } from '../actions';

export const StatisticsformData = (state = {}, action) => {
    switch(action.type){
        case GET_DATA:
            return action.payload;
        default:
            return state;
    }
}