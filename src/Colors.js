import React from "react";
import {Link} from "react-router-dom";

const Colors = ({colors}) => {
    return (
        <>
            <h1>This is COLORS home</h1>
            <ul>
            {colors.map(c => {
            return (
                <li><Link exact to={`/colors/${c.colorName}`}>{c.colorName}</Link></li>
            )
            })} 
            <li><Link to="/colors/new">Color Form</Link></li>
            </ul>
            
        </>
    )
}

export default Colors;