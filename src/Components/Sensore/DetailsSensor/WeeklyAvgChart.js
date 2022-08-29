import React, { useState, useEffect } from "react";
import axios from "axios";
import LineChart from "../../Public/LineChart";
import { useParams } from "react-router-dom";
import { shape } from "prop-types";

function WeeklyAvgChart() {
    //Get data of chart from API
  const [chartData, setChartData] = useState({});

    //Set loading before loading data
  const [loading, setLoading] = useState(true);

   //Defind id for every sensor
  const { id } = useParams();

    //Set Options for Chartjs
  const chartOption = {
    borderWidth: "2",
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
    const sensorID = [];
    const stats = [];
    const dataset = [];
    const timeStats = [];
    const fill = {
      target: "origin",
      start: "",
      end: "",
      Shape: shape,
    };

    //Get data from API with Axios
    axios
      .get(`http://localhost:3009/sensor/${id}/stats/weekly_avg`)
      .then((res) => {
        for (const dataObj of res.data.results) {
          sensorID.push(dataObj.sensor_id);
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
            label: dataObj.sensor_id,
            data: sortedStats,
            fill,
          });
        }
        
        //Set data of chart
        setChartData({
          labels: stats[0]
            .map((item) => Number(item.time))
            .concat(stats[1].map((item) => Number(item.time))),
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

export default WeeklyAvgChart;
