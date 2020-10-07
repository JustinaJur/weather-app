import React, { useState } from "react";
import "./Search.scss";

import Header from "../../components/Header/Header";
import cities from "../../data/cities.json";

const Search = (props) => {
  const [term, setTerm] = useState("");

  const onCityClick = (city) => {
    props.history.push({
      pathname: "/",
      state: city,
    });
  };

  const results = () => {
    return (
      <div className="cities">
        {cities.map((city, index) => {
          let regex = new RegExp(`(${term})`, "gi");
          let match = city.name.match(regex);

          if (match !== null && term !== "") {
            let parts = city.name.split(match[0], 2);
            return (
              <div
                className="cities-item"
                key={index}
                onClick={() => onCityClick(city)}
              >
                {parts[0]}
                <span className="cities-item--highlighted">{match[0]}</span>
                {parts[1]}
              </div>
            );
          }
        })}
      </div>
    );
  };

  const cityName = props.history.location.state?.location;

  return (
    <div>
      <Header title="Location" location={cityName} />
      <div className="search-input">
        <i className="fa fa-search icon"></i>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <i className="fa fa-times-circle icon" onClick={() => setTerm("")}></i>
      </div>
      {results()}
    </div>
  );
};

export default Search;
