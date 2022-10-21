import React from "react"
import {useParams, Link, Redirect, useHistory} from "react-router-dom"
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Colors from "./Colors";


const ColorDetail = ({colors}) => {
    let {color} = useParams()
    let history = useHistory()

    if (colors.includes(color)) {
        return (
        <>
        <div style={{backgroundColor: color}}>
            <h1>{color}</h1>
        </div>
        <p><Link to="/colors">Go back</Link></p>
        </>
    )
    } else {
        return history.push('/colors')
        //return <Colors colors={colors}/>
    }
    
}

export default ColorDetail;