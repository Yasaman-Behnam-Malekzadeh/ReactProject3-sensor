import React from "react";
import { BsList } from "react-icons/bs";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { AiOutlineAreaChart } from "react-icons/ai";
import { RiFolderUploadLine } from "react-icons/ri";
import { FaFileImage } from "react-icons/fa";
import { AiTwotoneCalendar } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";

function OuterMenu() {
  return (
    <div
      style={{ width: "60px", cursor: "pointer" }}
      className="d-flex flex-column align-items-center bg-light text-secondary h-100"
    >
      <button
        style={{ height: "60px", width: "inherit" }}
        className="btn btn-secondary rounded-0"
      >
        <BsList size={40} />
      </button>
      <div
        style={{ height: "60px" }}
        className="d-flex align-items-center justify-content-center"
      >
        <BsHouseDoorFill size={26} />
      </div>
      <div
        style={{ height: "60px" }}
        className="d-flex align-items-center justify-content-center"
      >
        <BsFileEarmarkBarGraphFill size={26} />
      </div>
      <div
        style={{ height: "60px" }}
        className="d-flex align-items-center justify-content-center"
      >
        <AiOutlineAreaChart size={26} />
      </div>
      <div
        style={{ height: "60px" }}
        className="d-flex align-items-center justify-content-center"
      >
        <RiFolderUploadLine size={26} />
      </div>
      <div
        style={{ height: "60px" }}
        className="d-flex align-items-center justify-content-center"
      >
        <FaFileImage size={26} />
      </div>
      <div
        style={{ height: "60px" }}
        className="d-flex align-items-center justify-content-center"
      >
        <AiTwotoneCalendar size={26} />
      </div>
      <div
        style={{ height: "60px" }}
        className="d-flex align-items-center justify-content-center"
      >
        <HiUsers size={26} />
      </div>
      <div
        style={{ height: "60px" }}
        className="d-flex align-items-center justify-content-center"
      >
        <IoSettingsSharp size={26} />
      </div>
    </div>
  );
}

export default OuterMenu;
