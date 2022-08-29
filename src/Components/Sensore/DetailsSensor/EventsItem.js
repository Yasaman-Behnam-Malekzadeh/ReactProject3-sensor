import React from "react";
import Avatar from "react-avatar";
import MomentJS from "../../Public/MomentJS";

function EventsItem({ EventName, Description, Time }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div>
        <div
          className="d-flex align-items-center"
          style={{ marginBottom: "10px" }}
        >
          <Avatar
            src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
            className="bg-white border"
            size="40"
            round
          />
          <div style={{ marginLeft: "10px" }}>
            <div className="h5 m-0">{EventName}</div>
            <small>
              <MomentJS Time={Time}/>
            </small>
          </div>
        </div>
      </div>
      <div>{Description}</div>
    </div>
  );
}

export default EventsItem;
