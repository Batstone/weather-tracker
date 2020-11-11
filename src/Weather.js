import React, { useEffect, useState } from 'react';


const Weather = (props) => {

    const [search, updatedSeach] = useState(props.locationCoordinates)
    const [weatherData, updateWeatherData] = useState('')
    const [searchText] = useState(props.searchText)

    const key = 'b259026e161c31f0587ed82e488b63f5'

    useEffect(() => {

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${search.lat}&lon=${search.lng}&exclude={part}&appid=${key}`)
            .then(res => res.json())
            .then((data) => {

                console.log(data)

                updateWeatherData(data)

            })
            .catch(err => console.log('Something went wrong'))
    }, [])


    return (
        <div>
            <div>
                <h1>{searchText}</h1>
                {weatherData !== '' && <img src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}></img>}
            </div>

            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>

    )
}

export default Weather