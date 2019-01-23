import { SAVE_NEWS, DELETE_NEWS, UPDATE_NEWS, GET_NEWS } from '../actions';

export const getNews = (state = {}, action) => {
    switch(action.type){
        case GET_NEWS:
            return action.payload;
        default:
            return state;
    }
}

export const saveNews = (state = {}, action) => {
    switch(action.type){
        case SAVE_NEWS:
            return action.payload;
        default:
            return state;
    }
}

export const deleteNews = (state = {}, action) => {
    switch(action.type){
        case DELETE_NEWS:
            return action.payload;
        default:
            return state;
    }
}

export const updateNews = (state = {}, action) => {
    switch(action.type){
        case UPDATE_NEWS:
            return action.payload;
        default:
            return state;
    }
}