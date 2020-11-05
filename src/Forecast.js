import React, { useEffect, useState } from 'react'



const Forecast = (props) => {

    const [searchTerm] = useState(props.search)
    const [forecast] = useState({})

    const key = props.code

    useEffect(() => {

        fetch

    })


    return (
        <p>Forcaset</p>
    )

}


export default Forecast