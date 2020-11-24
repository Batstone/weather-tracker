import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Map from './Map.js'

const Weather = (props) => {

    const temp = props.temp

    const mapCoordinates = {
        lat: props.weather.lat,
        lon: props.weather.lon
    }

    console.log(props.weatherData)


    return (
        <>
            <div className="search-location">
                <h2>{props.location}</h2>
            </div>
            <div className="weather-map-container">
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
                                <li>{temp(props.weather.current.temp)} <span>/</span> {temp(props.weather.current.feels_like)}</li>
                                <li><span>{props.weather.current.weather[0].description}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Map mapCoordinates={mapCoordinates} />
            </div>
        </>
    )
}

export default Weather