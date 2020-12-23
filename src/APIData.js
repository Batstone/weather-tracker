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
    const [hourlyData, updateHourlyData] = useState(null)
    const [dailyData, updateDailyData] = useState(null)
    const [tempFormat, updateTempFormat] = useState('F')

    useEffect(() => {
        updateSearch(props.searchText)
    }, [props.searchText])

    useEffect(() => {
        updateWeatherData(null)
        updateHourlyData(null)
        updateDailyData(null)

        const key1 = '04d384a1bafb46ecaeb07b4ab49c647c'

        // API for getting users coordinates
        const getCoordinatesData = async () => {
            const call = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${search}&key=${key1}`)
            const res = await call.json()
            console.log(res)
            updateLocationOptions(res.results)
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
                const res = await call.json()

                updateWeatherData(res)
                updateHourlyData(res.hourly)
                updateDailyData(res.daily)

                console.log(res)
            }
        }
        getLocationData()
    }, [locationCoordinates])

    // Function for converting themperature from F <-> C
    const tempConverter = (temp) => {
        if (tempFormat !== 'F') {
            const celciusConversion = (temp - 273.15).toFixed(0)
            const celcius = celciusConversion.toString() + ' ' + '℃'
            return celcius
        } else {
            const farenheitConversion = (((temp - 273.15) * 1.8) + 32).toFixed(0)
            const farenheit = farenheitConversion.toString() + ' ' + '℉ '
            return farenheit
        }
    }

    // Updating the selected Temp format selection
    const update = (e, value) => {
        e.preventDefault()
        updateTempFormat(value)
    }

    // Function for calculating wind direction and speed, passed as a prop to the Hourly and Daily weather components
    const windDirection = (wind) => {
        var val = Math.floor((wind / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }

    // Function for setting percentage of percipitation, passed as a prop to the Hourly and Daily weather components
    const percipitation = (pop) => {
        return parseInt(pop * 100)
    }

    return (
        <div>
            {locationOptions && <SearchModal searchOptions={locationOptions} locationSelector={locationSelection} />}
            {weatherData && <Weather weather={weatherData} temp={tempConverter} location={location} />}
            <div className="temp-buttons">
                <button onClick={(e) => update(e, 'F')}>℉</button>
                <button onClick={(e) => update(e, 'C')}>°C</button>
            </div>
            {hourlyData && <HourlyForecast hourlyForecast={hourlyData} temp={tempConverter} wind={windDirection} percipitation={percipitation} />}
            {dailyData && <DailyForecast dailyForecast={dailyData} temp={tempConverter} wind={windDirection} percipitation={percipitation} />}
        </div>
    )
}

export default ApiData