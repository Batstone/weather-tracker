import React, { useState } from 'react';
import APIData from './APIData.js'

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
        <div>
            <form onSubmit={formSubmit}>
                <input type='text' name='text'></input>
                <button>Search</button>
                {search !== '' && <APIData searchText={search} />}
            </form>
        </div>
    )
}

export default Search