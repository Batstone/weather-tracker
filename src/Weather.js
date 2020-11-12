import React from 'react';

const Weather = (props) => {

    const temp = props.temp

    return (
        <div>
            <div>
                <h2>Current Weather</h2>
            </div>
            <div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${props.weather.current.weather[0].icon}@2x.png`}></img>
                </div>

                <div>
                    <ul>
                        <li>Current temp: {temp(props.weather.current.temp)} </li>
                        <li>Feels like: {props.weather.current.feels_like}</li>
                        <li>{props.weather.current.weather[0].description}</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Weather