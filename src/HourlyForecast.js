import React, { useState } from 'react';
import moment from 'moment';

const HourlyForecast = (props) => {

    const [icon, updateIcon] = useState(null)

    const hourly = props.hourlyForecast.slice(0, 23)
    const temp = props.temp

    const iconClick = () => {
        if (!icon) {
            updateIcon('clicked')
        } else {
            updateIcon(null)
        }
    }

    return (
        <div className="weather-container">
            <div className="title-icon-container">
                <h2>Hourly Forecast</h2>
                <i onClick={iconClick} className={icon ? "fas fa-minus" : "fas fa-plus"} />
            </div>
            <div className="weather-grid">
                {icon ? hourly.map((hour) => {
                    const time = moment.unix(hour.dt).format('h A');
                    return (
                        <div key={hour.dt} className="grid-item">
                            <div>
                                <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}></img>
                            </div>
                            <ul>
                                <li>{time}</li>
                                <li>{temp(hour.temp)} <span>/</span> {temp(hour.feels_like)}</li>
                                <li><span>{hour.weather[0].description}</span></li>
                            </ul>
                        </div>
                    )
                }) : null}
            </div>
        </div>
    )
}

export default HourlyForecast;