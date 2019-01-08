import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = props => (
  <Bar
    data={{
      labels: props.labels,
      datasets: [
        {
          label: "My First Dataset",
          backgroundColor: "#fff",
          borderWidth: 1,
          hoverBackgroundColor: "#ff0000",
          hoverBorderColor: "#fff",
          data: props.data
        }
      ]
    }}
    options={{
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            ticks: {
              max: 100,
              min: 0,
              stepSize: 10
            }
          }
        ]
      }
    }}
    width={100}
    height={100}
  />
);

export default BarChart;
