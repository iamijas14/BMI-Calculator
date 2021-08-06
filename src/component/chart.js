import React from "react";
import { Bar, defaults } from "react-chartjs-2";

defaults.global.tooltips.enabled = false;

export const BarChart = ({ isHeight, isWeight }) => {
  return (
    <div>
      <Bar
        data={{
          labels: [isWeight],
          datasets: [
            {
              label: "Height and Weight",
              data: [isHeight],
              backgroundColor: ["#8B5CF6"],
              barThickness: 100
            }
          ]
        }}
        height={400}
        width={300}
        options={{
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                scaleLabel: {
                  labelString: "Weight in kg",
                  display: true,
                  fontColor: "#6d28d9",
                  fontSize: 25,
                  fontFamily: "sans-serif"
                },
                ticks: {
                  fontColor: "black",
                  fontSize: 17,
                  padding: 10,
                  fontFamily: "sans-serif"
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  color: "#9CA3AF"
                },
                scaleLabel: {
                  labelString: "Height in cm",
                  display: true,
                  fontColor: "#6d28d9",
                  fontSize: 25,
                  fontFamily: "sans-serif"
                },
                ticks: {
                  // beginAtZero: true,
                  fontColor: "black",
                  fontSize: 14,
                  padding: 10,
                  fontFamily: "sans-serif"
                }
              }
            ]
          }
        }}
      />
    </div>
  );
};
