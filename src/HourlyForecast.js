import React from 'react';
import moment from 'moment';

const HourlyForecast = (props) => {

    const hourly = props.hourlyForecast.slice(0, 23)
    const temp = props.temp

    console.log(hourly)

    return (
        <div className="hourly-container">
            <div>
                <h2>Hourly Forecast</h2>
            </div>
            <div className="hourly-grid">
                {hourly.map((hour) => {
                    const time = moment.unix(hour.dt).format('h A');
                    return (
                        <div key={hour.dt} className="grid-item">
                            <div>
                                <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}></img>
                            </div>
                            <ul>
                                <li>{time}</li>
                                <li><span>Temp: </span>{temp(hour.temp)}</li>
                                <li><span>Feels like: </span>{temp(hour.feels_like)}</li>
                                <li>{hour.weather[0].description}</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HourlyForecast