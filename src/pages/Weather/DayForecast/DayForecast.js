import React from "react";
import "./DayForecast.scss";

import { firstLetterToCapital } from "../../../utils/index.js";

const DayForecast = ({ daily, current, location }) => {
  const header = () => {
    return (
      <div className="day-forecast__header">
        <h3 className="forecast-title">Day Forecast</h3>
        <div className="forecast-temperature">
          <p className="forecast-temperature--day flex align-items--center">
            {Math.round(daily[0].temp.day)}
          </p>
          <p className="forecast-temperature--night flex align-items--center">
            {Math.round(daily[0].temp.night)}
          </p>
        </div>
      </div>
    );
  };

  const body = () => {
    return (
      <div className="day-forecast__body">
        <p className="day-forecast__body-temp">{Math.round(current.temp)}°</p>
        <h2 className="day-forecast__body-location">{location}</h2>
        <div className="day-forecast__body-description">
          <p>{firstLetterToCapital(current.weather[0].description)}</p>
          <img
            className="forecast-icon"
            alt="weather"
            src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="day-forecast">
      {header()}
      {body()}
    </div>
  );
};

export default DayForecast;
