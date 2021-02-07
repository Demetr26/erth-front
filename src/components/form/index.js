import React from 'react';
import {dateRange} from "../../utils";
import DateComponent from "./dateComponent";

const SearchForm = (props) => {
    const datesBefore = dateRange(-3);
    const datesAfter = dateRange(3);
    const today = new Date().toISOString().slice(0,10)

    return (
        <>
            <h2>Телепрограмма</h2>
            <form>
                <div className="row mb-2">
                    <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <input type="text" name="textSearch" id="search-text" placeholder="Поиск по телепрограмме"
                               className="form-control"/>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Только
                                HD-каналы</label>
                        </div>
                    </div>
                </div>
                <div className='row mb-2'>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <select name='package' id='package' className='form-select'>
                            <option key="0" value="">Пакеты каналов</option>
                            <option key="1" value="1">Коммутатор</option>
                            <option key="2" value="2">Конвертер</option>
                            <option key="3" value="3">Wifi</option>
                        </select>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <select name='categories' id='categories' className='form-select'>
                            <option key="0" value="">Категории каналов</option>
                            <option key="1" value="1">Коммутатор</option>
                            <option key="2" value="2">Конвертер</option>
                            <option key="3" value="3">Wifi</option>
                        </select>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className='row'>
                            <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
                                <select name='genres' id='genres' className='form-select'>
                                    <option key="0" value="">Жанры передач</option>
                                    <option key="1" value="1">Коммутатор</option>
                                    <option key="2" value="2">Конвертер</option>
                                    <option key="3" value="3">Wifi</option>
                                </select>
                            </div>
                            <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                                <button type="button" className="btn btn-light"><i className="bi bi-x-circle-fill"/>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row mb-2'>
                    <div className="d-grid gap-2 d-md-block">
                        {datesBefore.map( date => {
                            return <DateComponent key={date.long} short={date.short} long={date.long} />;
                        })}
                        <button type="button" data-date="now" className="btn btn-link">Сейчас</button>
                        <button type="button" data-date={today} className="btn btn-link">Сегодня</button>
                        {datesAfter.map( date => {
                            return <DateComponent key={date.long} short={date.short} long={date.long} />;
                        })}
                    </div>
                </div>
            </form>
        </>
    )
};

export default SearchForm;
