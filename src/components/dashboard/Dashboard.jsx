import React, { Component } from "react";
import CityList from "../Cities/CityList/citylist";
import Notification from "./Notification/Notifications";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const { Cities } = this.props;
    //console.log(Cities);
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <CityList cities={Cities} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    Cities: state.complain.complainCities,
  };
};
export default connect(mapStateToProps)(Dashboard);
