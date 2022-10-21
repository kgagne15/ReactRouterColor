import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";

//used solution for useHistory
const ColorForm = ({colors}) => {
    const [formData, setFormData] = useState([]);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        colors.splice(0, 0, formData.color)
        setFormData('');
        history.push("/colors");
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }
    

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color: </label>
            <input
                id="color"
                name="color"
                placeholder="color"
                value={formData.color}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
        <p><Link to="/colors">Go Back</Link></p>
        </>
    )
}

export default ColorForm;