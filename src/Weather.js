import React, { useState, useEffect } from 'react';
import moment from 'moment';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast.js';

const Weather = (props) => {

    const [tempFormat, updateTempFormat] = useState('F')

    const mapCoordinates = {
        lat: props.weather.lat,
        lon: props.weather.lon
    }

    const temp = props.temp
    const current = props.weather.current
    const daily = props.weather.daily
    const hourly = props.weather.hourly

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

    // Function for setting percentage of percipitation, passed as a prop to the Hourly and Daily weather components
    const percipitation = (pop) => {
        return parseInt(pop * 100)
    }

    // Function for calculating wind direction and speed, passed as a prop to the Hourly and Daily weather components
    const windDirection = (wind) => {
        var val = Math.floor((wind / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }

    console.log(current)

    return (
        <>
            <div className="search-location">
                <h2>{props.location}</h2>
            </div>
            <div className="weather-map-container">
                <div>
                    <div className="current-weather-title">
                        <div className="temp-buttons">
                            <button onClick={(e) => update(e, 'F')}>℉</button>
                            <button onClick={(e) => update(e, 'C')}>°C</button>
                        </div>
                    </div>
                    <div>
                        <div className="current-weather">
                            <ul className="current-weather__container-1">
                                <li className="current-weather__container-1__img">
                                    <img src={`http://openweathermap.org/img/wn/${props.weather.current.weather[0].icon}@2x.png`}></img>
                                </li>
                                <li>{tempConverter(current.temp)}</li>
                                <li>Feels Like: {tempConverter(current.feels_like)}</li>
                                <li>{current.weather[0].description}</li>
                                <li>{windDirection(current.wind_deg)}</li>
                                <li>{current.wind_deg}</li>
                            </ul>
                        </div>

                        {<HourlyForecast hourlyForecast={hourly} temp={tempConverter} wind={windDirection} percipitation={percipitation} />}
                        {<DailyForecast dailyForecast={daily} temp={tempConverter} wind={windDirection} percipitation={percipitation} />}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather