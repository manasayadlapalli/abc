import React, { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router";
import IoT from "./IoT";
import Meter from "./Meter";

const Header = props => {
  const { location } = props;
  return (
    <Navbar bg="light" variant="light">
      <Nav activeKey={location.pathname}>
        <Nav.Link href="/iot">IoT</Nav.Link> 
        <Nav.Link href="/meter">Meter</Nav.Link>
      </Nav>
    </Navbar>
  );
};
const HeaderWithRouter = withRouter(Header);

export default function Buttons() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <HeaderWithRouter />
        </Fragment>
      </Router>
    </div>
  );
}


