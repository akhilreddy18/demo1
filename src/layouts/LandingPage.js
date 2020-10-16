import React from "react";
import Navbar from "./../components/Navbar/Navbar";
import Main from "./../components/Main/Main";
import Foooter from "../components/Footer copy/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <Main />
        <Foooter />
      </div>
      
    </div>
  );
};

export default LandingPage;
