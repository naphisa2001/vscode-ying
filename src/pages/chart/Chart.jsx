import React from "react";
// import "../../assets/css/Chart.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Chart() {
  const data = {
    labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        label: "369",
        data: [3, 6, 9],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "333",
        data: [5, 3, 3],
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "321",
        data: [3, 2, 1],
        backgroundColor: "marine",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <div className="App">
      {/* <h2>Bar Chart with React Chart JS</h2> */}
      <div
        style={{
          padding: "20px",
          width: "80%",
        }}
      >
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
}

export default Chart;
