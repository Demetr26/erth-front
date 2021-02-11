import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeFormParams, loadGenres} from "./redux/actions";
import {useHistory, useLocation} from "react-router-dom";
import MultiSelect from "react-multi-select-component";

const GenreComponent = () => {
    const dispatch = useDispatch()
    const genres = useSelector( state => state.form.genres)
    const [options, setOptions] = useState([])
    const [selected, setSelected] = useState([])
    const i18n = {
        "selectSomeItems": "Жанры передач",
        "allItemsAreSelected": "Выбраны все жанры",
        "selectAll": "Выбрать все"
    }
    const location = useLocation()
    const history = useHistory()

    useEffect(() => {
        dispatch(loadGenres())
    },[])

    useEffect(() => {
        setOptions(genres.map( item => ({
            label: item.title,
            value: item.id,
            color: item.color,
        })))
    },[genres])

    const handleChangeParam = values => {
        setSelected(values)
        const params = new URLSearchParams(location.search);
        params.delete("genres");
        values.forEach( item => {
            params.append('genres', item.value)
        })
        history.push('?'+params.toString())
        dispatch(changeFormParams({genres:values.map( value => value.value)}))
    }

    return (
        <MultiSelect
            options={options}
            value={selected}
            onChange={handleChangeParam}
            labelledBy={"Select"}
            disableSearch={"true"}
            overrideStrings={i18n}
            ItemRenderer={({
                checked,
                option,
                onClick,
                disabled,
            }) => (
                <div className={"item-renderer" + (disabled && " disabled")} >
                    <input
                        type="checkbox"
                        onChange={onClick}
                        checked={checked}
                        tabIndex={-1}
                        disabled={disabled}
                        style={{verticalAlign: 'center', margin: '0'}}
                    />
                    <span style={{
                        display: 'inline-block',
                        paddingLeft: '5px',
                        verticalAlign: 'center',
                        margin: '0'
                    }}>
                        {option.label} {option.value !== '' && <i className="bi bi-square-fill" style={{color: option.color}} />}
                    </span>
                </div>
            )}
            valueRenderer = {(selected, _options) => {
                return selected.length
                ? selected.map(({ label, color }) => {
                    return <span className="ms-1"> {label} <i className="bi bi-square-fill" style={{color: color}} /></span>
                        })
                : "Жанры передач";
                }
            }
        />
    )
}

export default GenreComponent;
