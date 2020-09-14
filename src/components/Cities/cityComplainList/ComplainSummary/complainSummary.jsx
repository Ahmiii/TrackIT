import React, { Component } from "react";
import { connect } from "react-redux";

class CompalinSummary extends Component {
  state = {
    id: "",
    status: "",
  };

  onStatusUpdate = (e) => {
    e.preventDefault();
    this.setState({ status: e.target.value });
    this.setState({ id: this.props.compalinlist.id });
  };

  onHandleSubmit = () => {
    this.props.upDateComplainStatus(this.state);
  };

  render() {
    return (
      <div className="container section project-detail">
        <div className="row">
          <div className="s12 m4 l8">
            <div className="card z-depth-0">
              <div className="card-content">
                <p>{this.props.compalinlist.content}</p>
              </div>

              <div className="card-action grey lighten-4 grey-text">
                <p>
                  Posted by{" "}
                  {this.props.compalinlist.userFirstName[0].toUpperCase() +
                    this.props.compalinlist.userFirstName.substring(1)}{" "}
                  {this.props.compalinlist.userLastName[0].toUpperCase() +
                    this.props.compalinlist.userLastName.substring(1)}
                </p>
                <p>
                  {new Date(
                    this.props.compalinlist.createdAt.seconds * 1000
                  ).toLocaleDateString("en-US")}
                </p>
              </div>
            </div>
          </div>
          <div className="s12 m4 l2">
            <div className="card z-depth-0">
              {/* <div className="card-content"> */}
              <label>Application Status</label>
              {this.props.userCredential.userType === "admin" ? (
                <>
                  <select
                    onChange={this.onStatusUpdate}
                    style={{ display: "block" }}
                  >
                    <option value="Issue Resolved">Issue Resolved</option>
                    <option value="In Progress">In Progres</option>
                  </select>
                  <button onClick={this.onHandleSubmit}>Submit</button>
                </>
              ) : (
                <p>{this.props.compalinlist.status}</p>
              )}

              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    upDateComplainStatus: (updatedStatus) => dispatch(upDateComplainStatus()),
  };
};
export default connect(null, mapDispatchToProps)(CompalinSummary);
