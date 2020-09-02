import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../../store/actions/authActions";
import { Redirect } from "react-router-dom";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  loggingIn = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authenticationError, authentication } = this.props;

    if (authentication.uid) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <form onSubmit={this.loggingIn} className="white">
          <h5 className="gray-text text-darken-3">SingIn</h5>
          <div className="input-field">
            <label>Email</label>
            <input type="Email" id="email" onChange={this.handleEmail}></input>
          </div>

          <div className="input-field">
            <label>Password</label>
            <input
              type="Password"
              id="password"
              onChange={this.handlePassword}
            ></input>
          </div>
          <div className="input-field">
            <button className="btn gray lighten-1 z-depth-0">Login</button>
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
    authenticationError: state.auth.authenticationError,
    authentication: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credential) => dispatch(signIn(credential)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
