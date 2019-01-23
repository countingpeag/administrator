import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

export const login = (state = {}, action) => {
    switch(action.type){
        case LOGIN:
            return action.payload;
        default:
            return state;
    }
};

export const loginFailure = (state = {}, action) => {
    switch(action.type){
        case LOGIN_FAILURE:
            return action.payload;
        default:
            return state;
    }
};

export const loginSuccess = (state = {}, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};