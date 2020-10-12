import React from "react";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import classes from "./Navbar.module.css";

const navbar = () => {
  return (
    <>
      <Navbar className={classes.navbar} expand="lg">
        <Navbar.Brand href="#home" style={style.brand}>
          Edicat
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" style={style.links}>
              Home
            </Nav.Link>
            <Nav.Link href="#link" style={style.links}>
              Our Assessments
            </Nav.Link>
            <Nav.Link href="#link" style={style.links}>
              Resources
            </Nav.Link>
            <Nav.Link href="#link" style={style.links}>
              About Us
            </Nav.Link>
          </Nav>
          <Form inline>
            <Button className={classes.button}>Log In</Button>
            <Button className={classes.button}>Sign Up</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const style = {
  brand: {
    color: "#707070",
    fontSize: "40px",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#186aa5",
    width: "117.5px",
    height: "58px",
    fontSize: "24px",
    color: "#e8eff7",
    margin: "0 20px",
  },
  links: {
    fontSize: "20px",
    color: "#050505",
    fontWeight: "550",
  },
};

export default navbar;
