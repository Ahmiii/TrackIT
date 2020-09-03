import React from "react";

const compalinSummary = (props) => {
  return (
    <div className="container section project-detail">
      <div className="card z-depth-0">
        <div className="card-content">
          <p>{props.compalinlist.content}</p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <p>Posted by Ahmed Faraz</p>
          <p>2nd Aug, 2020</p>
        </div>
      </div>
    </div>
  );
};

export default compalinSummary;
