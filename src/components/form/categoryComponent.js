import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeFormParams, loadCategories} from "./redux/actions";
import MultiSelect from "react-multi-select-component";
import {useHistory, useLocation} from "react-router-dom";


const CategoryComponent = (props) => {
    const dispatch = useDispatch()
    const categories = useSelector( state => state.form.categories)
    const [options, setOptions] = useState([])
    const [selected, setSelected] = useState([])
    const i18n = {
        "selectSomeItems": "Категории каналов",
        "allItemsAreSelected": "Выбраны все категории",
        "selectAll": "Выбрать все"
    }
    const location = useLocation()
    const history = useHistory()

    useEffect(() => {
        dispatch(loadCategories())
    },[])

    useEffect(() => {
        setOptions(categories.map( item => ({label: item.title, value: item.id})))
    },[categories])

    const handleChangeParam = values => {
        setSelected(values)
        const params = new URLSearchParams(location.search);
        params.delete("categories");
        values.forEach( item => {
            params.append('categories', item.value)
        })
        history.push('?'+params.toString())
        dispatch(changeFormParams({categories:values.map( value => value.value )}))
    }

    return (
        <MultiSelect
            options={options}
            value={selected}
            onChange={handleChangeParam}
            labelledBy={"Select"}
            disableSearch={"true"}
            overrideStrings={i18n}
        />
    )
}

export default CategoryComponent;
