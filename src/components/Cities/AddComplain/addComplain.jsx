import React, { Component } from "react";
import { connect } from "react-redux";
import { addComplain } from "../../../store/actions/addComplainAction";
import { Redirect } from "react-router-dom";

class AddComplain extends Component {
  state = {
    city: "",
    complainType: "",
    title: "",
    content: "",
  };

  onCreateCity = (e) => {
    this.setState({ city: e.target.value });
  };

  onCreateType = (e) => {
    this.setState({ complainType: e.target.value });
  };
  onCreateTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  onCreateContent = (e) => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    this.props.addComplains(this.state);
    this.props.history.push("/");
  };

  render() {
    const { authentication } = this.props;

    if (!authentication.uid) {
      return <Redirect to="/Signin" />;
    }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="gray-text text-darken-3">Add Complain</h5>
          <div className="input-field">
            <label>City</label>
            <input
              type="text"
              id="city_text"
              onChange={this.onCreateCity}
            ></input>
          </div>
          <div className="input-field">
            <label>Complain Type</label>
            <input
              type="text"
              id="type_text"
              onChange={this.onCreateType}
            ></input>
          </div>
          <div className="input-field">
            <label>Title</label>
            <input
              type="text"
              id="title_text"
              onChange={this.onCreateTitle}
            ></input>
          </div>

          <div className="input-field">
            <label>Content</label>
            <input
              type="text"
              id="content_title"
              onChange={this.onCreateContent}
            ></input>
          </div>
          <div className="input-field">
            <button className="btn gray lighten-1 z-depth-0">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authentication: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComplains: (complain) => dispatch(addComplain(complain)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComplain);
