import React, { Component } from "react";
import firebase from "../../../config/firebaseConfig";

class SingUp extends Component {
  // state = {
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   password: "",
  // };
  // handleOnChangeFirstName = (e) => {
  //   this.setState({ firstname: e.target.value });
  // };
  // handleOnChangeLastName = (e) => {
  //   this.setState({ lastname: e.target.value });
  // };
  // handleOnChangeEmail = (e) => {
  //   this.setState({ email: e.target.value });
  // };
  // handleOnChangePassword = (e) => {
  //   this.setState({ password: e.target.value });
  // };
  // signup = (e) => {
  //   e.preventDefault();
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
  //     .then((user) => {
  //       console.log(user);
  //     });
  //   this.props.history.push("/Signin");
  // };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.signup} className="white">
          <h5 className="gray-text text-darken-3">SingIn</h5>
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
            <button className="btn gray lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
export default SingUp;
