import React from 'react';
import moment from 'moment';


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
                const time = moment.unix(day.dt).format('MMM DD');
                return (
                    <div key={day.dt}>
                        <div>
                            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}></img>
                        </div>
                        <ul>
                            <li>{time}</li>
                            <li>Min temp: { }</li>
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