import React from "react"
import {useParams, Link} from "react-router-dom"


const ColorDetail = () => {
    let {color} = useParams()
    
    return (
        <>
        <div style={{backgroundColor: color}}>
            <h1>{color}</h1>
        </div>
        <p><Link to="/colors">Go back</Link></p>
        </>
    )
}

export default ColorDetail;