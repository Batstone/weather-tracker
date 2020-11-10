import React, { useEffect, useState } from 'react';


const Weather = (props) => {

    const [search, updatedSeach] = useState(props.locationCoordinates)
    const [weatherData, updateWeatherData] = useState({})


    const key = 'b259026e161c31f0587ed82e488b63f5'

    useEffect(() => {

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${search.lat.toFixed(6)}&lon=${search.lng.toFixed(6)}&exclude={part}&appid=${key}`)
            .then((res) => { return res.json() })
            .then((data) => {

                console.log(data)


            })
            .catch(err => console.log('Something went wrong'))
    }, [])

    return (
        <div>
            <h2>Current Weather</h2>
        </div>

    )
}

export default Weather