import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { TbMinusVertical } from "react-icons/tb";
import MomentJS from "../../Public/MomentJS";

function SystemLogItem({ Time, Description }) {
  return (
    <div className="d-flex justify-content-between align-items-start">
      <div className="d-flex align-items-flex-start">
        <div className="d-flex flex-column">
          <GoPrimitiveDot size={20} />
          <TbMinusVertical size={20} />
        </div>
        {Description}
      </div>
      <small className="text-end" style={{ minWidth: "100px" }}>
        <MomentJS Time={Time} />
      </small>
    </div>
  );
}

export default SystemLogItem;
