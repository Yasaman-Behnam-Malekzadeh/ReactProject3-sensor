import React from "react";
import { FcSettings } from "react-icons/fc";
import Table from "react-bootstrap/Table";
import SensorListItem from "./SensorListItem";
import PaginationList from "../PaginationList";
import { Link } from "react-router-dom";

function SensorList({ sensorlist, paging, setPage }) {
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="h5">SENSOR LIST</div>

        <div>
          <button className="btn btn-secondary" style={{ marginRight: "10px" }}>
            <FcSettings />
          </button>
          <Link to="/create" className="btn btn-secondary">
            Add Sensor
          </Link>
        </div>
      </div>

      <Table striped style={{ marginButtom: "10px" }}>
        <SensorListItem sensorlist={sensorlist} />
      </Table>
      <PaginationList paging={paging} setPage={setPage} />
    </div>
  );
}

export default SensorList;
