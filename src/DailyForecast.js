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
    const wind = props.wind

    console.log(daily)

    return (
        <div className="weather-container">
            <div className="title-icon-container">
                <h2>Daily Forecast</h2>
                <i onClick={iconClick} className={icon ? "fas fa-minus" : "fas fa-plus"} />
            </div>
            <div className="weather">
                {icon ? daily.map((day) => {
                    const time = moment.unix(day.dt).format('MMM DD');
                    return (
                        <div key={day.dt}>
                            <div className="weather__details">
                                <div className="weather__details__container-1">
                                    <div>{time}</div>
                                    <div className="weather__details__container-1__temp">
                                        <div>{temp(day.temp.max)} // {temp(day.temp.min)}</div>
                                    </div>
                                    <div className="weather__details__container-1__description">
                                        <div><img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}></img></div>
                                        <div>{day.weather[0].description}</div>
                                    </div>
                                </div>
                                <div className="weather__details__container-2">
                                    <div>{wind(day.wind_deg)}</div>
                                    <div>{day.wind_speed} MPH</div>
                                </div>
                            </div>
                        </div>
                    )
                }) : null}
            </div>

        </div>

    )
}

export default DailyForecast