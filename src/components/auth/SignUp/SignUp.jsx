import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../../store/actions/authActions";

class SingUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  handleOnChangeFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };
  handleOnChangeLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };
  handleOnChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handleOnChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmitHandler} className="white">
          <h5 className="gray-text text-darken-3">SingUp</h5>
          <div className="input-field">
            <label>Firstname</label>
            <input
              type="text"
              id="text_1"
              onChange={this.handleOnChangeFirstName}
            ></input>
          </div>

          <div className="input-field">
            <label>Lastname</label>
            <input
              type="text"
              id="text_2"
              onChange={this.handleOnChangeLastName}
            ></input>
          </div>
          <div className="input-field">
            <label>Email</label>
            <input
              type="email"
              id="email"
              onChange={this.handleOnChangeEmail}
            ></input>
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleOnChangePassword}
            ></input>
          </div>
          <div className="input-field">
            <button className="btn gray lighten-1 z-depth-0">SingUp</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (addUser) => dispatch(signUp(addUser)),
  };
};

export default connect(null, mapDispatchToProps)(SingUp);
