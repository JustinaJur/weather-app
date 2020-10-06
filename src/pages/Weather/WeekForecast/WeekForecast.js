import React from "react";
import "./WeekForecast.scss";

import Chart from "../../../components/Chart/Chart";
import { getDaysOfNextWeek } from "../../../utils/date.js";

const WeekForecast = ({ dailyForecast }) => {
  const daysOfNextWeek = getDaysOfNextWeek();

  return (
    <>
      <h3 className="forecast-title">Week Forecast</h3>
      <div className="week-forecast">
        {daysOfNextWeek.map((day, index) => {
          const minTemp = Math.round(dailyForecast[index + 1].temp.min);
          const maxTemp = Math.round(dailyForecast[index + 1].temp.max);

          return (
            <div className="grid place-items--center">
              {day.toUpperCase()}
              <div className="text-align--center">
                <img
                  className="forecast-icon"
                  alt="weather"
                  src={`http://openweathermap.org/img/wn/${
                    dailyForecast[index + 1].weather[0].icon
                  }@2x.png`}
                />
                <div className="forecast-temperature">
                  <p className="forecast-temperature--day">{minTemp}</p>
                  <p className="forecast-temperature--night">{maxTemp}</p>
                </div>
              </div>
              <Chart minTemp={minTemp} maxTemp={maxTemp} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeekForecast;
