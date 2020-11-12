import React from 'react'


const DailyForecast = (props) => {

    const daily = props.dailyForecast
    const temp = props.temp


    console.log(daily)

    return (
        <div>
            <div>
                <h2>Daily Forecast</h2>
            </div>

            {daily.map((day) => {
                return (
                    <div key={day.dt}>
                        <div>
                            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}></img>
                        </div>
                        <ul>
                            <li>{day.dt}</li>
                            <li>Min temp: {temp(day.temp.min)}</li>
                            <li>Max temp: {temp(day.temp.max)}</li>
                            <li>{day.weather[0].description}</li>
                        </ul>
                    </div>
                )
            })}
        </div>

    )
}

export default DailyForecast