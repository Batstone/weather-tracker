import React, { useState } from 'react';
import moment from 'moment';


const DailyForecast = (props) => {

    const [icon, updateIcon] = useState(null)

    const iconClick = () => {
        if (!icon) {
            updateIcon('clicked')
        } else {
            updateIcon(null)
        }
    }

    const daily = props.dailyForecast
    const temp = props.temp

    return (
        <div className="weather-container">
            <div className="title-icon-container">
                <h2>Daily Forecast</h2>
                <i onClick={iconClick} className={icon ? "fas fa-minus" : "fas fa-plus"} />
            </div>
            <div className="weather-grid">
                {icon ? daily.map((day) => {
                    const time = moment.unix(day.dt).format('MMM DD');
                    return (
                        <div key={day.dt} className="grid-item">
                            <div>
                                <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}></img>
                            </div>
                            <ul>
                                <li>{time}</li>
                                <li>{temp(day.temp.max)} <span>-</span> {temp(day.temp.min)}</li>
                                <li>{day.weather[0].description}</li>
                            </ul>
                        </div>
                    )
                }) : null}
            </div>

        </div>

    )
}

export default DailyForecast