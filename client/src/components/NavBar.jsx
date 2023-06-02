import React, { Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";

const NavBar = () => {
  return (
    <Fragment>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{ color: "white", fontWeight: "bold" }}>
            Go Bills
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/signup"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Sign Up
              </Nav.Link>
              <Nav.Link
                href="https://www.buffalobills.com/team/players-roster/"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                Roster
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
