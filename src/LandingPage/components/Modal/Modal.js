import classes from "./Modal.module.css";
import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Form,
  Button,
  Modal,
  Col,
  Row,
  ButtonGroup,
} from "react-bootstrap";
import Logo from "../../../assets/Images/Group 2136.png";
import Logo1 from "../../../assets/Images/Group 2164.png";

const Modaljs = (props) => {
  const [firstLayer, setFirstLayer] = useState(true);
  const [secondLayer, setSecondLayer] = useState(false);

  const handlesecondLayer = () => {
    setFirstLayer(false);
    setSecondLayer(true);
  };

  const handleResetLayer = () => {
    setFirstLayer(true);
    setSecondLayer(false);
  };

  return (
    <div>
      <Modal
        show={props.show}
        onHide={() => {
          props.handleClose();
          handleResetLayer();
        }}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Header className={classes.header} closeButton>
          <Modal.Title className={classes.title}>
            {props.auth ? "Login" : "Sign Up"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-around">
            <div style={{ border: "2px solid" }}>
              <Col>
                <p
                  style={{
                    maxWidth: "20vw",
                    fontSize: "1.5vw",
                    textAlign: "center",
                    color: "#0f0e0e",
                  }}
                >
                  Join us on our mission to provide affordable, personalised
                  learning solutions to every child.
                </p>
                <div className="row justify-content-center">
                  <img src={Logo} style={{ width: "15vw" }} alt="Logo"></img>
                </div>
                <p
                  style={{
                    maxWidth: "19vw",
                    fontSize: "1.5vw",
                    textAlign: "center",
                    color: "#0f0e0e",
                  }}
                >
                  By creating your account, you agree to our Terms and
                  Conditions & Privacy Policy.
                </p>
              </Col>
            </div>
            <div style={{ border: "2px solid", padding: "1vw 1vw" }}>
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
                  <button className={classes.signUpButton}>
                    {props.auth ? "Log in with Google" : "Sign Up with Google"}
                  </button>
                  <button className={classes.signUpButton}>
                    {props.auth
                      ? "Log in with Facebook"
                      : "Sign Up with Facebook"}
                  </button>
                  <button
                    style={{ display: props.auth ? "none" : "block" }}
                    className={classes.signUpButton}
                    onClick={handlesecondLayer}
                  >
                    Sign up with Email
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
                  {props.auth
                    ? "Log in with Email"
                    : "Already have an account?"}
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
                        <label style={style.label}>Email*</label>
                        <input
                          className={classes.input}
                          type="text"
                          placeholder="Email"
                        ></input>
                      </div>
                      <div style={{ margin: "0.5vw 0" }}>
                        <label style={style.label}>Password*</label>
                        <input
                          className={classes.input}
                          type="password"
                          placeholder="Password"
                        ></input>
                      </div>
                      <input
                        style={{ marginTop: "2vw" }}
                        type="submit"
                        value="Log in"
                        className={classes.submitForm}
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
                        <label style={style.label}>First name*</label>
                        <input
                          className={classes.input}
                          type="text"
                          placeholder="First name"
                        ></input>
                      </div>
                      <div>
                        <label style={style.label}>Last name*</label>
                        <input
                          className={classes.input}
                          type="text"
                          placeholder="Last name"
                        ></input>
                      </div>
                      <div>
                        <label style={style.label}>Email*</label>
                        <input
                          className={classes.input}
                          type="text"
                          placeholder="Email"
                        ></input>
                      </div>
                      <div>
                        <label style={style.label}>Password*</label>
                        <input
                          className={classes.input}
                          type="password"
                          placeholder="Create Password"
                        ></input>
                      </div>
                      <div>
                        <label style={style.label}>Re-enter Password*</label>
                        <input
                          className={classes.input}
                          type="password"
                          placeholder="Confirm Password"
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
                      ></input>
                    </div>
                  </form>
                </Row>
              </Col>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const style = {
  label: {
    display: "block",
    fontWeight: "bold",
    fontSize: "0.8vw",
    marginBottom: "0",
  },
};

export default Modaljs;
