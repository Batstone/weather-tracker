import React from 'react'

const HourlyForecast = (props) => {

    const hourly = props.hourlyForecast.slice(24)

    console.log(hourly)

    return (
        <div>
            <div>
                <h3>Hourly forecast</h3>
            </div>
            {hourly.map((hour) => {
                return (
                    <div key={hour.dt}>
                        <div>
                            <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}></img>
                        </div>
                        <ul>
                            <li>{hour.dt}</li>
                            <li>{hour.temp}</li>
                            <li>{hour.weather[0].description}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default HourlyForecast