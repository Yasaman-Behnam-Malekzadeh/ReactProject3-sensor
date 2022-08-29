import React from "react";
import HomePage from "./HomePage/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddSensor from "./Sensore/AddSensor";
import EditSensor from "./Sensore/EditSensor";
import DetailsSensor from "./Sensore/DetailsSensor/DetailsSensor";

function RoutingPage() {
  return (
    //Routing of all page
    <Router forceRefresh={true}>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/create" render={() => <AddSensor />} />
      <Route path="/edit/:id" render={() => <EditSensor />} />
      <Route path="/details/:id" render={() => <DetailsSensor />} />
    </Router>
  );
}

export default RoutingPage;
