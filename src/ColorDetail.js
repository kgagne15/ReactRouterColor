import React from "react"
import {useParams, Link, useHistory} from "react-router-dom"



const ColorDetail = ({colors}) => {
    let {color} = useParams()
    let history = useHistory()

    for (let c of colors) {
        if (c.colorName === color) {
            return (
                <>
                <div style={{backgroundColor: c.colorRGB}}>
                    <h1>{color}</h1>
                </div>
                <p><Link to="/colors">Go back</Link></p>
                </>
            )
        } 
    }
    return history.push('/colors')
   
}

export default ColorDetail;