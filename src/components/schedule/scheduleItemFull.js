import React from 'react';

const ScheduleItemFull = ({item, itemRef, setShowDropDown}) => (
    <div className='schedule__channel active' ref={itemRef}>
        <div className="d-flex flex-row bd-highlight mb-2">
            <div className="p-2 bd-highlight"><img src={item.logo} alt={item.title} className="schedule__channel-logo"/></div>
            <div className="p-2 bd-highlight">{item.title}</div>
        </div>
        <div className="schedule__items scrollable">
            <div className="schedule__items__full-block">
                <div className="schedule__items__full-block__wrapper">
                    {item.items.map(item => {
                        const timeStart = item.time_start.split(' ').pop().split(':').slice(0,2).join(':')
                        return (
                            <div className="d-flex flex-row bd-highlight mb-1" data-time="timeStart"
                                 key={item.id}>
                                <div className="bd-highlight">{timeStart}</div>
                                <div className="px-2 bd-highlight">{item.title}</div>
                            </div>)
                    })}
                </div>
                <div className="schedule__items__full-block__close py-4" onClick={(e) => {
                    e.stopPropagation();
                    setShowDropDown(false)
                }
                }>Свернуть<i className="bi bi-chevron-up ps-2"/>
                </div>
            </div>
        </div>
    </div>
);

export default ScheduleItemFull;
