import React from "react";
import Moment from "react-moment";

function MomentJS({ Time }) {
  return <Moment fromNow>{new Date(Time)}</Moment>;
}

export default MomentJS;
