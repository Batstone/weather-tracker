import React from 'react';

const Weather = (props) => {

    return (
        <div>
            <div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${props.weather.current.weather[0].icon}@2x.png`}></img>
                </div>

                <div>
                    <ul>
                        <li>{props.weather.current.temp}</li>
                        <li>{props.weather.current.feels_like}</li>
                        <li>{props.weather.current.weather[0].description}</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Weather