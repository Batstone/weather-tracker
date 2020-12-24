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
        <>
            <section className="search">
                <div className="search-container">
                    <div className="wrapper">
                        <form onSubmit={formSubmit}>
                            <label className="sr-only">Search for your location.</label>
                            <input type='text' name='text' placeholder="Enter a location" onChange={onInputChange}></input>
                            <button>Search</button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="search-data">
                <div className="wrapper">
                    {search !== '' && <APIData searchText={search} />}
                </div>
            </section>
        </>


    )
}

export default Search