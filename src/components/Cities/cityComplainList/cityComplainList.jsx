import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const complainList = (props) => {
  const cityName = props.match.params.title;
  const Complains = props.complains;
  console.log(Complains);

  return (
    <div className="container section project-detail">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{cityName}-Complain List</span>
          <p>
            I was walking on the street in mid night of 31st August of 2020, all
            of sudden two biker stops near by me and snatch my mobile on gun
            point near Gulshan Block II{" "}
          </p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <p>Posted by Ahmed Faraz</p>
          <p>2nd Aug, 2020</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    complains: state.firestore.ordered.Complains,
  };
};
export default compose(
  firestoreConnect(() => ["Complains"]),
  connect(mapStateToProps)
)(complainList);
