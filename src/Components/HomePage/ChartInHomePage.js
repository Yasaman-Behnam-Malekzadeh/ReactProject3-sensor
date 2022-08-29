import React, { useState, useEffect } from "react";
import axios from "axios";
import LineChart from "../Public/LineChart";

function ChartInHomePage() {
  //Get data of chart from API
  const [chartData, setChartData] = useState({});

  //Set loading before loading data
  const [loading, setLoading] = useState(true);

  //Set Options for Chartjs
  const chartOption = {
    aspectRatio: 4 / 1,
    tension: 0.5,
    borderWidth: "2",
    borderColor: ["#4A8590", "rgb(154,123,47)", "rgb(82,114,75)"],
    parsing: {
      xAxisKey: "time",
      yAxisKey: "temp",
    },
    plugins: {
      title: {
        display: true,
        text: "Temperaturmessurgen",
      },
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
    const deviceID = [];
    const stats = [];
    const dataset = [];
    const timeStats = [];

    //Get data from API with Axios
    axios
      .get("http://localhost:3009/sensor/stats")
      .then((res) => {
        //Create dataset with label and data
        for (const dataObj of res.data.results) {
          deviceID.push(dataObj.device_id);
          stats.push(dataObj.stats);
          timeStats.push(dataObj.stats.time);
          let numberifiedStats = dataObj.stats.map((item) => {
            return {
              time: parseInt(item.time),
              temp: item.temp,
            };
          });
          let sortedStats = numberifiedStats.sort(comparing);
          dataset.push({
            label: dataObj.device_id,
            data: sortedStats,
          });
        }
        //Set data of chart
        setChartData({
          labels: stats[0].map((item) => Number(item.time)),
          datasets: dataset,
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

export default ChartInHomePage;
