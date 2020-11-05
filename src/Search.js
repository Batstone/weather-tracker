import React, { useState } from 'react';
import Weather from './Weather.js'

const Test = () => {
    const [search, setSearch] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()

        const text = e.target.elements.text.value
        setSearch(text)

        e.target.elements.text.value = ''
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <input type='text' name='text'></input>
                <button>Search</button>
                {search !== '' && <Weather searchText={search} />}
            </form>
        </div>
    )
}

export default Test