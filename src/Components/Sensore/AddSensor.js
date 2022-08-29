import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function AddSensor() {

  //Create oPtions of select for customers
  let optionsList = [];
  const optionsInSelect = () => {
    for (let i = 1; i <= 20; i++) {
      optionsList.push(
        <option key={i} value={"Customer-" + i}>
          Customer-{i}
        </option>
      );
    }
    return optionsList;
  };

  const [sensorLocation, setSensorLocation] = useState("");
  const [minTemp, setMinTemp] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [customer, setCustomer] = useState();
  const [minTempCheck, setMinTempCheck] = useState(false);
  const [maxTempCheck, setMaxTempCheck] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3009/sensor", {
        customer: customer,
        location: sensorLocation,
        min_temp_limit: minTemp,
        monitor_min_temp: minTempCheck,
        max_temp_limit: maxTemp,
        monitor_max_temp: maxTempCheck,
      })
      .then(function (response) {
        console.log(response);
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Form action="POST" onSubmit={handleSubmit}>
      <Row className="mb-5">
        <Col>
          <div className="h6 border-bottom pb-3 mb-3">New Sensor</div>

          <Form.Control
            type="number"
            placeholder="Sensor ID"
            className="mb-3"
            disabled
          />
          <Form.Control
            type="text"
            placeholder="Location"
            className="mb-3"
            onChange={(e) => setSensorLocation(e.target.value)}
          />

          <Form.Select
            aria-label="sensorCustomer"
            className="mb-3"
            onChange={(e) => setCustomer(e.target.value)}
          >
            {optionsInSelect()}
          </Form.Select>
        </Col>
        <Col lg="4">
          <div className="h6 border-bottom pb-3 mb-3">Alerts</div>
          <Form.Group controlId="minTemp" className="mb-3">
            <Form.Control
              type="number"
              placeholder="Min Temp. Threshold"
              onChange={(e) => setMinTemp(e.target.value)}
            />
            <Form.Check
              type="checkbox"
              id="minTempCheck"
              label="Monitor Min Temperature"
              onChange={(e) => setMinTempCheck(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="maxTemp" className="mb-3">
            <Form.Control
              type="number"
              placeholder="Max Temp. Threshold"
              onChange={(e) => setMaxTemp(e.target.value)}
            />
            <Form.Check
              type="checkbox"
              id="maxTempCheck"
              label="Monitor Max Temperature"
              onChange={(e) => setMaxTempCheck(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <div className="border-top pt-3">
        <Button
          variant="secondary"
          type="submit"
          style={{ marginRight: "10px", width: "150px" }}
        >
          Add Sensor
        </Button>
        <Link to="/" className="btn btn-light" style={{ width: "150px" }}>
          Cancel
        </Link>
      </div>
    </Form>
  );
}

export default AddSensor;
