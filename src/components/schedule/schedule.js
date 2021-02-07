import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadSchedule} from "./redux/actions";
import ScheduleItem from "./scheduleItem";

const Schedule = (props) => {
    const {loading, has_error, schedule} = useSelector( state => state.schedule)
    const errorBlock = !has_error ? ' d-none' : '';
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadSchedule())
    },[])


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
                {schedule.map(item => <ScheduleItem key={item.id} item={item}/>)}
            </div>
        </>

}

export default Schedule;
