import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Weather = (props) => {

    const temp = props.temp

    return (
        <div>
            <div className="search-location">
                <h2>{props.location}</h2>
            </div>
            <div className="current-weather-container">
                <div className="current-weather-title">
                    <h4>Current Weather</h4>
                </div>
                <div>
                    <div>
                        <img src={`http://openweathermap.org/img/wn/${props.weather.current.weather[0].icon}@2x.png`}></img>
                    </div>
                    <div>
                        <ul>
                            <li><span>Current temp: </span>{temp(props.weather.current.temp)} </li>
                            <li><span>Feels like: </span>{temp(props.weather.current.feels_like)}</li>
                            <li>{props.weather.current.weather[0].description}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather