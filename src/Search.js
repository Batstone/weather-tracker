import React, { useState } from 'react';
import APIData from './APIData.js'

// Search form that takes user input as query to API call
const Search = () => {
    const [search, setSearch] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()

        setSearch('')

        const text = e.target.elements.text.value
        setSearch(text)

        e.target.elements.text.value = ''
    }

    return (
        <section>
            <div className="wrapper">
                <div className="search-container">
                    <form onSubmit={formSubmit}>
                        <label>Search for your location.</label>
                        <input type='text' name='text' placeholder="Enter a location"></input>
                        <button>Search</button>
                    </form>
                </div>
                {search !== '' && <APIData searchText={search} />}
            </div>
        </section>
    )
}

export default Search