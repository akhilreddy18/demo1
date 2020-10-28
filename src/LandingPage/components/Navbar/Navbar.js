import React from "react";
import { Nav, Navbar, Form, Button, Modal, Col, Row } from "react-bootstrap";
import classes from "./Navbar.module.css";
import { useState } from "react";

const NavbarComponent = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className={classes.navbar} expand="lg">
        <Navbar.Brand href="#home" style={style.brand}>
          <div style={{ paddingLeft: "20px" }}>Edicat</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" style={style.links}>
              Home
            </Nav.Link>
            <Nav.Link href="/aboutus" style={style.links}>
              About Us
            </Nav.Link>
          </Nav>
          <Form inline>
            <Button onClick={handleShow} className={classes.loginButton}>LOG IN</Button>
            <Button className={classes.tryButton}>TRY IT FOR FREE</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-around">
            <div style={{border: "2px solid"}}>
            <Col>
            I will not close if you click outside me. 
            </Col>
            </div>
            <div style={{border: "2px solid"}}>
            <Col>
            Don't even try to press
          escape key.
            </Col>
            </div>
          </Row>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

function handleLogin() {
  alert("clicked");
}

const style = {
  brand: {
    color: "#707070",
    fontSize: "40px",
    fontWeight: "bold",
  },
  links: {
    fontSize: "20px",
    color: "#050505",
    fontWeight: "550",
  },
};

export default NavbarComponent;
