import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

function EditSensor() {
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

  //Defind useState for each element in page for change of them
  const [sensorLocation, setSensorLocation] = useState("");
  const [minTemp, setMinTemp] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [customer, setCustomer] = useState();
  const [minTempCheck, setMinTempCheck] = useState(false);
  const [maxTempCheck, setMaxTempCheck] = useState(false);

//Get SensorLIst from API
  const [sensorsList, setSensorsList] = useState([]);

  //Defind id for every sensor
  const { id } = useParams();

  //history for back to the HOMEPAGE
  const history = useHistory();

  //GET sensor's data from API with axios
  useEffect(() => {
    const getSensorsList = async () => {
      const res = await axios.get(`http://localhost:3009/sensor/${id}`);
      setSensorsList(res.data.result);
    };
    getSensorsList();
  }, []);

  //Post data to API with axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3009/sensor/${id}`, {
        customer: customer,
        location: sensorLocation,
        min_temp_limit: minTemp,
        monitor_min_temp: minTempCheck,
        max_temp_limit: maxTemp,
        monitor_max_temp: maxTempCheck,
      })
      .then(function () {
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-5">
        <Col>
          <div className="h6 border-bottom pb-3 mb-3 text-secondary">
            Edit Sensor -
            <span className="text-dark">{" " + sensorsList.device_id}</span>
          </div>
          <div className="text-dark mb-3 h6">{sensorsList.device_id}</div>
          <Form.Control
            type="text"
            placeholder="Location"
            required
            className="mb-3"
            defaultValue={sensorsList.location}
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
              defaultValue={sensorsList.min_temp_limit}
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
          Upadte Sensor
        </Button>
        <Link to="/" className="btn btn-light" style={{ width: "150px" }}>
          Cancel
        </Link>
      </div>
    </Form>
  );
}

export default EditSensor;
