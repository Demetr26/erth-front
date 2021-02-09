import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const ScheduleItem = ({item}) => {
    const location = useLocation()
    const formParams = useSelector( state => state.form.params)
    const [showItems, setShowItems] = useState([])
    const [showDropDown, setShowDropDown] = useState(false)

    useMemo(() => {
        let items = item.items
        if(formParams.period === 'now'){
            const now = new Date()
            items = items
                .filter( item => item.time_end.split(' ').pop() > now.getHours()+':'+now.getMinutes()+':00')
                .slice(0,5)
        }
        if(formParams.q !== ''){
            items = items.filter(item => item.title.toLowerCase().indexOf(formParams.q.toLowerCase()) !== -1)
        }
        setShowItems(items)
    },[formParams.period, formParams.q])



    return <>
        {showItems.length !== 0 &&
                <div className='row mb-4'>
                    <div className="d-flex flex-row bd-highlight mb-2">
                        <div className="p-2 bd-highlight">Logo</div>
                        <div className="p-2 bd-highlight">{item.title}</div>
                    </div>
                    <div className="schedule__items" onClick={(e) => {
                        setShowDropDown(true)
                    }}>
                        {showDropDown && formParams.period === 'now' && <div className="schedule__items__full-block">
                            <div className="schedule__items__full-block__wrapper">
                                {item.items.map(item => {
                                    const timeStart = item.time_start.split(' ').pop()
                                    return (
                                        <div className="d-flex flex-row bd-highlight mb-1" data-time="timeStart"
                                             key={item.id}>
                                            <div className="bd-highlight">{timeStart}</div>
                                            <div className="px-2 bd-highlight">{item.title}</div>
                                        </div>)
                                })}
                            </div>
                            <div className="schedule__items__full-block__close" onClick={(e) => {
                                e.stopPropagation();
                                setShowDropDown(false)
                            }
                            }>Свернуть
                            </div>
                        </div>}
                        <div className="schedule__items__short-block">
                            {showItems.map(item => {
                                const timeStart = item.time_start.split(' ').pop()
                                return (
                                    <div className="d-flex flex-row bd-highlight mb-1" key={item.id}>
                                        <div className="bd-highlight">{timeStart}</div>
                                        <div className="px-2 bd-highlight">{item.title}</div>
                                    </div>)
                            })}
                        </div>
                    </div>
                </div>
        }
        </>
}

export default ScheduleItem;
