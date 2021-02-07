import {FORM_CHANGE_PARAM, FORM_CLEAR_SEARCH} from "../../../redux/types";

const initialState = {
    params: {
        is_hd: '',
    }
}

export const formReducer = ( state = initialState, action) => {
    switch(action.type){
        case FORM_CHANGE_PARAM:
            return {...state, params: {...state.params, ...action.payload }};
        case FORM_CLEAR_SEARCH:
            return initialState;
        default:
            return state;
    }
}
