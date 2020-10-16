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
      </div>
      <Foooter />
    </div>
  );
};

export default LandingPage;
