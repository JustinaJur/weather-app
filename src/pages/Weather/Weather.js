import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Weather.scss";

import getCityData from "../../api/getCityData.js";
import { measureScreenHeight } from "../../utils/index.js";

import Header from "../../components/Header/Header";
import WeekForecast from "./WeekForecast/WeekForecast";
import DayForecast from "./DayForecast/DayForecast";

const Weather = (props) => {
  const [forecast, setForecast] = useState({});
  const [coordinates, setCoordinates] = useState({});

  //const { city } = (props.location && props.location.state) || {};
  //console.log(props.location.state);

  const getWeather = async () => {
    const coord = {
      lat: props.location.state?.coord.lat,
      lon: props.location.state?.coord.lon,
    };

    if (
      typeof props.location.state !== "undefined"
      //&&
      //!navigator["geolocation"]
    ) {
      const data = await getCityData(coord.lat, coord.lon);
      console.log("change");
      setForecast(data);
    } else {
      console.log("old");
      const data = await getCityData(coordinates.lat, coordinates.lon);
      setForecast(data);
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("kalusiu location", navigator);
          const coordinates = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          setCoordinates(coordinates);
          // const data = getCityData(coordinates.lat, coordinates.lon);
          // setForecast(data);
        },
        (error) => {
          const vilniusCoord = {
            lat: "54.68",
            lon: "25.31",
          };
          setCoordinates(vilniusCoord);
        }
      );
    }

    measureScreenHeight();
  }, []);

  useEffect(() => {
    if (Object.keys(coordinates).length > 0) {
      getWeather();
    }
  }, [coordinates]);

  const { daily, current, timezone } = forecast;
  const location = timezone?.split("/").pop();

  return (
    <div className="weather">
      {timezone && (
        <>
          <Header title="Weather Forecast" location={location} />
          <div className="nav-to-search">
            <Link
              to={{
                pathname: "/search",
                state: {
                  location,
                },
              }}
            >
              <i className="fa fa-search icon"></i>
            </Link>
          </div>
        </>
      )}
      {current && (
        <DayForecast daily={daily} current={current} location={location} />
      )}
      {daily && <WeekForecast dailyForecast={daily} />}
    </div>
  );
};

export default Weather;
