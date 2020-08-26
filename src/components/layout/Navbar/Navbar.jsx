import React, { Component } from "react";
import { Link } from "react-router-dom";
import SingInlinks from "./SignInlink";
import SingOutLinks from "./SingOutlink";
import firebase from "../../../config/firebaseConfig";
class navBar extends Component {
  render() {
    return (
      <div>
        <nav className="nav-wrapper grey darken-3">
          <div className="container">
            <Link to="/" className="brand-logo">
              TrackIT
            </Link>
            <SingInlinks
              loggingIn={this.longin}
              handleEmail={this.handleOnChangeEmail}
              handlePassword={this.handleOnChangePassword}
            />
            <SingOutLinks />
          </div>
        </nav>
      </div>
    );
  }
}
export default navBar;
