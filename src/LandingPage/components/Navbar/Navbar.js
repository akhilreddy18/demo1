import React from "react";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import classes from "./Navbar.module.css";

const navbar = () => {
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
            <Button className={classes.loginButton}>LOG IN</Button>
            <Button className={classes.tryButton}>TRY IT FOR FREE</Button>
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
  links: {
    fontSize: "20px",
    color: "#050505",
    fontWeight: "550",
  },
};

export default navbar;
