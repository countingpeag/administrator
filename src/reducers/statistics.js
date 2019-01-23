import { GET_STATISTIC_DATA, SET_STATISTIC_DATA } from '../actions/index';

export const statisticsData = (state = {} , action) => {
    switch(action.type){
        case SET_STATISTIC_DATA:
            return action.payload;
        default:
            return state;
    }
}

export const statisticsRequest = (state = {} , action) => {
    switch(action.type){
        case GET_STATISTIC_DATA:
            return action.payload;
        default:
            return state;
    }
}