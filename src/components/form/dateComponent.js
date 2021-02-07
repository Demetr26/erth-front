import React from 'react';

const DateComponent = ({long, short}) => (
    <button type="button" key={long} data-date={long} className="btn btn-link">{short}</button>
)

export default DateComponent;
