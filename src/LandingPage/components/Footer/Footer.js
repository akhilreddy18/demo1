import React, { useState } from "react";
import classes from "./Footer.module.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import ContactUs from "../ContactUs/ContactUs";
import Community from "../Communtiy/Community";

const Footer = () => {
  const [contact, setContact] = useState(false);
  const [community, setCommunity] = useState(false);

  const handleContact = () => setContact(true);
  const handleCommunity = () => setCommunity(true);
  const handleClose = () => {
    setContact(false);
    setCommunity(false);
  };

  return (
    <div>
      <div className={classes.DesktopOnly}>
        <div className={classes.Footer}>
          <div className="row justify-content-around">
            <p className={classes.p}>
              Our mission is to provide high-quality, personalised education to
              every child.
            </p>
            <div className={classes.column}>
              <p className={classes.anchor}>Company</p>
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
              <p className={classes.anchor} onClick={handleCommunity}>
                Community
              </p>
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
              <p className={classes.anchor}>Legal</p>
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
              <p className={classes.anchor} onClick={handleContact}>
                Contact Us
              </p>
              <a className={classes.an} href="/home">
                support@edicat.co.uk
              </a>
            </div>
            <div className={classes.containIcon}>
              <div style={{ paddingTop: "3vw" }}>
                <a href="/instagram">
                  <InstagramIcon
                    style={{ fontSize: "3vw" }}
                    className={classes.icon}
                  />
                </a>
                <a href="/twitter">
                  <TwitterIcon
                    style={{ fontSize: "3vw" }}
                    className={classes.icon}
                  />
                </a>
                <a href="facebook">
                  <FacebookIcon
                    style={{ fontSize: "3vw" }}
                    className={classes.icon}
                  />
                </a>
              </div>
              <p className={classes.footText}>© Edicat Learning Ltd. 2020</p>
            </div>
          </div>
        </div>
        {/* <div className={classes.Footer1}></div> */}
      </div>
      <ContactUs show={contact} handleClose={handleClose}></ContactUs>
      <Community show={community} handleClose={handleClose}></Community>
      <div className={classes.mobileOnly}>
        <div className={classes.row}>
          <p
            style={{
              fontSize: "35px",
              letterSpacing: "2px",
              fontWeight: "bold",
              marginBottom: "0",
              color: "#fff",
            }}
          >
            EDICAT
          </p>
          <div>
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
        <p style={{ fontSize: "10px", color: "#fff" }}>
          © Edicat Learning Ltd. 2020
        </p>
        <div className={classes.row2}>
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
            <div className={classes.column} style={{ marginTop: "30px" }}>
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
            <div className={classes.column} style={{ marginTop: "30px" }}>
              <a className={classes.anchor} href="/company">
                Contact Us
              </a>
              <a className={classes.an} href="/home">
                support@edicat.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
