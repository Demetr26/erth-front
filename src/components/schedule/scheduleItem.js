import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import ScheduleItemFull from "./scheduleItemFull";


const ScheduleItem = ({item}) => {
    const location = useLocation()
    const formParams = useSelector( state => state.form.params)
    const formGenres = useSelector( state => state.form.genres)
    const [showItems, setShowItems] = useState([])
    const [showDropDown, setShowDropDown] = useState(false)
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowDropDown(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

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

    const renderItems = showDropDown ? <ScheduleItemFull item={item} itemRef={wrapperRef} setShowDropDown={setShowDropDown} /> :
        <div className={'schedule__channel ' + (showDropDown ? ' active': '')}>
            <div className="d-flex flex-row bd-highlight mb-2">
                <div className="p-2 bd-highlight"><img src={item.logo} alt={item.title} className="schedule__channel-logo"/></div>
                <div className="p-2 bd-highlight">{item.title}</div>
            </div>
            <div className="schedule__items" onClick={(e) => {
                if(formParams.period === 'now')
                    setShowDropDown(true)
            }}>
                <div className="schedule__items__short-block">
                    {showItems.map(item => {
                        const timeStart = item.time_start.split(' ').pop().split(':').slice(0,2).join(':')
                        let styles = {}
                        let genreId = formParams.genres.find(element => element === item.genre_id)
                        if(genreId  !== undefined)
                            styles = {backgroundColor: formGenres.filter(genre => genre.id === genreId).pop().color}
                        return (
                            <div className="d-flex flex-row bd-highlight mb-1" style={styles} key={item.id}>
                                <div className="bd-highlight">{timeStart}</div>
                                <div className="px-2 bd-highlight">{item.title}</div>
                            </div>)
                    })}
                </div>
            </div>
        </div>

    return <>
        {showItems.length !== 0 &&
        <div className="row mb-4 position-relative">
            {renderItems}
        </div>
        }
        </>
}

export default ScheduleItem;
