import React from 'react';

const Weather = (props) => {

    const call = (props) => {
        console.log(props.searchText)
    }

    return (
        <div>
            <h3>Weather</h3>
            <p>{props.searchText}</p>
        </div>

    )
}

export default Weather