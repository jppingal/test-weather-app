import React from "react";
import WeatherInfo from "./WeatherInfo";
import logo from "../image/logo.png";
import foggy from "../image/foggy.jpg";
import sunny from "../image/sunny.jpg";
import wind from "../image/wind.png";

const Weather = () => {
    return (
        <div className="container" >
         <div className="container">
                <div className="city-contant">
                    <h1>72<span>°F</span></h1>
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <div>
                    <h2>Jaipur</h2>
                </div>
            </div>
            <div className="weather-container">
            <WeatherInfo name={'sunny'} value={'72°F'} img={sunny}/>
            <WeatherInfo name={'cloudy'} value={'62°F'} img={logo}/>
            <WeatherInfo name={'wind'} value={'52°F'} img={wind}/>
            <WeatherInfo name={'Foggy'} value={'42°F'} img={foggy}/>
            </div>
        </div>
    )
}
export default Weather;