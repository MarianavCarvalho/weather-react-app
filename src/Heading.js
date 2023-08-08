import React from "react";
import "./Heading.css";

export default function Heading() {
  return (
    <div className="heading">
      <div className="row columns">
        <div className="col-6 cityName">
          <h1 id="city">Lisbon</h1>
          <ul className="leftList">
            <li className="date" id="date">
              Saturday 11:00
            </li>
          </ul>
          <ul className="propertiesList">
            <li id="wind">Wind</li>
            <li id="humidity">Humidity</li>
          </ul>
        </div>
        <div className="col-6 cityData">
          <p id="temperature">12</p>
          <span id="celcius"> ºC </span>
          <ul className="rightList">
            <li id="description-temp">Description</li>
          </ul>
          <img src="" alt="" id="icon" />
        </div>
      </div>
      <div className="row forecast" id="forecast"></div>
    </div>
  );
}
