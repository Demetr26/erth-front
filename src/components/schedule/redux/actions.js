import {
    SCHEDULE_LOAD_PROGRAM_ERROR,
    SCHEDULE_LOAD_PROGRAM_SUCCESS,
    SCHEDULE_START_LOAD_PROGRAM
} from "../../../redux/types";

export function loadSchedule(searchForm){
    return async dispatch => {
        dispatch({type: SCHEDULE_START_LOAD_PROGRAM})
        const queryString = new URLSearchParams(searchForm).toString();
        const response = await fetch('http://localhost:8010/api/programm/find?'+queryString).catch(e => handleError(dispatch));
        const json = await response.json()
        dispatch({
            type: SCHEDULE_LOAD_PROGRAM_SUCCESS,
            payload: json.data
        })
    }
}

function handleError(dispatch){
    dispatch({type: SCHEDULE_LOAD_PROGRAM_ERROR})
}