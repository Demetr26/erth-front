import {combineReducers} from "redux";
import {formReducer} from "../components/form/redux/formReducer";
import {scheduleReducer} from "../components/schedule/redux/scheduleReducer";


export const rootReducer = combineReducers({
    form: formReducer,
    schedule: scheduleReducer
})
