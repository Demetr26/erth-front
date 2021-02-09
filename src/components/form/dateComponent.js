import React from 'react';

const DateComponent = ({onClick, long, short, period, className}) => (
    <button type="button" key={long} data-date={long} className={"btn btn-link "+className} onClick={onClick} data-period={period}>{short}</button>
)

export default DateComponent;
