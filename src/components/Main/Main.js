import React from "react";
import Category from "../Category/Category";
import Features from "../Features/Features";
import Jumbo from "../Jumbo/Jumbo";
import classes from "./Main.module.css";
import Reviews from "../Reviews/Reviews";
import NewsLetter from "../NewsLetter/NewsLetter";
import MobileFeatures from "../Features/MobileFeatures";
import Logo from "../../assets/Images/Group 375.svg";

const Main = () => {
  return (
    <div>
      <div className="row">
        <div className={classes.text}>
          <p className={classes.heading}>
            Track & improve your scores with our personalised<br></br> math
            tests.
          </p>
          <p className={classes.description}>
            Our assessment platform learns your ability and generates<br></br>{" "}
            questions your growth areas to<br></br> accelerate improvement.
          </p>
          <button className={classes.tryButton}>TRY IT FOR FREE</button>
          <button className={classes.learnButton}>LEARN MORE</button>
        </div>
        <img src={Logo} alt="Logo"></img>
      </div>
      <Jumbo />
      <Category />
      <Features />
      <MobileFeatures />
      <Reviews />
      <NewsLetter />

      <div className="row justify-content-center">
        <p className={classes.p}>
          Our platform is supported by top institutions
        </p>
      </div>
      <div className="row justify-content-center">
        <p className={classes.p1}>
          Our Mission it to provide high-quality personalized education to every
          child.
        </p>
      </div>
    </div>
  );
};

export default Main;
