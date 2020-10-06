import React from "react";
import "./Header.scss";

const Header = ({ title, location }) => {
  return (
    <div className="header">
      <h4>{title}</h4>
      <p className="header--dark">{location}</p>
    </div>
  );
};

export default Header;
