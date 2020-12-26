import React, { useState } from 'react';
import moment from 'moment';

const HourlyForecast = (props) => {

    const [icon, updateIcon] = useState(null)

    const hourly = props.hourlyForecast.slice(0, 23)
    const temp = props.temp
    const wind = props.wind
    const percipitation = props.percipitation

    const iconClick = () => {
        if (!icon) {
            updateIcon('clicked')
        } else {
            updateIcon(null)
        }
    }


    console.log(props.hourlyForecast)

    return (
        <div className="weather-container">
            <div className="title-icon-container">
                <h2>Hourly Forecast</h2>
                <i onClick={iconClick} className={icon ? "fas fa-minus" : "fas fa-plus"} />
            </div>
            <ul className="weather">
                {icon ? hourly.map((hour) => {
                    const time = moment.unix(hour.dt).format('h A');
                    return (
                        <li key={hour.dt} className="weather__details">
                            <div className="weather__details__container-1">
                                <div>{time}</div>
                                <div className="weather__details__temp-container">
                                    <div>{temp(hour.temp)}</div>
                                    <div>FL: {temp(hour.feels_like)}</div>
                                </div>
                            </div>
                            <div className="weather__details__container-2">
                                <div className="weather__details__container-2__img"><img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}></img></div>
                                <div>{hour.weather[0].description}</div>
                            </div>
                            <div className="weather__details__container-3">
                                <div>{percipitation(hour.pop)}% <i className="fas fa-tint"></i></div>
                                <div>{wind(hour.wind_deg)}</div>
                                <div>{hour.wind_speed} MPH</div>
                            </div>
                        </li>
                    )
                }) : null}
            </ul>
        </div>
    )
}

export default HourlyForecast;