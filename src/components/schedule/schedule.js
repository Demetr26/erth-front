import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadSchedule} from "./redux/actions";
import ScheduleItem from "./scheduleItem";

const Schedule = (props) => {
    const {loading, has_error, schedule} = useSelector( state => state.schedule)
    const [showSchedule,setShowSchedule] = useState([])
    const searchForm = useSelector( state => state.form.params)
    const errorBlock = !has_error ? ' d-none' : '';
    const dispatch = useDispatch();

    useMemo(() => {
        dispatch(loadSchedule(searchForm))
    },[searchForm.date, searchForm.categories, searchForm.packages])

    useMemo(() => {
        let sh = schedule
        if(searchForm.is_hd)
            sh = sh.filter( item => item.is_hd === '1')
        setShowSchedule(sh)
    },[schedule, searchForm.is_hd])

    return loading ?
        <div className='row row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-xl-3 mt-4'>
            Загрузка данных
        </div>
        :
        <>
            <div className={"alert alert-danger" + errorBlock} role="alert">
                Произошла ошибка при загрузке данных. Повторить?
            </div>
            <div className='row row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-xl-3 mt-4'>
                {showSchedule.map(item => <ScheduleItem key={item.id} item={item}/>)}
            </div>
        </>

}

export default Schedule;
