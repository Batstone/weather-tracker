import React, { useEffect, useState } from 'react'

const Forecast = (props) => {

    const [search] = useState(props.location.city)
    const [forecast, updateForecast] = useState('')

    const key = 'b259026e161c31f0587ed82e488b63f5'

    useEffect(() => {

        console.log(search)

        fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${search}&cnt=7&appid=${key}`)
            .then(res => res.json())
            .then((data) => {

                console.log(data)

            })
            .catch(err => console.log('There was an issue'))
    })




    useEffect(() => {

        <div>

        </div>

    })

    return (

        <>
            <h1>Hello</h1>
            <h3>Extended Forecast</h3>
            <div>
                {forecast !== '' && forecast.map((day, index) => {
                    return (
                        <div key={index}>
                            <p>Max Temp: {day.pres}</p>
                        </div>
                    )
                })}
            </div>

        </>

    )

}


export default Forecast