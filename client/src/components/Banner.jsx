import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.buffalobills.com/schedule/"
      >
        <img
          src="https://static.clubs.nfl.com/image/private/f_auto/bills/hx7lam9gukfsiqte2kv3"
          alt="schedule banner"
          style={{ width: "100%", height: "160px" }}
        ></img>
      </a>
    </div>
  );
};

export default Banner;
