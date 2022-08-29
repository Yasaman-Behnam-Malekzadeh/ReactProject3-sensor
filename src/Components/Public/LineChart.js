import React from "react";
import { Chart as chartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import "chartjs-adapter-date-fns";

function LineChart({ chartData, chartOption }) {
  return <Line data={chartData} options={chartOption} />;
}

export default LineChart;
