import React from "react";
import "./DayForecast.scss";

const DayForecast = ({ daily, current, location }) => {
  const header = () => {
    return (
      <div className="day-forecast__header">
        <h3 className="forecast-title">Day Forecast</h3>
        <div className="forecast-temperature">
          <p className="forecast-temperature--day">
            {Math.round(daily[0].temp.min)}
          </p>
          <p className="forecast-temperature--night">
            {Math.round(daily[0].temp.max)}
          </p>
        </div>
      </div>
    );
  };

  const body = () => {
    return (
      <div className="day-forecast__body">
        <h1>{Math.round(current.temp)}</h1>
        <h2>{location}</h2>
        <div className="flex align-items--center justify-content--center">
          <p>{current.weather[0].description}</p>
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
    <>
      {header()}
      {body()}
    </>
  );
};

export default DayForecast;
