import React, { useState } from "react";

import Header from "../../components/Header/Header";
import cities from "../../data/city.list.min.json";

import "./Search.scss";

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
                <em className="cities-item--highlighted">{match[0]}</em>
                {parts[1]}
              </div>
            );
          }
        })}
      </div>
    );
  };

  return (
    <div>
      <Header title="Location" location="Vilnius" />
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
