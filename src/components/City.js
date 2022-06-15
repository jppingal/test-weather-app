import React from "react";
import logo from "../image/logo.png";
import SearchIcon from '@material-ui/icons/Search';

const City = (props) => {
  const { setCity, fetchWeather } = props;
  return (
    <div className="container">
      <div className="city-contant">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div style={{ marginTop: '50px' }}>
        <h5 style={{ color: 'blue' }}>Find weather of your city</h5>
        <div className="search-contant" >
          <form onSubmit={fetchWeather}>
            <input
              type="search"
              placeholder="Enter City Name"
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="Search-Icon" type="submit"><SearchIcon /></button>
          </form>
        </div>

      </div>
    </div>
  )
}
export default City;