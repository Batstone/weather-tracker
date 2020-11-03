import React, { useState } from 'react';
import Weather from './Weather.js'

const Test = () => {
    const [search, setSearch] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()
    }

    const searchText = (e) => {
        setSearch(e.target.value)
    }


    return (
        <div>
            <form onSubmit={formSubmit}>
                <input type='text' onChange={searchText}></input>
                <button>Search</button>
                <Weather />
            </form>
        </div>
    )
}

export default Test