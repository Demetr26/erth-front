import React, {useEffect, useState} from 'react';
import {dateRange} from "../../utils";
import DateComponent from "./dateComponent";
import History from "../History";
import {useDispatch, useSelector} from "react-redux";
import {changeFormParams} from "./redux/actions";
import PackageComponent from "./packageComponent";
import CategoryComponent from "./categoryComponent";
import GenreComponent from "./genreComponent";
import {useLocation,useHistory} from 'react-router-dom'

const SearchForm = (props) => {
    const datesBefore = dateRange(-3);
    const datesAfter = dateRange(3);
    const today = new Date().toISOString().slice(0,10)
    const isNow = false
    const isToday = false
    const dispatch = useDispatch()
    const storeForm = useSelector( state => state.form)
    const [form, setForm] = useState(storeForm.params)
    const location = useLocation()
    const history = useHistory()

    useEffect(() => {},[])

    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleChangeDate = e => {
       const date = e.target.getAttribute('data-date')
       const period = e.target.getAttribute('data-period')
       const params = new URLSearchParams(location.search);
       params.set('date', date)
       params.set('period', period)
       history.push('?'+params.toString())
       setForm({...form, date: date, period: period})
       dispatch(changeFormParams({date: date, period: period}))
    }

    const handleChangeParam = e => {
        const name = e.target.name
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setForm({...form, [name]: value})
        const params = new URLSearchParams(location.search);
        params.set(name, value)
        history.push('?'+params.toString())
        dispatch(changeFormParams({[name]:value}))
    }

    return (
        <>
            <h2 className="my-4">Телепрограмма</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mb-4">
                    <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <div className='position-relative'>
                            <i className='bi bi-search input__left-icon'/>
                            <input type="text" name="q" id="search-text" placeholder="Поиск по телепрограмме"
                                   className="form-control icon-left icon-right" onKeyPress={(e) => {
                                if(e.key === 'Enter'){
                                    handleChangeParam(e)
                                }
                            }}/>
                            <i className='bi bi-arrow-right-circle input__right-icon' />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" checked={form.is_hd} name="is_hd" id="flexSwitchCheckDefault" onChange={handleChangeParam}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{cursor: 'pointer'}}>Только HD-каналы</label>
                        </div>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <PackageComponent />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <CategoryComponent />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className='row'>
                            <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
                                <GenreComponent />
                            </div>
                            <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                                <button type="button" className="btn btn-white"><i className="bi bi-x-circle-fill"/>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row mb-2'>
                    <div className="d-grid gap-2 d-md-block schedule__timeline">
                        {datesBefore.map( date => {
                            let active = date.long === form.date
                            return <DateComponent key={date.long}
                                                  className="schedule__timeline__item schedule__timeline__item-past"
                                                  active={active}
                                                  period="allDay"
                                                  short={date.short}
                                                  long={date.long}
                                                  onClick={handleChangeDate}
                                    />;
                        })}
                        <button type="button" data-date={today} data-period="now" className="btn btn-link schedule__timeline__item active" onClick={handleChangeDate}>Сейчас</button>
                        <button type="button" data-date={today} data-period="allDay" className="btn btn-link schedule__timeline__item" onClick={handleChangeDate}>Сегодня</button>
                        {datesAfter.map( date => {
                            let active = date.long === form.date
                            return <DateComponent key={date.long}
                                                  active={active}
                                                  className="schedule__timeline__item schedule__timeline__item-future"
                                                  period="allDay"
                                                  short={date.short}
                                                  long={date.long}
                                                  onClick={handleChangeDate}
                                    />;
                        })}
                    </div>
                </div>
            </form>
        </>
    )
};

export default SearchForm;
