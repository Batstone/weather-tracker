import React, { useState } from 'react';
import APIData from './APIData.js'

// Search form that takes user input as query to API call
const Search = () => {
    const [search, setSearch] = useState('')
    const [value, setValue] = useState('')

    const onInputChange = (e) => {

        setValue(e.target.value)
    }

    const formSubmit = (e) => {

        setSearch('')
        e.preventDefault()


        const text = value
        setSearch(text)

        console.log(text)

        e.target.elements.text.value = ''
        setValue('')
    }

    return (
        <section>
            <div className="wrapper">
                <div className="search-container">
                    <form onSubmit={formSubmit}>
                        <label>Search for your location.</label>
                        <input type='text' name='text' placeholder="Enter a location" onChange={onInputChange}></input>
                        <button>Search</button>
                    </form>
                </div>
                {search !== '' && <APIData searchText={search} />}
            </div>
        </section>
    )
}

export default Search