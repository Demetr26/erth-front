import {
    FORM_CHANGE_PARAM,
    FORM_CLEAR_SEARCH,
    FORM_LOAD_CATEGORIES,
    FORM_LOAD_GENRES,
    FORM_LOAD_PACKAGES
} from "../../../redux/types";

const initialState = {
    params: {
        q: '',
        is_hd: false,
        date: new Date().toISOString().slice(0,10),
        period: 'now',
        genres: [],
        categories: [],
        packages: []
    },
    packages: [],
    categories: [],
    genres: []
}

export const formReducer = ( state = initialState, action) => {
    switch(action.type){
        case FORM_CHANGE_PARAM:
            return {...state, params: {...state.params, ...action.payload }};
        case FORM_LOAD_PACKAGES:
            return {...state, packages: action.payload}
        case FORM_LOAD_CATEGORIES:
            return {...state, categories: action.payload}
        case FORM_LOAD_GENRES:
            return {...state, genres: action.payload}
        case FORM_CLEAR_SEARCH:
            return {...state, params: initialState.params};
        default:
            return state;
    }
}
