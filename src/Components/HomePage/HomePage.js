import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { AiTwotoneShop } from "react-icons/ai";
import { AiFillTag } from "react-icons/ai";
import { MdMonitor } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import SensorList from "./SensorList/SensorList";
import ChartInHomePage from "./ChartInHomePage";
import axios from "axios";

function HomePage() {
  //Get all sensors from API
  const [sensors, setSensors] = useState([]);

  //Set loading before loading data
  const [loading, setLoading] = useState(true);

  //Get paging from API
  const [paging, setPaging] = useState([]);

  //Change page with changing PaginationList
  const [page, setPage] = useState(1);

  const totalItems = paging.count;

  //Get results ang paging from API with axios
  useEffect(() => {
    const getSensorList = async () => {
      const res = await axios.get(`http://localhost:3009/sensor?page=${page}`);
      setSensors(res.data.results);
      setPaging(res.data.paging);
    };
    setLoading(false);
    getSensorList();
  }, [page]);

  return (
    <div>
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body className="d-flex flex-row align-items-center justify-content-between">
              <div>
                <div className="h6">TOTAL SENSORS</div>
                {loading && <div>Loading</div>}
                {!loading && <small>{totalItems}</small>}
              </div>
              <AiTwotoneShop size={30} />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="d-flex flex-row align-items-center justify-content-between">
              <div>
                <div className="h6">OPEN ALERTS</div>
                <small>2</small>
              </div>
              <AiFillTag size={30} />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="d-flex flex-row align-items-center justify-content-between">
              <div>
                <div className="h6">TOTAL CUSTOMERS</div>
                <small>14</small>
              </div>
              <MdMonitor size={30} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mb-5">
        <Card.Header className="d-flex align-items-center justify-content-between bg-white">
          <div>SENSOR TEMPERATURES</div>
          <button className="btn btn-light d-flex">
            <FcSettings />
          </button>
        </Card.Header>

        <Card.Body
          style={{
            backgroundColor: "black",
          }}
        >
          <ChartInHomePage />
        </Card.Body>
      </Card>

      {loading && <div>Loading</div>}
      {!loading && (
        <SensorList sensorlist={sensors} paging={paging} setPage={setPage} />
      )}
    </div>
  );
}

export default HomePage;
