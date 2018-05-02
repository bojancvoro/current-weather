import React from "react";

const DisplayWeather = (props) => {
    return (
        <div>
            <h1>Current weather in {props.city}</h1>
            <h3>{props.description}</h3>
            <h3>{props.temp} C</h3>
        </div>
    )
}

export default DisplayWeather;