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

const awsmobile = {
  "aws_project_region": "eu-west-2",
  "aws_cognito_identity_pool_id": "eu-west-2:280da060-1b30-45ec-9dd3-af45f3483dcf",
  "aws_cognito_region": "eu-west-2",
  "aws_user_pools_id": "eu-west-2_ZXWQfERoo",
  "aws_user_pools_web_client_id": "41hblfs1in9fspqo5hv5fkuikl",
  "oauth": {
      "domain": "edicat.auth.eu-west-2.amazoncognito.com",
      "scope": [
          "phone",
          "email",
          "openid",
          "profile",
          "aws.cognito.signin.user.admin"
      ],
      "redirectSignIn": "https://www.edicat.co.uk/admin",
      "redirectSignOut": "https://www.edicat.co.uk/",
      "responseType": "code"
  },
  "federationTarget": "COGNITO_USER_POOLS"
};

const hist = createBrowserHistory();
/* Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    //userPoolWebClientSecret: config.cognito.APP_CLIENT_SECRET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
    oauth: {
      domain: 'https://edicat.auth.eu-west-2.amazoncognito.com',
      scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      redirectSignIn: 'https://www.edicat.co.uk?signedin=true',
      redirectSignOut: 'https://www.edicat.co.uk/',
      responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
    },
    federationTarget: 'COGNITO_USER_POOLS'
  },
});
 */
Amplify.configure(awsmobile);

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
