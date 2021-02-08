import React from 'react';

const DateComponent = ({onClick, long, short, period}) => (
    <button type="button" key={long} data-date={long} className="btn btn-link" onClick={onClick} data-period={period}>{short}</button>
)

export default DateComponent;
