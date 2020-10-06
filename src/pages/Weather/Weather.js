import React, { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import WeekForecast from "./WeekForecast/WeekForecast";
import DayForecast from "./DayForecast/DayForecast";

import getCityData from "../../api/getCityData.js";

const Weather = (props) => {
  const [forecast, setForecast] = useState({});
  const [coordinates, setCoordinates] = useState({
    lat: "54.68",
    lon: "42.31",
  });

  //const { city } = (props.location && props.location.state) || {};

  //console.log(props.location.state.coord);

  const getWeather = async () => {
    const data = await getCityData(coordinates.lat, coordinates.lon);
    setForecast(data);
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coordinates = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        setCoordinates(coordinates);
      });
    } else {
      // get vilnius lat and lon
      console.log("hey");
    }
  }, []);

  useEffect(() => {
    getWeather();
  }, [coordinates]);

  const { daily, current, timezone } = forecast;
  const location = timezone?.split("/").pop();

  return (
    <div>
      {timezone && <Header title="Weather Forecast" location={location} />}
      {current && (
        <DayForecast daily={daily} current={current} location={location} />
      )}
      {daily && <WeekForecast dailyForecast={daily} />}
    </div>
  );
};

export default Weather;
