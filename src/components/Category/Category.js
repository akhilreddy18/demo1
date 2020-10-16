import React from "react";
import classes from "./Category.module.css";

const Category = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <h1 className={classes.heading}>Practice questions by...</h1>
      </div>
      <ul className={classes.containCat}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className={classes.containCat}>
        <p className={classes.Category}>Tier</p>
          <p className={classes.Category}>Grade</p>
          <p className={classes.Category}>Topic</p>
        <p className={classes.Category}>Calculator</p>
      </div>
      <div className={classes.row}>
          <p className={classes.Category}>Foundation</p>
          <p className={classes.Category}>Higher</p>
      </div>
      <div className="row justify-content-center">
        <p className={classes.p}>Don't know where to start? </p>
      </div>
      <div className="row justify-content-center">
        <p className={classes.p1}>
          <strong>Click here</strong> to take a comprehensive assessment and
          we'll tell you what to focus on
        </p>
      </div>
    </div>
  );
};

export default Category;
