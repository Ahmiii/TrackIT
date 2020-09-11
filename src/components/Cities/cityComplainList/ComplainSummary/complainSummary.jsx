import React, { useState } from "react";

const CompalinSummary = (props) => {
  const [updatedStatus, setupdatedStatus] = useState(props.compalinlist.status);
  const id = props.compalinlist.id;

  const onStatusUpdate = (e) => {
    e.preventDefault();
    setupdatedStatus(e.target.value);
    console.log(id);
  };
  return (
    <div className="container section project-detail">
      <div className="row">
        <div className="s12 m4 l8">
          <div className="card z-depth-0">
            <div className="card-content">
              <p>{props.compalinlist.content}</p>
            </div>

            <div className="card-action grey lighten-4 grey-text">
              <p>
                Posted by{" "}
                {props.compalinlist.userFirstName[0].toUpperCase() +
                  props.compalinlist.userFirstName.substring(1)}{" "}
                {props.compalinlist.userLastName[0].toUpperCase() +
                  props.compalinlist.userLastName.substring(1)}
              </p>
              <p>
                {new Date(
                  props.compalinlist.createdAt.seconds * 1000
                ).toLocaleDateString("en-US")}
              </p>
            </div>
          </div>
        </div>
        <div className="s12 m4 l2">
          <div className="card z-depth-0">
            {/* <div className="card-content"> */}
            <label>Applicatin Status</label>
            {props.userCredential.userCategory === "admin" ? (
              <select onChange={onStatusUpdate} style={{ display: "block" }}>
                <option value="Issue Resolved">Issue Resolved</option>
                <option value="In Progress">In Progres</option>
              </select>
            ) : (
              <p>{props.compalinlist.status}</p>
            )}

            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompalinSummary;
