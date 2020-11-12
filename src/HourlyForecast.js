import React from 'react'

const HourlyForecast = (props) => {

    const hourly = props.hourlyForecast.slice(24)
    const temp = props.temp


    console.log(hourly)

    return (
        <div>
            <div>
                <h2>Hourly Forecast</h2>
            </div>
            {hourly.map((hour) => {
                return (
                    <div key={hour.dt}>
                        <div>
                            <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}></img>
                        </div>
                        <ul>
                            <li>{hour.dt}</li>
                            <li>Temp: {temp(hour.temp)}</li>
                            <li>{hour.weather[0].description}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default HourlyForecast