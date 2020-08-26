import React from "react";
import CityList from "../Cities/CityList/citylist";
import Notification from "./Notification/Notifications";
import { withStyles } from "@material-ui/core";

const Dashboard = (props) => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <CityList />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notification />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
