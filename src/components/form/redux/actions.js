import {
    FORM_CHANGE_PARAM,
    FORM_CLEAR_SEARCH,
    FORM_LOAD_CATEGORIES,
    FORM_LOAD_GENRES,
    FORM_LOAD_PACKAGES
} from "../../../redux/types";
import appConfig from "../../../../config";

export function changeFormParams( params ){
    return {
        type: FORM_CHANGE_PARAM,
        payload: params
    }
}

export function loadPackages(){
    return async dispatch => {
        const data = await fetch(appConfig.apiHost+'/api/packages')
        const json = await data.json()
        console.log(json)
        dispatch({
            type: FORM_LOAD_PACKAGES,
            payload: json.data
        })
    }
}

export function loadCategories(){
    return async dispatch => {
        const data = await fetch(appConfig.apiHost+'/api/categories')
        const json = await data.json()
        console.log(json)
        dispatch({
            type: FORM_LOAD_CATEGORIES,
            payload: json.data
        })
    }
}

export function loadGenres(){
    return async dispatch => {
        const data = await fetch(appConfig.apiHost+'/api/genres')
        const json = await data.json()
        console.log(json)
        dispatch({
            type: FORM_LOAD_GENRES,
            payload: json.data
        })
    }
}

export function clearFormData(){
    return {
        type: FORM_CLEAR_SEARCH
    }
}
