import React from "react";
import WeatherInfo from "./WeatherInfo";
import logo from "../image/logo.png";
import humidity from "../image/humidity.jpg";
import sunny from "../image/sunny.jpg";
import wind from "../image/wind.png";
import pressure from "../image/pressure.png";

const Weather = (props) => {

    const {weather} =props;
    const isDay= weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) =>{
        return (`${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp*1000).getMinutes()}`)
    }

    return (
        <div className="container" >
         <div className="container">
                <div className="city-contant">
                <span><h3>{`${Math.floor(weather?.main?.temp - 273)}°C`}</h3></span>
                    <span>{`|${weather?.weather[0].description}`}</span> 
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <div>
                    <h2>{`${weather?.name} ${weather?.sys?.country}`}</h2>
                </div>
            </div>
            <div className="weather-container">
          
            <WeatherInfo name={!! isDay ? "sunset" :"sunrise"} 
            value={getTime(weather?.sys[isDay ? "sunset":"sunrise"])}
             img={sunny}
             />
            <WeatherInfo name={'Pressure'} value={weather?.main?.pressure} img={pressure}  />
            <WeatherInfo name={'Wind'} value={weather?.wind?.speed} img={wind}/>
            <WeatherInfo name={'Humidity'} value={weather?.main?.humidity} img={humidity} />
            </div>
        </div>
    )
}
export default Weather;