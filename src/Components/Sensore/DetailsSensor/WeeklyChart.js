import React, { useState, useEffect } from "react";
import axios from "axios";
import LineChart from "../../Public/LineChart";
import { useParams } from "react-router-dom";

function WeeklyChart() {
  //Get data of chart from API
  const [chartData, setChartData] = useState({});

  //Set loading before loading data
  const [loading, setLoading] = useState(true);

  //Defind id for every sensor
  const { id } = useParams();

  //Set Options for Chartjs
  const chartOption = {
    aspectRatio: 2 / 1,
    borderWidth: "2",
    borderColor: ["#4A8590", "rgb(154,123,47)", "rgb(82,114,75)"],
    parsing: {
      xAxisKey: "time",
      yAxisKey: "temp",
    },
    scales: {
      x: {
        type: "time",
      },
    },
  };

  //Comparing function for sort of time in chart
  const comparing = (a, b) => {
    return a.time - b.time;
  };

  //Adding chart function to get data function
  const chart = () => {
    //Get data from API with Axios
    axios
      .get(`http://localhost:3009/sensor/${id}/stats/weekly`)
      .then((res) => {
        let results = res.data.results;
        let sortedResults = results.sort(comparing);
        let time = sortedResults.map((item) => Number(item.time));
        let temp = sortedResults.map((item) => item.temp);

        //Set data of chart
        setChartData({
          labels: time,
          datasets: [
            {
              label: "weekly data",
              data: temp,
            },
          ],
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <LineChart chartData={chartData} chartOption={chartOption} />
      )}
    </div>
  );
}

export default WeeklyChart;
