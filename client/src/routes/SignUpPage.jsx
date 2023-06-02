import React, { Fragment } from "react";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import SignUpForm from "../components/SignUpForm";

const SignUpPage = () => {
  return (
    <Fragment>
      <div className="container">
        <Banner />
        <NavBar />
        <h1 className="landingTitle" align="center">
          Join the Mafia
        </h1>
        <SignUpForm />
      </div>
    </Fragment>
  );
};

export default SignUpPage;
