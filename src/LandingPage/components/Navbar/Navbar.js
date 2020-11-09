import React from "react";
import classes from "./Navbar.module.css";
import { Nav, Navbar, Form, Button } from "react-bootstrap";

import { useState } from "react";
import Modaljs from "../Modal/Modal";

const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(false);

  const handleAuth = () => {
    setAuth(true);

    setShow(true);
  };
  const handleClose = () => {
    setAuth(false);

    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className={classes.navbar} expand="lg" fixed="top">
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
            <Button onClick={handleAuth} className={classes.loginButton}>
              LOG IN
            </Button>
            <Button onClick={handleShow} className={classes.tryButton}>
              TRY IT FOR FREE
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Modaljs auth={auth} show={show} handleClose={handleClose}></Modaljs>
    </>
  );
};

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
