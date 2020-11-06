import React, { useEffect, useState } from 'react'

const Forecast = (props) => {

    const [didSearch, updateDidSearch] = useState(false)
    const [search] = useState(props.location.city)
    const [forecast, updateForecast] = useState('')

    const key = props.code

    // useEffect(() => {
    //     updateDidSearch(!didSearch)
    // }, [])

    useEffect(() => {

        fetch(`http://api.weatherbit.io/v2.0/forecast/daily?city=${search}&key=${key}`)
            .then(res => res.json())
            .then((data) => {

                const sixteenDayForecast = data.data
                const sevenDayForecast = []

                for (let i = 0; i < 7; i++) {
                    sevenDayForecast.push(sixteenDayForecast[i])
                }

                updateForecast(sevenDayForecast)


            })
            .catch(err => console.log('There was an issue'))
    })




    // useEffect(() => {

    //     <div>
    //         {forecast !== '' && forecast.map((day, index) => {
    //             return (
    //                 <div key={index}>
    //                     <p>Max Temp: {day.pres}</p>
    //                 </div>
    //             )
    //         })}
    //     </div>

    // })



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