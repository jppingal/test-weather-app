import React from "react";

const WeatherInfo = ({name, value}) => {
    return (
       <div>
        <div>{name}</div>
        <div>{value}</div>
       </div>
    )
}
export default WeatherInfo;