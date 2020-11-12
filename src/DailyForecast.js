import React from 'react'


const DailyForecast = (props) => {

    const daily = props.dailyForecast

    console.log(daily)

    return (
        <div>
            <div>
                <h3>Daily forecast</h3>
            </div>

            {daily.map((day) => {
                return (
                    <div key={day.dt}>
                        <div>
                            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}></img>
                        </div>
                        <ul>
                            <li>{day.dt}</li>
                            <li>{day.temp.min}</li>
                            <li>{day.temp.max}</li>
                            <li>{day.weather[0].description}</li>
                        </ul>
                    </div>
                )
            })}
        </div>

    )
}

export default DailyForecast