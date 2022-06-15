import React from "react";
import logo from "../image/logo.png";
import SearchIcon from '@material-ui/icons/Search';

const City = () => {

  return (
    <div className="container">
      <div className="city-contant">
        {/* <h1>72<span>°F</span></h1> */}
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div style={{marginTop: '50px'}}>
        <h5 style={{color: 'blue'}}>Find weather of your city</h5>
      <div className="search-contant">
     <input type="search" /><SearchIcon className="Search-Icon"/>
     </div>
      </div>
    </div>
  )
}
export default City;