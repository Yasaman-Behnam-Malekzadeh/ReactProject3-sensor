import { BsList } from "react-icons/bs";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { AiOutlineAreaChart } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";

function InnerMenu() {
  return (
    <div
      style={{ width: "240px" }}
      className="d-flex flex-column align-items-center bg-light text-secondary h-100"
    >
      <input
        placeholder="search..."
        className="bg-light p-2 border-secondary mt-3"
      ></input>
      <div
        style={{ height: "60px" }}
        className="d-flex align-items-center w-100 text-secondary"
      >
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <BsHouseDoorFill size={26} />
        </div>
        <span className="h5 mb-0">DASHBOARD</span>
      </div>
      <div
        style={{ height: "60px" }}
        className="d-flex align-items-center w-100"
      >
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <BsFileEarmarkBarGraphFill size={26} />
        </div>

        <span className="h5 mb-0">REPORTS</span>
      </div>
      <div
        style={{ height: "60px" }}
        className="d-flex align-items-center w-100"
      >
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <AiOutlineAreaChart size={26} />
        </div>
        <span className="h5 mb-0">SENSORS</span>
      </div>
      <div
        style={{ height: "60px" }}
        className="d-flex align-items-center w-100"
      >
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <HiUsers size={26} />
        </div>

        <span className="h5 mb-0">USERS</span>
      </div>
      <div
        style={{ height: "60px" }}
        className="d-flex align-items-center w-100"
      >
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <IoSettingsSharp size={26} />
        </div>

        <span className="h5 mb-0">SETTING</span>
      </div>
    </div>
  );
}

export default InnerMenu;
