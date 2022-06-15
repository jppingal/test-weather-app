import React from "react";
import City from "./City";
import Weather from "./Weather";

const Home = () => {
    return (
        <div className="home-container">
        <div className="home-contant">
        <h1 className="title">Test-Weather-App</h1>
            {/* <City /> */}
            <Weather />
            </div>
        </div>
    )
}
export default Home;