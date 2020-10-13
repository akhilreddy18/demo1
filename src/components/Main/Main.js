import React from "react";
import Category from "../Category/Category";
import Features from "../Features/Features";
import Jumbo from "../Jumbo/Jumbo";
import classes from "./Main.module.css";
import Reviews from "../Reviews/Reviews";
import NewsLetter from "../NewsLetter/NewsLetter";
import MobileFeatures from "../Features/MobileFeatures";
import Logo from "../../assets/Images/Group 376.svg";
import Logo1 from "../../assets/Images/Image 1.png";
import Logo2 from "../../assets/Images/Image 2.png";
import Logo3 from "../../assets/Images/Image 3.png";
import Logo4 from "../../assets/Images/Image 4.png";
import Logo5 from "../../assets/Images/Image 5.png";
import Logo6 from "../../assets/Images/next.svg";
import Logo7 from "../../assets/Images/previous.svg";

const Main = () => {
  return (
    <div>
      <div className="row">
        <div className={classes.text}>
          <p className={classes.heading}>
            Track & improve your scores with our personalised math tests.
          </p>
          <p className={classes.description}>
            Our assessment platform learns your ability and generates questions
            your growth areas<br></br> to accelerate improvement.
          </p>
          <button className={classes.tryButton}>TRY IT FOR FREE</button>
        </div>
        <img
          src={Logo}
          alt="Logo"
          className={classes.img}
          style={{ width: "40%" }}
        ></img>
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
      <div className={classes.institutions}>
        <img style={style.image} src={Logo3} alt="Logo3"></img>
        <img style={style.image} src={Logo2} alt="Logo2"></img>
        <img style={style.image} src={Logo4} alt="Logo4"></img>
        <img style={style.image} src={Logo1} alt="Logo1"></img>
        <img style={style.image} src={Logo5} alt="Logo5"></img>
      </div>
      <div className={classes.mobileInstitutions}>
        <img
          style={{ width: "10%", marginLeft: "15px" }}
          src={Logo7}
          alt="previous"
        ></img>
        <img src={Logo3} alt="Logo3"></img>
        <img
          style={{ width: "10%", marginRight: "15px" }}
          src={Logo6}
          alt="next"
        ></img>
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

const style = {
  image: {
    width: "13%",
    height: "5%",
  },
};
export default Main;
