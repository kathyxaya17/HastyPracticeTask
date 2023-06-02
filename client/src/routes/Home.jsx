import React, { Fragment } from "react";
import Banner from "../components/Banner";
import YoutubeVideo from "../components/YoutubeVideo";
import NavBar from "../components/NavBar";
import Landing from "./Landing";

const Home = () => {
  return (
    <Fragment>
      <div className="container" align="center">
        {" "}
        <Banner />
        <NavBar />
        <Landing />
        <YoutubeVideo embedId="GaX8_QEF2kg" />
      </div>
    </Fragment>
  );
};

export default Home;
