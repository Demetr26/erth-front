import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadPackages} from "./redux/actions";

const PackageComponent = () => {
    const dispatch = useDispatch()
    const packages = useSelector( state => state.form.packages)

    useEffect(() => {
        dispatch(loadPackages())
    },[])

    return (
        <select name='package' id='package' className='form-select' multiple>
            <option key="0" value="">Пакеты каналов</option>
            {packages.map( item => <option key={item.id} value={item.id}>{item.title}</option>)}
        </select>
    )
};

export default PackageComponent;