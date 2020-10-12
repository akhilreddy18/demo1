import classes from "./Features.module.css";
import React from "react";
import Logo1 from "../../assets/Images/Group 1671.svg";
import Logo2 from "../../assets/Images/Group 1672.svg";
import Logo3 from "../../assets/Images/Group 1673.svg";
import Logo4 from "../../assets/Images/Group 1674.svg";
import Logo5 from "../../assets/Images/Group 1675.png";
import Logo6 from "../../assets/Images/Group 1698.png";

const Features = () => {
  return (
    <div className={classes.DesktopOnly}>
      <div className="jumbotron" style={style.Jumbo}>
        <div className="row justify-content-center">
          <h1 className={classes.heading}>Features</h1>
        </div>
        <div className="row justify-content-center">
          <div className={classes.card}>
            <div className="row justify-content-around">
              <img src={Logo2} alt="Logo2"></img>
              <img src={Logo3} alt="Logo3"></img>
              <img src={Logo1} alt="Logo1"></img>
            </div>
            <div className="row justify-content-around">
              <p className={classes.p1}>Personalised Recommendations</p>
              <p className={classes.p1}>Adaptive Test</p>
              <p className={classes.p1}>Improvement Tracker</p>
            </div>
            <div className="row justify-content-around">
              <p className={classes.p2}>
                Receive feedback on what you need to focus on to make the
                biggest improvement.
              </p>
              <p className={classes.p2}>
                Our tests adopt their difficulty based on your performance so
                you're always being challenged to grow.
              </p>
              <p className={classes.p2}>
                Track your performance across all learning outcomes so you can
                see how much you've improved.
              </p>
            </div>
            <div className="row justify-content-around">
              <img src={Logo5} alt="Logo2"></img>
              <img src={Logo6} alt="Logo3"></img>
              <img src={Logo4} alt="Logo1"></img>
            </div>
            <div className="row justify-content-around">
              <p className={classes.p1}>Exam-Style Questions</p>
              <p className={classes.p1}>Questions Variety</p>
              <p className={classes.p1}>Parental Reports</p>
            </div>
            <div className="row justify-content-around">
              <p className={classes.p2}>
                Our questions are the type you'd expect to get in exams to give
                you good practice.
              </p>
              <p className={classes.p2}>
                We have over 700 questions that cover the entire curriculum that
                you can filter by topic, difficulty and tier.
              </p>
              <p className={classes.p2}>
                Receive reports on your child's performance and improvement so
                you're always kept in the loop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const style = {
  Jumbo: {
    background: "#f7f7f7",
    borderRadius: "98px",
  },
};
export default Features;
