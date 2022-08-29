import React, { useState } from "react";
import OuterMenu from "./OuterMenu";
import InnerMenu from "./InnerMenu";
import Collapse from "react-bootstrap/Collapse";
import { BsList } from "react-icons/bs";

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="position-relative d-flex h-100">
      <div
        onClick={() => setOpen(!open)}
        aria-controls="innerMenu"
        aria-expanded={open}
      >
        <OuterMenu />
      </div>

      <Collapse in={open} dimension="width">
        <div
          id="innerMenu"
          className="position-absolute h-100"
          style={{ zIndex: "20" }}
        >
          <button
            onClick={() => setOpen(!open)}
            style={{ height: "60px", width: "inherit", textAlign: "left" }}
            className="btn btn-secondary rounded-0 w-100"
          >
            <BsList size={40} />
          </button>
          <InnerMenu />
        </div>
      </Collapse>
    </div>
  );
}

export default Menu;
