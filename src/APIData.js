import React, { useEffect, useState } from 'react';
import Weather from './Weather.js'
import HourlyForecast from './HourlyForecast.js'
import DailyForecast from './DailyForecast.js'
import moment from 'moment';

const ApiData = (props) => {

    const [search, updateSearch] = useState(props.searchText)
    const [locationCoordinates, updateLocationCoordinates] = useState(null)
    const [weatherData, updateWeatherData] = useState(null)
    const [hourlyData, updateHourlyData] = useState(null)
    const [dailyData, updateDailyData] = useState(null)
    const [tempFormat, updateTempFormat] = useState('F')

    useEffect(() => {

        updateWeatherData(null)
        updateHourlyData(null)
        updateDailyData(null)

        updateSearch(props.searchText)

        const key1 = '04d384a1bafb46ecaeb07b4ab49c647c'

        // API for getting users coordinates
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${search}&key=${key1}`)
            .then(res => res.json())
            .then((data) => {

                const geometry = data.results[0].geometry

                console.log(geometry)

                updateLocationCoordinates(geometry)
            })
            .catch(err => console.log('something is not right with the Coordinates component')
            )
    }, [props.searchText])

    useEffect(() => {


        if (locationCoordinates) {

            const key2 = 'b259026e161c31f0587ed82e488b63f5'

            // Using the coordinates data to search for a specific city/location
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationCoordinates.lat.toFixed(6)}&lon=${locationCoordinates.lng.toFixed(6)}&exclude={part}&appid=${key2}`)
                .then(res => res.json())
                .then((data) => {

                    console.log(data)

                    updateWeatherData(data)
                    updateHourlyData(data.hourly)
                    updateDailyData(data.daily)
                })
        }

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

    const update = (e, value) => {
        e.preventDefault()
        updateTempFormat(value)
    }

    return (
        <div>
            <div>
                <h2>{search}</h2>
            </div>

            <div>
                <button onClick={(e) => update(e, 'F')}>℉</button>
                <button onClick={(e) => update(e, 'C')}>°C</button>
            </div>
            {weatherData && <Weather weather={weatherData} temp={tempConverter} />}
            {hourlyData && <HourlyForecast hourlyForecast={hourlyData} temp={tempConverter} />}
            {dailyData && <DailyForecast dailyForecast={dailyData} temp={tempConverter} />}
        </div>
    )
}

export default ApiData