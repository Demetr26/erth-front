import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeFormParams, loadPackages} from "./redux/actions";
import {useHistory, useLocation} from "react-router-dom";
import MultiSelect from "react-multi-select-component";

const PackageComponent = () => {
    const dispatch = useDispatch()
    const packages = useSelector( state => state.form.packages)
    const [options, setOptions] = useState([])
    const [selected, setSelected] = useState([])
    const i18n = {
        "selectSomeItems": "Пакеты каналов",
        "allItemsAreSelected": "Выбраны все пакеты",
        "selectAll": "Выбрать все"
    }
    const location = useLocation()
    const history = useHistory()

    useEffect(() => {
        dispatch(loadPackages())
    },[])

    useEffect(() => {
        setOptions(packages.map( item => ({label: item.title, value: item.id})))
    },[packages])

    const handleChangeParam = values => {
        setSelected(values)
        const params = new URLSearchParams(location.search);
        params.delete("packages");
        values.forEach( item => {
            params.append('packages', item.value)
        })
        history.push('?'+params.toString())
        dispatch(changeFormParams({packages:values.map( item => item.value)}))
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

export default PackageComponent;
