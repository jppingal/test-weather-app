import axios from "axios";
import React, { useState } from "react";
import City from "./City";
import Weather from "./Weather";

const Home = () => {

    const [city, setCity] = useState()
    const [weather, setWeather] = useState()

    const fetchWeather = async (e) => {
        e.preventDefault();
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=05c774f91e1d5012c3753b7a156432e3`);
        setWeather(response.data)
    }
    return (
        <div className="home-container">
            <div className="home-contant">
                <h1 className="title">Test-Weather-App</h1>
                {weather ? (
                    <Weather weather={weather} />
                ) : (
                    <City setCity={setCity} fetchWeather={fetchWeather} />
                )}
            </div>
        </div>
    )
}
export default Home;