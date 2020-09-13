import React, { Component } from "react";
import { connect } from "react-redux";
import { signUpWithAdmin } from "../../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SingUpAsAdmin extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "admin",
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
    this.props.signUpWithAdmin(this.state);
    console.log(this.state);
  };

  render() {
    const { authenticatioin, authenticationError } = this.props;
    if (authenticatioin.uid) {
      return <Redirect to="/" />;
    }
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
            <button className="btn gray lighten-1 z-depth-0">
              SingUp Admin
            </button>
            <div className="red-text center">
              {authenticationError ? <p>{authenticationError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticatioin: state.firebase.auth,
    authenticationError: state.auth.authenticationError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpWithAdmin: (addUser) => dispatch(signUpWithAdmin(addUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingUpAsAdmin);
