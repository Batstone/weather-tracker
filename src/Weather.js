import React, { useEffect, useState } from 'react';
import Forecast from './Forecast.js'


const Weather = (props) => {

    const [search, updatedSeach] = useState(props.searchText)
    const [weatherData, updateWeather] = useState({})
    const [location, updateLocation] = useState('')

    const key = '9da294c5f44d4714ba45ff6ba7db72ce'

    useEffect(() => {
        console.log('running')
        updatedSeach(props.searchText)
    })

    useEffect(() => {

        updateLocation('')

        fetch(`http://api.weatherbit.io/v2.0/current?city=${search}&key=${key}`)
            .then(res => res.json())
            .then((data) => {


                const response = data.data[0]
                console.log(response)

                updateWeather(response)
                updateLocation({
                    city: response.city_name,
                })
            })
            .catch(err => console.log('Something went wrong'))
    }, [search])

    return (
        <div>
            <h3>Weather</h3>
            <p>{weatherData.city_name}</p>
            <div>
                {location !== '' && <Forecast location={location} code={key} />}
            </div>
        </div>

    )
}

export default Weather