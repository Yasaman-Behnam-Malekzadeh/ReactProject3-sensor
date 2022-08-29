import React from "react";
import "./App.css";
import RoutingPage from "./Components/RoutingPage";
import "react-bootstrap";
import { Col, Row, Container } from "react-bootstrap";
import Menu from "./Components/Layout/Menu";
import UserProfile from "./Components/Layout/UserProfile";
import { Card } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container className="pt-3 pb-3 text-secondary">
        <Row>
          <Col>
            <Card className="h-100 d-flex flex-row overflow-hidden">
              <Menu />
              <div className="w-100">
                <Card.Header className="bg-white" style={{ height: "60px" }}>
                  <UserProfile />
                </Card.Header>

                <Card.Body>
                  <RoutingPage />
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
