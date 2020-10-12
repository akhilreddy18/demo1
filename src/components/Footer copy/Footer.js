import React from "react";
import classes from "./Footer.module.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

const Footer = () => {
  return (
    <div>
      <div className={classes.DesktopOnly}>
        <div className={classes.Footer}>
          <p className={classes.p}>
            Our mission is to provide high-quality, personalised education to
            every child.
          </p>
          <div className={classes.column}>
            <a className={classes.anchor} href="/company">
              Company
            </a>
            <a className={classes.an} href="/home">
              Home
            </a>
            <a className={classes.an} href="/aboutus">
              About us
            </a>
            <a className={classes.an} href="/resources">
              Resources
            </a>
            <a className={classes.an} href="/signup">
              Sign up
            </a>
          </div>
          <div className={classes.column}>
            <a className={classes.anchor} href="/company">
              Community
            </a>
            <a className={classes.an} href="/home">
              Parents
            </a>
            <a className={classes.an} href="/aboutus">
              Schools
            </a>
            <a className={classes.an} href="/resources">
              Investors
            </a>
            <a className={classes.an} href="/signup">
              Careers
            </a>
          </div>
          <div className={classes.column}>
            <a className={classes.anchor} href="/company">
              Legal
            </a>
            <a className={classes.an} href="/home">
              Terms of Use
            </a>
            <a className={classes.an} href="/aboutus">
              Privacy Policy
            </a>
            <a className={classes.an} href="/resources">
              GDPR
            </a>
          </div>
          <div className={classes.column}>
            <a className={classes.anchor} href="/company">
              Contact Us
            </a>
            <a className={classes.an} href="/home">
              support@edicat.co.uk
            </a>
          </div>
          <div style={{ float: "right" }}>
            <a href="/instagram">
              <InstagramIcon fontSize="large" className={classes.icon} />
            </a>
            <a href="/twitter">
              <TwitterIcon fontSize="large" className={classes.icon} />
            </a>
            <a href="facebook">
              <FacebookIcon fontSize="large" className={classes.icon} />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.mobileOnly}>
        <div className={classes.mobileFooter}>
          <p className={classes.p1}>
            {" "}
            contact us @{" "}
            <a style={{ color: "#fff" }} className={classes.a} href="#support">
              support@edicat.co.uk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
