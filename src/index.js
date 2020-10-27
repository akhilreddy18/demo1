import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "./index.css";

// core components
import Admin from "./Dashboard/Admin.js";
import LandingPage from "./LandingPage/LandingPage.js";
import AboutUs from "./LandingPage/components/Navbar/NavigationItems/AboutUs";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/admin" component={Admin} />
      <Route path="/aboutus" component={AboutUs} />
      <Redirect to="/"></Redirect>
    </Switch>
  </Router>,
  document.getElementById("root")
);
