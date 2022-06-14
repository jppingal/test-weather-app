import React from "react";
import WeatherInfo from "./WeatherInfo";

const Weather = () => {
    return (
        <div>
            <WeatherInfo name={'sunny'} value={'32%'}/>
            <WeatherInfo name={'cloudy'} value={'22%'}/>
            <WeatherInfo name={'Rain'} value={'12%'}/>
            <WeatherInfo name={'Wind'} value={'19%'}/>
        </div>
    )
}
export default Weather;