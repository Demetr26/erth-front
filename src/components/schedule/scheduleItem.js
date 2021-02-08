import React from 'react';

const ScheduleItem = ({item}) => {
    return (
        <div className='row mb-4'>
            <div className="d-flex flex-row bd-highlight mb-2">
                <div className="p-2 bd-highlight">Logo</div>
                <div className="p-2 bd-highlight">{item.title}</div>
            </div>
            {item.items.map( item => {
                const timeStart = item.time_start.split(' ').pop()
                return (
                <div className="d-flex flex-row bd-highlight mb-1" key={item.id}>
                    <div className="bd-highlight">{timeStart}</div>
                    <div className="px-2 bd-highlight">{item.title}</div>
                </div> )
            })}
        </div>
    )
}

export default ScheduleItem;
