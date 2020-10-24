import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons;
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import styles from "../../../assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import pic from "../../../assets/img/sidebar-2.jpg";

//const useStyles = makeStyles(styles);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    paddingRight: "20px",
    flexGrow: 1,
  },
}));

export default function AdminNavbarLinks() {
  const classes = useStyles();
  /*  const [openProfile, setOpenProfile] = React.useState(null);
  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  }; */
  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            John Doe
          </Typography>
          <Avatar alt="Remy Sharp" src={pic} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
