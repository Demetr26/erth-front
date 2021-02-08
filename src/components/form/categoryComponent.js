import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadCategories} from "./redux/actions";

const CategoryComponent = () => {
    const dispatch = useDispatch()
    const categories = useSelector( state => state.form.categories)

    useEffect(() => {
        dispatch(loadCategories())
    },[])

    return (
        <select name='categories' id='categories' className='form-select'>
            <option key="0" value="">Категории каналов</option>
            {categories.map( item => <option key={item.id} value={item.id}>{item.title}</option>)}
        </select>
    )
};

export default CategoryComponent;