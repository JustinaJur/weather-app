import React from "react";
import "./Chart.scss";

const Chart = ({ minTemp, maxTemp }) => {
  return (
    <table className="chart">
      <tbody>
        <tr>
          <td
            className="chart__collumn chart__collumn--light"
            style={{ height: `${minTemp * 5}px` }}
          ></td>
          <td
            className="chart__collumn chart__collumn--dark"
            style={{ height: `${maxTemp * 5}px` }}
          ></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Chart;