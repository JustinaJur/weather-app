import React from "react";
import "./WeekForecast.scss";

import Chart from "../../../components/Chart/Chart";
import { getDaysOfNextWeek } from "../../../utils/index.js";

const WeekForecast = ({ dailyForecast }) => {
  const daysOfNextWeek = getDaysOfNextWeek();

  return (
    <>
      <h3 className="forecast-title">Week Forecast</h3>
      <div className="week-forecast">
        {daysOfNextWeek.map((day, index) => {
          const dayTemp = Math.round(dailyForecast[index + 1].temp.day);
          const nightTemp = Math.round(dailyForecast[index + 1].temp.night);

          return (
            <div key={index} className="week-forecast__body">
              {day.toUpperCase()}
              <div>
                <img
                  className="forecast-icon"
                  alt="weather"
                  src={`http://openweathermap.org/img/wn/${
                    dailyForecast[index + 1].weather[0].icon
                  }@2x.png`}
                />
                <div className="forecast-temperature">
                  <p className="forecast-temperature--day">{dayTemp}</p>
                  <p className="forecast-temperature--night">{nightTemp}</p>
                </div>
              </div>
              <Chart dayTemp={dayTemp} nightTemp={nightTemp} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeekForecast;
