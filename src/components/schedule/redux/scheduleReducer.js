import {
SCHEDULE_LOAD_PROGRAM_ERROR, SCHEDULE_LOAD_PROGRAM_SUCCESS, SCHEDULE_SHOW_PROGRAM, SCHEDULE_START_LOAD_PROGRAM
} from "../../../redux/types";


const initialState = {
    is_loaded: false,
    loading: false,
    has_error: false,
    channels: [],
    schedule: [],
    shown_schedule: []
}

export const scheduleReducer = ( state = initialState, action) => {
    switch(action.type){
        case SCHEDULE_START_LOAD_PROGRAM:
            return {...state, loading: true}
        case SCHEDULE_LOAD_PROGRAM_SUCCESS:
            return {...state, loading: false, is_loaded: true, has_error: false, schedule: action.payload}
        case SCHEDULE_LOAD_PROGRAM_ERROR:
            return {...state, loading: false, is_loaded: false, has_error: true}
        case SCHEDULE_SHOW_PROGRAM:
            return state
        default:
            return state
    }
}
