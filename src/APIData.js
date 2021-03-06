import React, { useEffect, useState } from 'react';
import SearchModal from './SearchModal';
import Weather from './Weather.js';
import HourlyForecast from './HourlyForecast.js';
import DailyForecast from './DailyForecast.js';

const ApiData = (props) => {

    const [search, updateSearch] = useState(props.searchText)
    const [locationOptions, updateLocationOptions] = useState(null)
    const [locationCoordinates, updateLocationCoordinates] = useState(null)
    const [location, updateLocation] = useState(null)
    const [weatherData, updateWeatherData] = useState(null)

    useEffect(() => {
        updateSearch(props.searchText)
    }, [props.searchText])

    useEffect(() => {
        updateWeatherData(null)

        const key1 = '04d384a1bafb46ecaeb07b4ab49c647c'

        // API for getting users coordinates
        const getCoordinatesData = async () => {
            const call = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${search}&key=${key1}`)

            if (call.status === 200) {
                const res = await call.json()
                updateLocationOptions(res.results)
            } else {
                throw new Error('Unable to get Coordinates Data')
            }
        }

        getCoordinatesData()
    }, [search])

    // This function is passed to the SearchModal as a prop
    const locationSelection = (location) => {
        updateLocationCoordinates(location.geometry)
        updateLocation(location.formatted)
    }

    useEffect(() => {
        console.log(search)
        console.log(props.searchText)

        const key2 = 'b259026e161c31f0587ed82e488b63f5'

        // Using the coordinates data to search for a specific city/location
        const getLocationData = async () => {
            if (locationCoordinates) {

                const call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationCoordinates.lat}&lon=${locationCoordinates.lng}&exclude={part}&appid=${key2}`)
                if (call.status === 200) {
                    const res = await call.json()
                    updateWeatherData(res)
                } else {
                    throw new Error('Unable to fetch location data')
                }
            }
        }
        getLocationData()
    }, [locationCoordinates])


    return (
        <div>
            {locationOptions && <SearchModal searchOptions={locationOptions} locationSelector={locationSelection} />}
            {weatherData && <Weather weather={weatherData} location={location} />}
        </div>
    )
}

export default ApiData