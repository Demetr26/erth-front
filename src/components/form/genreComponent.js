import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadGenres} from "./redux/actions";

const GenreComponent = () => {
    const dispatch = useDispatch()
    const genres = useSelector( state => state.form.genres)

    useEffect(() => {
        dispatch(loadGenres())
    },[])

    return (
        <select name='genres' id='genres' className='form-select'>
            <option key="0" value="">Жанры передач</option>
            {genres.map( item => <option key={item.id} value={item.id}>{item.title}</option>)}
        </select>
    )
};

export default GenreComponent;