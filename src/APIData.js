import React, { useEffect, useState } from 'react';
import Weather from './Weather.js'
import HourlyForecast from './HourlyForecast.js'
import DailyForecast from './DailyForecast.js'


const ApiData = (props) => {

    const [search, updateSearch] = useState(props.searchText)
    const [locationCoordinates, updateLocationCoordinates] = useState(null)
    const [weatherData, updateWeatherData] = useState(null)
    const [hourlyData, updateHourlyData] = useState(null)
    const [dailyData, updateDailyData] = useState(null)

    useEffect(() => {

        updateSearch(props.searchText)

        const key1 = '04d384a1bafb46ecaeb07b4ab49c647c'

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


    return (
        <div>
            <h2>{search}</h2>
            {weatherData && <Weather weather={weatherData} />}
            {hourlyData && <HourlyForecast hourlyForecast={hourlyData} />}
            {dailyData && <DailyForecast dailyForecast={dailyData} />}
        </div>
    )
}


export default ApiData