import React, { Component } from "react";

class SignIn extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <form onSubmit={this.props.loggingIn} className="white">
          <h5 className="gray-text text-darken-3">SingIn</h5>
          <div className="input-field">
            <label>Email</label>
            <input
              type="Email"
              id="email"
              onChange={this.props.handleEmail}
            ></input>
          </div>

          <div className="input-field">
            <label>Password</label>
            <input
              type="Password"
              id="password"
              onChange={this.props.handlePassword}
            ></input>
          </div>
          <div className="input-field">
            <button className="btn gray lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
