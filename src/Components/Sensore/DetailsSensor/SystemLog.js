import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SystemLogItem from "./SystemLogItem";

function SystemLog() {
    //Defind systemlog list for GET with API
  const [systemLog, setSystemLog] = useState([]);

    //Set loading before loading data
  const [loading, setLoading] = useState(true);

    //Defind id for every sensor
  const { id } = useParams();

    //Comparing time

  const comparing = (a, b) => {
    return b.time - a.time;
  };

    //Get  data from API and change systemlog
  useEffect(() => {
    const getSystemLog = () => {
      axios
        .get(`http://localhost:3009/sensor/${id}/logs`)
        .then((res) => {
          let numberOfTime = res.data.results.map((item) => {
            return {
              time: parseInt(item.time),
              description: item.description,
            };
          });

          let results = numberOfTime.sort(comparing);

          setSystemLog(results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getSystemLog();
  }, []);

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          {systemLog.map((item) => (
            <SystemLogItem
              Time={item.time}
              Description={item.description}
              key={item.time}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SystemLog;
