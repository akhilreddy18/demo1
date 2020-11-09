import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import classes from "./Community.module.css";
import Logo from "../../../assets/Images/Group 2178.png";
import Communities from "../Communties/Communities";

const Community = (props) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [school, setSchool] = useState(false);
  const [investors, setInvestors] = useState(false);
  const [tutor, setTutor] = useState(false);
  const [parent, setParent] = useState(false);
  const [tuitionProvider, setTuitionProvider] = useState(false);

  const handleSchool = () => {
    setShow(true);
    setTitle("Schools");
    setSchool(true);
  };

  const handleInvestors = () => {
    setShow(true);
    setTitle("Investors");
    setInvestors(true);
  };

  const handleTutor = () => {
    setShow(true);
    setTitle("Tutor");
    setTutor(true);
  };

  const handleTuitionProvider = () => {
    setShow(true);
    setTitle("Tuition Provider");
    setTuitionProvider(true);
  };

  const handleParent = () => {
    setShow(true);
    setTitle("Parent");
    setParent(true);
  };

  const handleClose = () => {
    setShow(false);
    setSchool(false);
    setInvestors(false);
    setParent(false);
    setTutor(false);
    setTuitionProvider(false);
    setTitle("");
  };
  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header className={classes.header} closeButton>
          <Modal.Title className={classes.title}>Community</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-around">
            <div style={{ border: "2px solid", paddingTop: "2vw" }}>
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
            <div style={{ border: "2px solid", paddingTop: "2vw" }}>
              <Col className={classes.column}>
                <p
                  style={{
                    color: "#0f0e0e",
                    fontSize: "1.7vw",
                    fontWeight: "550",
                    textAlign: "center",
                  }}
                >
                  Get in touch
                </p>
                <p
                  style={{
                    color: "#0f0e0e",
                    fontSize: "1.4vw",
                    textAlign: "center",
                  }}
                >
                  Start by telling us <br></br>who you are
                </p>
                <button className={classes.button} onClick={handleSchool}>
                  School
                </button>
                <button className={classes.button} onClick={handleInvestors}>
                  Investor
                </button>
                <button className={classes.button} onClick={handleTutor}>
                  Tutor
                </button>
                <button className={classes.button} onClick={handleParent}>
                  Parent
                </button>
                <button
                  className={classes.button}
                  onClick={handleTuitionProvider}
                >
                  Tution Provider
                </button>
              </Col>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
      <Communities
        show={show}
        school={school}
        investors={investors}
        parent={parent}
        tutor={tutor}
        tuitionProvider={tuitionProvider}
        handleClose={handleClose}
        title={title}
      ></Communities>
    </div>
  );
};

export default Community;
