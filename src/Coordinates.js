import React, { useEffect, useState } from 'react';
import Weather from './Weather.js'


const Coordinates = (props) => {

    const [search, updateSearch] = useState(props.searchText)
    const [locationCoordinates, updateLocationCoordinates] = useState('')

    useEffect(() => {

        updateLocationCoordinates('')

        const key = '04d384a1bafb46ecaeb07b4ab49c647c'

        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${search}&key=${key}`)
            .then(res => res.json())
            .then((data) => {

                const geometry = data.results[0].geometry

                updateLocationCoordinates(geometry)
            })
    }, [search])

    return (
        <div>
            <h1>Coordinates</h1>
            {locationCoordinates !== '' && <Weather locationCoordinates={locationCoordinates} />}
        </div>
    )
}


export default Coordinates