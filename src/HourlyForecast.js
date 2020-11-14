import React from 'react';
import moment from 'moment';

const HourlyForecast = (props) => {

    const hourly = props.hourlyForecast.slice(0, 23)
    const temp = props.temp

    console.log(hourly)

    return (
        <div>
            <div>
                <h2>Hourly Forecast</h2>
            </div>
            {hourly.map((hour) => {
                const time = moment.unix(hour.dt).format('h A');
                return (
                    <div key={hour.dt}>
                        <div>
                            <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}></img>
                        </div>
                        <ul>
                            <li>{time}</li>
                            <li>Temp: {temp(hour.temp)}</li>
                            <li>Feels like: {temp(hour.feels_like)}</li>
                            <li>{hour.weather[0].description}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default HourlyForecast