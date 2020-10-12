import classes from "./MobileFeatures.module.css";
import React from "react";

const MobileFeatures = () => {
  return (
    <div className={classes.mobileOnly}>
      <div className="jumbotron" style={style.container}>
        <div className="row justify-content-center">
          <h1 className={classes.heading}>Features</h1>
        </div>
        <div className="row">
          <div className="col">
            <p className={classes.p1}>
              Personalised<br></br> Recommendations
            </p>
            <p className={classes.p1}>
              Adaptive<br></br> Test
            </p>
            <p className={classes.p1}>
              Question<br></br> variety
            </p>
          </div>
          <div className="col">
            <p className={classes.p1}>
              {" "}
              Exam-Style<br></br> questions
            </p>
            <p className={classes.p1}>
              Improvement<br></br> Tracker
            </p>
            <p className={classes.p1}>
              Parental<br></br> Reports
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const style = {
  container: {
    backgroundColor: "#f7f7f7",
    borderRadius: "98px",
  },
};
export default MobileFeatures;
