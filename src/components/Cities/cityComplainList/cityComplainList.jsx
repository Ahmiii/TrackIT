import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import ComplainSummary from "./ComplainSummary/complainSummary";

const ComplainList = (props) => {
  const cityName = props.match.params.title;

  const complainList = props.complains;

  return (
    <div className="container section project-detail">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{cityName}-Complain List</span>
          {complainList &&
            complainList.map((list) => {
              if (list.city === cityName) {
                return <ComplainSummary compalinlist={list} key={list.id} />;
              }
            })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    complains: state.firestore.ordered.Complains,
  };
};
export default compose(
  firestoreConnect(() => ["Complains"]),
  connect(mapStateToProps)
)(ComplainList);
