import React from "react";
import { Link } from "react-router-dom";
import Moment from "moment";

function SensorListItem({ sensorlist }) {
  return (
    <tbody>
      {sensorlist.map((item) => (
        <tr key={item.device_id}>
          <td className="h6">{item.device_id.slice(0, 9)}</td>
          <td className="text-center">
            <div>{Moment(+item.last_online).format("DD MMM YYYY")}</div>
            <small>Last Online</small>
          </td>
          <td className="text-center">
            <div>{item.last_temp}</div>
            <small>Temp</small>
          </td>
          <td className="text-center">
            <div>{item.location}</div>
            <small>Location</small>
          </td>
          <td className="text-center">
            <Link to={`/edit/${item.device_id}`} className="btn btn-light">
              Edit
            </Link>
          </td>
          <td>
            <Link
              to={`/details/${item.device_id}`}
              className="btn btn-secondary"
            >
              Details
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default SensorListItem;
