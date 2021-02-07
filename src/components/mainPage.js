import React from 'react';
import SearchForm from "./form";
import Schedule from "./schedule/schedule";

const MainPage = (props) => (
    <div className='container'>
        <SearchForm />
        <Schedule />
    </div>
);

export default MainPage;
