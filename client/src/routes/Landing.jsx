import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <Fragment>
      <h1 className="landingTitle">Join the Mafia</h1>
      <Link type="button" to="/signup" className="custom-link-button">
        Mount Up
      </Link>
    </Fragment>
  );
};

export default Landing;
