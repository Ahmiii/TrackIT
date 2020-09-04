import React, { Component } from "react";
import CityList from "../Cities/CityList/citylist";
import Notification from "./Notification/Notifications";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { Cities } = this.props;

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
  return {
    Cities: state.complain.complainCities,
  };
};
export default connect(mapStateToProps)(Dashboard);
