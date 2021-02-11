import React from 'react';

const DateComponent = ({onClick, long, short, period, className, active}) => (
    <button type="button" key={long} data-date={long} className={"btn btn-link "+className+( active ? ' active' : '')} onClick={onClick} data-period={period}>{short}</button>
)

export default DateComponent;
