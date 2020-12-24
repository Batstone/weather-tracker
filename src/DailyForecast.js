import React, { useState } from 'react';
import moment from 'moment';


const DailyForecast = (props) => {

    const [icon, updateIcon] = useState(null)

    const daily = props.dailyForecast
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

    console.log(daily)

    return (
        <div className="weather-container">
            <div className="title-icon-container">
                <h2>Daily Forecast</h2>
                <i onClick={iconClick} className={icon ? "fas fa-minus" : "fas fa-plus"} />
            </div>
            <ul className="weather">
                {icon ? daily.map((day) => {
                    const time = moment.unix(day.dt).format('MMM DD');
                    return (
                        <li key={day.dt} className="weather__details">
                            <div className="weather__details__container-1">
                                <div>{time}</div>
                                <div>
                                    <div>Max:{temp(day.temp.max)}</div>
                                    <div>Min: {temp(day.temp.min)}</div>
                                </div>
                            </div>

                            <div className="weather__details__container-2">
                                <div className="weather__details__container-2__img"><img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}></img></div>
                                <div>{day.weather[0].description}</div>
                            </div>

                            <div className="weather__details__container-3">
                                <div>{percipitation(day.pop)}% <i class="fas fa-tint"></i></div>
                                <div>{wind(day.wind_deg)}</div>
                                <div>{day.wind_speed} MPH</div>
                            </div>
                        </li>
                    )
                }) : null}
            </ul>
        </div>

    )
}

export default DailyForecast