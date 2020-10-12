import React from "react";
import classes from "./Jumbo.module.css";

const Jumbo = () => {
  return (
    <div>
      <div className={classes.DesktopOnly}>
        <div
          className="jumbotron"
          style={{ backgroundColor: "#f7f7f7", borderRadius: "98px" }}
        >
          <div className="row justify-content-center">
            <h1 className={classes.heading}>How it works</h1>
          </div>
          <ul className="row justify-content-around">
            <li className={classes.li}>1</li>
            <li className={classes.li}>2</li>
            <li className={classes.li}>3</li>
          </ul>
          <div className="row justify-content-around">
            <p className={classes.p2}>Measure</p>
            <p className={classes.p2}>Understand</p>
            <p className={classes.p2}>Improve</p>
          </div>
          <div className="row justify-content-around">
            <p className={classes.p1} style={{ width: "336px" }}>
              Our test adapts its questions to your ability and needs so you can
              practice the topics that matter.
            </p>
            <p className={classes.p1} style={{ width: "362px" }}>
              Learn about your performance across all learning outcomes to see
              what’s holding you back from the grades you deserve.
            </p>
            <p className={classes.p1} style={{ width: "408px" }}>
              Study the areas we recommend to see the biggest improvement to
              your grades and track improvement from our dashboard.
            </p>
          </div>
        </div>
      </div>
      {/* <div className={classes.mobileOnly}>
        <div
          className="jumbotron"
          style={{ backgroundColor: "#f7f7f7", borderRadius: "98px" }}
        >
          <div className="row justify-content-center">
            <h1 className={classes.heading}>How it works</h1>
          </div>
          <ul>
            <li className={classes.li}>1</li>
            <li className={classes.li}>2</li>
            <li className={classes.li}>3</li>
          </ul>
          <div>
            <p className={classes.p2}>Measure</p>
            <p className={classes.p2}>Understand</p>
            <p className={classes.p2}>Improve</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Jumbo;
