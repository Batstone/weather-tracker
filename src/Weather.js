import React, { useEffect, useState } from 'react';


const Weather = (props) => {

    const [search, updatedSeach] = useState(props.searchText)

    const key = '9da294c5f44d4714ba45ff6ba7db72ce'

    useEffect(() => {
        console.log('running')
        updatedSeach(props.searchText)

        const result = fetch(`http://api.weatherbit.io/v2.0/current?city=${search}&key=${key}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                const weatherData = data.data[0]
                console.log(weatherData)
            })
            .catch(err => console.log('Something went wrong'))

    })


    return (
        <div>
            <h3>Weather</h3>
            <p>{search}</p>
        </div>

    )
}

export default Weather