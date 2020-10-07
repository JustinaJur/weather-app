import React from "react";
import "./Chart.scss";

const Chart = ({ minTemp, maxTemp }) => {
  const sizeMultiplier = maxTemp < 30 ? 3 : 2;
  return (
    <table className="chart">
      <tbody>
        <tr>
          <td
            className="chart__collumn chart__collumn--light"
            style={{ height: `${minTemp * sizeMultiplier}px` }}
          ></td>
          <td
            className="chart__collumn chart__collumn--dark"
            style={{ height: `${maxTemp * sizeMultiplier}px` }}
          ></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Chart;
