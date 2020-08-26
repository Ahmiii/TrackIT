import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";

const styles = () => ({
  Cards: {
    borderRadius: "5px",
    padding: "30px",
    margin: "30px",
    boxShadow: "0px 5px 20px rgb(71, 71,71)",
    cursor: "pointer",
    justifyContent: "center",
  },
});

const CitySummary = (props) => {
  const { classes, project } = props;
  return (
    <div className={classes.Cards}>
      <div className="card-content gray-text text-darken-3">
        <Link className="card-title" to="/complainList">
          <h3>{project.title}</h3>
        </Link>
        <p>{project.content}</p>
        <p className="grey-text">23 Aug, 1 AM</p>
      </div>
    </div>
  );
};
export default withStyles(styles)(CitySummary);
