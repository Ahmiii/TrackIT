import React from "react";

const compalinSummary = (props) => {
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
            {props.credientials.uid ? (
              <select onChange={() => {}} style={{ display: "block" }}>
                <option value="Issue Resolved">Issue Resolved</option>
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

export default compalinSummary;
