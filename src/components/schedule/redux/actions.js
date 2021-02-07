import {
    SCHEDULE_LOAD_PROGRAM_SUCCESS,
    SCHEDULE_START_LOAD_PROGRAM
} from "../../../redux/types";

export function loadSchedule(){
    return async dispatch => {
        dispatch({type: SCHEDULE_START_LOAD_PROGRAM})
        const response = await fetch('http://localhost:8010/api/programm/find');
        const json = await response.json()
        dispatch({
            type: SCHEDULE_LOAD_PROGRAM_SUCCESS,
            payload: json.data
        })
    }
}
