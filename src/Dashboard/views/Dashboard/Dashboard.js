import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import { withStyles } from "@material-ui/core/styles";
import GridContainer from "../../components/Grid/GridContainer.js";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";

import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
const cardStyle = {
  display: "block",
  transitionDuration: "0.3s",
  //height: "13vw",
  border: "2px solid #4682b4",
  borderRadius: 25,
};
const bodyStyle = {
  fontSize: "12px",
  fontWeight: "900",
};
const buttonStyle = {
  color: "#4682b4",
  textTransform: "none",
  fontSize: "14px",
  fontWeight: "900",
};
const TextTypography = withStyles({
  root: {
    color: "#4682b4",
  },
})(Typography);

export default function Dashboard() {
  return (
    <div>
      <h3>My GCSE Assessments</h3>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card style={cardStyle}>
            <CardContent>
              <TextTypography>
                <Typography
                  variant="h5"
                  component="h2"
                  align="center"
                  style={{ fontWeight: "700" }}
                >
                  Mock
                </Typography>
                <Typography
                  align="center"
                  variant="body2"
                  component="p"
                  style={bodyStyle}
                >
                  <br />
                  Full GCSE Mock Experience.
                  <br />
                  Predict your grade across foundation and higher level
                </Typography>
              </TextTypography>
            </CardContent>
            <CardActions>
              <Box
                style={{
                  paddingLeft: "50px",
                  alignSelf: "center",
                  alignContent: "center",
                }}
              >
                <Button size="small" style={buttonStyle}>
                  Start
                </Button>
                <Button size="small" style={buttonStyle}>
                  Continue
                </Button>
              </Box>
            </CardActions>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: "#eee" /* height: "13vw" */ }}>
            <CardContent>
              <div style={{ paddingLeft: "140px" }}>
                <Fab
                  color="#fff"
                  size="small"
                  aria-label="add"
                  style={{ backgroundColor: "white", marginLeft: "15px" }}
                >
                  <AddIcon />
                </Fab>
              </div>
              <TextTypography>
                <Typography
                  variant="h5"
                  component="h2"
                  align="center"
                  style={{ fontWeight: "700" }}
                >
                  <br></br>
                  Add an assessment
                </Typography>
              </TextTypography>
            </CardContent>
            <CardActions>
              <Box style={{ marginLeft: "40px", alignContent: "center" }}>
                <Button size="small" style={buttonStyle}>
                  View all our 20 full length assessments
                </Button>
              </Box>
            </CardActions>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={4}></GridItem> */}
      </GridContainer>
      <h3>GCSE Assessments Portfolio</h3>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card style={cardStyle}>
            <TextTypography>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  align="center"
                  style={{ fontWeight: "700" }}
                >
                  Tier
                </Typography>
                <Typography
                  align="center"
                  variant="body2"
                  component="p"
                  style={bodyStyle}
                >
                  <br />
                  Practice foundation and higher tier assessments to accurately
                  gauge your ability.
                </Typography>
              </CardContent>
            </TextTypography>
            <CardActions>
              <Box style={{ marginLeft: "45px", alignContent: "center" }}>
                <Button size="small" style={buttonStyle}>
                  View 2 assessments
                </Button>
              </Box>
            </CardActions>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card style={cardStyle}>
            <TextTypography>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  align="center"
                  style={{ fontWeight: "700" }}
                >
                  Topic
                </Typography>
                <Typography
                  align="center"
                  variant="body2"
                  component="p"
                  style={bodyStyle}
                >
                  <br />
                  Topic based assessments to identify your strengths and
                  weaknesses across topics.
                </Typography>
              </CardContent>
            </TextTypography>
            <CardActions>
              <Box style={{ alignContent: "center", paddingLeft: "60px" }}>
                <Button size="small" style={buttonStyle}>
                  View 6 assessments
                </Button>
              </Box>
            </CardActions>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card style={cardStyle}>
            <TextTypography>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  align="center"
                  style={{ fontWeight: "700" }}
                >
                  Calculator
                </Typography>
                <Typography
                  align="center"
                  variant="body2"
                  component="p"
                  style={bodyStyle}
                >
                  <br />
                  Hone your skills across calculator and non-calculator
                  assessments.
                </Typography>
              </CardContent>
            </TextTypography>
            <CardActions>
              <Box style={{ alignContent: "center", paddingLeft: "60px" }}>
                <Button size="small" style={buttonStyle}>
                  View 2 assessments
                </Button>
              </Box>
            </CardActions>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card style={cardStyle}>
            <TextTypography>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  align="center"
                  style={{ fontWeight: "700" }}
                >
                  Grade
                </Typography>
                <Typography
                  align="center"
                  variant="body2"
                  component="p"
                  style={bodyStyle}
                >
                  <br />
                  Practice at your ability, that is questions that are not too
                  easy or too challenging.
                </Typography>
              </CardContent>
            </TextTypography>
            <CardActions>
              <Box style={{ alignContent: "center", paddingLeft: "60px" }}>
                <Button size="small" style={buttonStyle}>
                  View 9 assessments
                </Button>
              </Box>
            </CardActions>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
