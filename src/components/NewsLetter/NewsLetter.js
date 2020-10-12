import React from "react";
import classes from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <div className="container-fluid">
      <div className={classes.DesktopOnly}>
        <div className="jumbotron" style={style.Jumbo}>
          <div className="row justify-content-center">
            <div className={classes.card}>
              <h1 className={classes.heading}>Sign up for our newsletter</h1>
              <p className={classes.p}>
                Receive weekly insights on how to best prepare your child for
                GCSEs and information on new features.
              </p>
              <form>
                <input
                  className={classes.input}
                  type="text"
                  placeholder="Enter your email"
                ></input>
                <button className={classes.button}>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.mobileOnly}>
        <div className="jumbotron" style={style.Jumbo}>
          <h1 className={classes.heading}>Sign up for our newsletter</h1>
          <p className={classes.p}>
            Receive weekly insights on how to best prepare your child for GCSEs
            and information on new features.
          </p>
          <form>
            <div className="row justify-content-center">
              <input
                className={classes.input}
                type="text"
                placeholder="Enter your email"
              ></input>
            </div>
            <div className="row justify-content-center">
              <button className={classes.button}>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const style = {
  Jumbo: {
    background: "#f7f7f7",
    borderRadius: "98px",
    marginTop: "50px",
  },
};

export default NewsLetter;
