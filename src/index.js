import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "./index.css";

// core components
import Admin from "./Dashboard/Admin.js";
import LandingPage from "./LandingPage/LandingPage.js";
import AboutUs from "./LandingPage/components/Navbar/NavigationItems/AboutUs";

const { Amplify } = require("aws-amplify");
const config = require("./config");

const hist = createBrowserHistory();
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    //userPoolWebClientSecret: config.cognito.APP_CLIENT_SECRET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
  /* Storage: {
      region: config.s3.REGION,
      bucket: config.s3.BUCKET,
      identityPoolId: config.cognito.IDENTITY_POOL_ID
    },
    API: {
      endpoints: [
        {
          name: "notes",
          endpoint: config.apiGateway.URL,
          region: config.apiGateway.REGION
        },
      ]
    } */
});

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
