import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";

//used solution for useHistory
const ColorForm = ({colors}) => {
    const INITIAL_STATE = {
        colorName: '',
        colorRGB: '#000000'
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const history = useHistory();

    const addColor = () => {
        colors.splice(0, 0, formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData)
        setFormData(INITIAL_STATE);
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
            <label htmlFor="color">Color Name: </label>
            <input
                type="text"
                id="colorName"
                name="colorName"
                placeholder="color name"
                value={formData.colorName}
                onChange={handleChange}
            />
            <label htmlFor="color">Color RGB: </label>
            <input
                type="color"
                id="colorRGB"
                name="colorRGB"
                value={formData.colorRGB}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
        <p><Link to="/colors">Go Back</Link></p>
        </>
    )
}

export default ColorForm;