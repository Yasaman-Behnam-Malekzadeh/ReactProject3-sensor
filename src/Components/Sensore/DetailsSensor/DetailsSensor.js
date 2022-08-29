import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { FcSettings } from "react-icons/fc";
import WeeklyAvgChart from "./WeeklyAvgChart";
import axios from "axios";
import { Card } from "react-bootstrap";
import WeeklyChart from "./WeeklyChart";
import SystemLog from "./SystemLog";
import Events from "./Events";

function DetailsSensor() {
  //Defind sensor list and overview for GET with API
  const [sensorsList, setSensorsList] = useState({});
  const [overview, setOverview] = useState({});

  //Set loading before loading data
  const [loading, setLoading] = useState(true);

 //Defind id for every sensor
  const { id } = useParams();

  //Get results and overview from API of each sensor
  const getSensorList = () => {
    axios
      .get(`http://localhost:3009/sensor/${id}`)
      .then((res) => {
        setSensorsList(res.data.result);
        setOverview(res.data.result.overview);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getSensorList();
  }, []);

  return (
    <Container>
      {loading && <div>Loading</div>}
      {!loading && (
        <Row>
          <div className="mb-3">
            <Link to="/" className="btn btn-light">
              <BsChevronLeft />
            </Link>
            <span className="h6 text-secondary"> Sensor - </span>
            <span className="h6 text-dark">{sensorsList.device_id}</span>
          </div>
          <div className="d-flex border mb-4 p-0">
            <div className="w-50">
              <div
                style={{ borderBottom: "solid #d3d4d5 1px" }}
                className="p-3 d-flex justify-content-between align-items-center"
              >
                <div>
                  <div className="h6">TOTAL MESSAGES</div>
                  <small>Total messages this week</small>
                </div>
                <div>{overview.total_messages}</div>
              </div>
              <div
                style={{ borderBottom: "solid #d3d4d5 1px" }}
                className="p-3 d-flex justify-content-between align-items-center"
              >
                <div>
                  <div className="h6">DOWN TIME</div>
                  <small>Total down time</small>
                </div>
                <div className="d-flex flex-column">
                  {overview.down_time}
                  <small>sec</small>
                </div>
              </div>
              <div className="p-3 d-flex justify-content-between align-items-center">
                <div>
                  <div className="h6">ALERTS</div>
                  <small>System alerts this week</small>
                </div>
                <div>{overview.alerts}</div>
              </div>
            </div>
            <div className="w-50 p-3 ">
              <WeeklyAvgChart />
            </div>
          </div>
          <Card className="border mb-4 p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>TEMPERATURE DAILY</div>
              <button className="btn btn-light">
                <FcSettings />
              </button>
            </div>
            <Card.Body>
              <WeeklyChart />
            </Card.Body>
          </Card>
          <div className="p-0 d-flex justify-content-between">
            <div style={{ width: "48%" }}>
              <div>SYSTEM LOG</div>
              <div className="p-3 border">
                <SystemLog />
              </div>
            </div>
            <div style={{ width: "48%" }}>
              <div>ACTIVITY</div>
              <div className="p-3 border">
                <Events />
              </div>
            </div>
          </div>
        </Row>
      )}
    </Container>
  );
}

export default DetailsSensor;
