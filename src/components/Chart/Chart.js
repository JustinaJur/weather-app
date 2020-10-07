import React from "react";
import "./Chart.scss";

const Chart = ({ dayTemp, nightTemp }) => {
  return (
    <div className="chart">
      <div
        className="chart__collumn chart__collumn--light"
        style={{ height: `${dayTemp * 2}px` }}
      ></div>
      <div
        className="chart__collumn chart__collumn--dark"
        style={{ height: `${nightTemp * 2}px` }}
      ></div>
    </div>
  );
};

export default Chart;
