import React, { useState } from "react";
import classes from "./CustomModal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Logo from "../../../assets/Images/Group 2136.png";
import { Modal, Col, Row } from "react-bootstrap";
import Logo1 from "../../../assets/Images/Group 2164.png";
import Mail from "../../../assets/Images/Icon Mail.png";
import Facebook from "../../../assets/Images/facebook-icon.png";
import Google from "../../../assets/Images/google-icon.png";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const { Auth, Hub } = require("aws-amplify");

const CustomModal = (props) => {
  Hub.listen("auth", (data) => {
    const { payload } = data;
    this.onAuthEvent(payload);
    console.log(
      "A new auth event has happened: ",
      data.payload.data.username + " has " + data.payload.event
    );
  });

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const checkedTrue = () => setChecked("true");

  const radios = [
    { name: "Student", value: "1" },
    { name: "Parent", value: "2" },
  ];
  const [firstLayer, setFirstLayer] = useState(true);
  const [secondLayer, setSecondLayer] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handlesecondLayer = () => {
    setFirstLayer(false);
    setSecondLayer(true);
  };

  const handleResetLayer = () => {
    setFirstLayer(true);
    setSecondLayer(false);
    setChecked(false);
  };

  const handleInput = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  let history = useHistory();

  const redirect = () => {
    history.push("/admin");
  };
  const signIn = async function handleSignIn(e) {
    e.preventDefault();
    try {
      const amplifyUser = await Auth.signIn(user.email, user.password);
      redirect();
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  const signUp = async function handleSignup(event) {
    // event.preventDefault();
    try {
      const amplifyUser = await Auth.signUp({
        username: user.email,
        password: user.password,
        attributes: {
          email: user.email, // optional
          //phone_number: 1234314,   // optional - E.164 number convention
          // other custom attributes
        },
      }).user;
      redirect();
      console.log("##########");
      console.log(amplifyUser);
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);
  }

  async function handleGoogleSignIn(event) {
    try {
      console.log("clicked");
      const amplifyUser = await Auth.federatedSignIn({ provider: "Google" });
      /* const amplifyUser = await Auth.signUp({
        username: user.email,
        password: user.password,
        attributes: {
          email: user.email, // optional
          //phone_number: 1234314,   // optional - E.164 number convention
          // other custom attributes
        },
      }).user;
      redirect(); */
      //checkUser();
      console.log("##########");
      console.log(amplifyUser);
      //redirect();
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  async function handleFacebookSigIn(event) {
    try {
      console.log("clicked");
      const amplifyUser = await Auth.federatedSignIn({ provider: "Facebook" });
      console.log("######");
      console.log(amplifyUser);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {/* {props.children} */}
        <div
          style={{
            backgroundColor: "#186aa5",
            color: "#fff",
            textAlign: "center",
            fontSize: "2.2vw",
            fontWeight: "bold",
            padding: "10px 0",
          }}
        >
          <p style={{ display: "inline-block", marginBottom: "0" }}>
            {props.auth ? "Log In" : "Sign Up"}
          </p>
          <button
            onClick={() => {
              props.modalClosed();
              handleResetLayer();
            }}
            style={{
              border: "none",
              backgroundColor: "#186aa5",
              color: "#fff",
              marginRight: "10px",
              float: "right",
            }}
          >
            X
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "20px 0",
          }}
        >
          <div style={style.border}>
            <p style={style.join}>
              Join us on our mission to provide affordable, personalised
              learning solutions to every child.
            </p>
            <img src={Logo} style={{ width: "15vw" }} alt="Logo"></img>
            <p style={style.agreement}>
              By creating your account, <br></br> you agree to our Terms and
              Conditions & Privacy Policy.
            </p>
          </div>
          <div style={style.border}>
            <Col style={{ display: firstLayer ? "block" : "none" }}>
              <div
                style={{
                  paddingBottom: "3vw",
                  display: props.auth ? "none" : "block",
                }}
              >
                <button className={classes.combineButton}>Student</button>
                <button className={classes.combineButton}>Parent</button>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <button
                  className={classes.signUpButton}
                  onClick={handleGoogleSignIn}
                >
                  <img
                    style={{
                      width: "2.5vw",
                      height: "2.5vw",
                      float: "left",
                    }}
                    src={Google}
                    alt="Google"
                  ></img>
                  <span style={{ verticalAlign: "middle" }}>
                    {props.auth ? "Log in with Google" : "Sign Up with Google"}
                  </span>
                </button>
                <button
                  className={classes.signUpButton}
                  onClick={handleFacebookSigIn}
                >
                  <img
                    style={{ width: "1.3vw", height: "2.5vw", float: "left" }}
                    src={Facebook}
                    alt="Facebook"
                  ></img>
                  {props.auth
                    ? "Log in with Facebook"
                    : "Sign Up with Facebook"}
                </button>
                <button
                  style={{ display: props.auth ? "none" : "block" }}
                  className={classes.signUpButton}
                  onClick={handlesecondLayer}
                >
                  <img
                    style={{ width: "2.5vw", height: "2vw", float: "left" }}
                    src={Mail}
                    alt="Mail"
                  ></img>
                  Sign Up with Email
                </button>
              </div>
              <p
                style={{
                  maxWidth: "19vw",
                  fontSize: "1.5vw",
                  fontWeight: props.auth ? "bold" : "normal",
                  textAlign: "center",
                  color: "#0f0e0e",
                  marginTop: props.auth ? "0" : "2vw",
                  marginBottom: "0",
                }}
              >
                {props.auth ? "Log in with Email" : "Already have an account?"}
              </p>
              <div style={{ display: props.auth ? "block" : "none" }}>
                <form>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ margin: "0.5vw 0" }}>
                      <label htmlFor="email" style={style.label}>
                        Email*
                      </label>
                      <input
                        className={classes.input}
                        type="text"
                        name="email"
                        value={user.email}
                        placeholder="Email"
                        onChange={handleInput}
                      ></input>
                    </div>
                    <div style={{ margin: "0.5vw 0" }}>
                      <label htmlFor="password" style={style.label}>
                        Password*
                      </label>
                      <input
                        className={classes.input}
                        name="password"
                        value={user.password}
                        type="password"
                        placeholder="Password"
                        onChange={handleInput}
                      ></input>
                    </div>
                    <input
                      style={{ marginTop: "2vw" }}
                      type="submit"
                      value="Log in"
                      className={classes.submitForm}
                      onClick={signIn}
                    ></input>
                  </div>
                </form>
                <p style={{ fontSize: "1.4vw", textAlign: "center" }}>
                  Forgot Password?
                </p>
                <p style={{ fontSize: "1.4vw", textAlign: "center" }}>
                  Don't have an account?
                </p>
              </div>
            </Col>
            <Col style={{ display: secondLayer ? "block" : "none" }}>
              <div className="row justify-content-center">
                <button className={classes.combineButton}>Student</button>
                <button className={classes.combineButton}>Parent</button>
              </div>
              <p
                style={{
                  fontSize: "2vw",
                  fontWeight: "550",
                  textAlign: "center",
                  color: "0f0e0e",
                }}
              >
                Sign up with Email
              </p>
              <Row className="justify-content-center">
                <form>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <label htmlFor="firstName" style={style.label}>
                        First name*
                      </label>
                      <input
                        className={classes.input}
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        placeholder="First name"
                        onChange={handleInput}
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="lastName" style={style.label}>
                        Last name*
                      </label>
                      <input
                        className={classes.input}
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        placeholder="Last name"
                        onChange={handleInput}
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="email" style={style.label}>
                        Email*
                      </label>
                      <input
                        className={classes.input}
                        type="text"
                        name="email"
                        value={user.email}
                        placeholder="Email"
                        onChange={handleInput}
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="password" style={style.label}>
                        Password*
                      </label>
                      <input
                        className={classes.input}
                        type="password"
                        name="password"
                        value={user.password}
                        placeholder="Create Password"
                        onChange={handleInput}
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" style={style.label}>
                        Re-enter Password*
                      </label>
                      <input
                        className={classes.input}
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        placeholder="Confirm Password"
                        onChange={handleInput}
                      ></input>
                    </div>
                    <div
                      style={{ margin: "1vw 0" }}
                      className="row justify-content-center align-items-center"
                    >
                      <input type="checkbox"></input>
                      <p
                        style={{
                          maxWidth: "15vw",
                          fontSize: "1vw",
                          textAlign: "center",
                          color: "#0f0e0e",
                          marginBottom: "0",
                        }}
                      >
                        I would like to receive special offers, exam tips and
                        updates
                      </p>
                    </div>
                    <input
                      type="submit"
                      value="Sign Up"
                      className={classes.submitForm}
                      onClick={signUp}
                    ></input>
                  </div>
                </form>
              </Row>
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
};

const style = {
  join: {
    maxWidth: "20vw",
    fontSize: "1.7vw",
    textAlign: "center",
    lineHeight: "2.2vw",
    color: "#0f0e0e",
  },
  agreement: {
    maxWidth: "19vw",
    fontSize: "1.3vw",
    textAlign: "center",
    marginTop: "1.15vw",
    marginBottom: "0",
    lineHeight: "1.7vw",
    color: "#0f0e0e",
  },
  border: {
    border: "2px solid",
    padding: "10px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    fontSize: "1.2vw",
    marginBottom: "0",
  },
  icon: {
    width: "2vw",
    height: "2vw",
  },
};

export default React.memo(
  CustomModal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
