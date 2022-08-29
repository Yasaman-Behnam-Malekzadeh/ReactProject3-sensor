import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EventsItem from "./EventsItem";

function Events() {
  //Defind event list for GET with API
  const [eventsList, setEventsList] = useState([]);

  //Set loading before loading data
  const [loading, setLoading] = useState(true);

  //Defind id for every sensor
  const { id } = useParams();

  //Comparing time
  const comparing = (a, b) => {
    return b.time - a.time;
  };

  //Get results data from API of each sensor and change event list
  useEffect(() => {
    const getEventsList = () => {
      axios
        .get(`http://localhost:3009/sensor/${id}/events`)
        .then((res) => {
          let numberOfTime = res.data.results.map((item) => {
            return {
              event_name: item.event_name,
              time: parseInt(item.time), //change string to number
              description: item.description,
            };
          });

          let results = numberOfTime.sort(comparing);
          setEventsList(results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getEventsList();
  }, []);
  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          {eventsList.map((item) => (
            <EventsItem
              key={item.time}
              EventName={item.event_name}
              Description={item.description}
              Time={item.time}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Events;
