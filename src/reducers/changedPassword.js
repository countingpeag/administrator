import { CHANGED_PASSWORD, WILL_CHANGE_PASSWORD } from '../actions';

export const changedPassword = (state = {}, action) => {
    switch(action.type){
        case CHANGED_PASSWORD:
            return action.payload;
        default:
            return state;
    }
};

export const willChangePassword = (state = {}, action) => {
    switch(action.type){
        case WILL_CHANGE_PASSWORD:
            return action.payload;
        default:
            return state;
    }
};