import React from "react";
import Navbar from "./../components/Navbar/Navbar";
import Main from "./../components/Main/Main";
import Footer from "./../components/Footer/Footer";

const LandingPage = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default LandingPage;