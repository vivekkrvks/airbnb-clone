import React, {useState} from 'react'
import './Search.css'
import "react-date-range/dist/styles.css"  // main style file
import "react-date-range/dist/theme/default.css"
import {DateRangePicker} from "react-date-range";
import PeopleIcon from '@material-ui/icons/People';
import { Input } from '@material-ui/core';

//Date Picker Component
function Search() {
    const [startDate, setStartDate] = useState(new Date()) ;
    const [endDate, setEndDate] = useState(new Date()) ;

    const selectionRange = {
        startDate:startDate,
        endDate:endDate,
        key:"selection"
    };
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate( ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
            <h2>
            Number of guests
            </h2>
            <PeopleIcon />
            <Input min={0}
            defaultValue={2}
            type="number"
            />
            </div>
    )
}

export default Search
