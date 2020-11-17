import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Weather = (props) => {

    const temp = props.temp

    return (
        <div className="current-weather-container">
            <div className="current-weather-title">
                <h4>Current
                Weather</h4>
            </div>
            <div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${props.weather.current.weather[0].icon}@2x.png`}></img>
                </div>

                <div>
                    <ul>
                        <li>Current temp: {temp(props.weather.current.temp)} </li>
                        <li>Feels like: {temp(props.weather.current.feels_like)}</li>
                        <li>{props.weather.current.weather[0].description}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Weather