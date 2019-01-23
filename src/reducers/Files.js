import { SAVE_FILES, SEND_FILES } from '../actions';

export const fileResponse = (state={}, action) => {
        switch(action.type){
            case SAVE_FILES:
                return action.payload;
            default: 
                return state;
        }
}

export const fileRequest = (state={}, action) => {
    switch(action.type){
        case SEND_FILES:
            return action.payload;
        default: 
            return state;
    }
};