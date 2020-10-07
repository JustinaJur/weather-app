import React from "react";
import "./Header.scss";

const Header = ({ title, location }) => {
  return (
    <div className="header">
      <p>{title}</p>
      {location && <p className="header-item--dark">{location}</p>}
    </div>
  );
};

export default Header;
