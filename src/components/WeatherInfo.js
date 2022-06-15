import React from "react";

const WeatherInfo = ({ name, value, img }) => {
    return (
        <div className="weather-info">
           
            <div>
                <div className="weather-img-value" >
                    <img className="weather-info-img" src={img} alt="img" />
                    <span style={{marginLeft: 5}}>{value}</span>
                </div>
                <div style={{marginTop: 5}}>{name}</div>
            </div>
        </div>
    )
}
export default WeatherInfo;