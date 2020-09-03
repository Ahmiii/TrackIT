import React, { Component } from "react";
import { Link } from "react-router-dom";
import SingInlinks from "./SignInlink";
import SingOutLinks from "./SingOutlink";
import { connect } from "react-redux";
class navBar extends Component {
  render() {
    const { authentication } = this.props;

    let links = "";
    if (authentication.uid) {
      links = <SingInlinks />;
    } else {
      links = <SingOutLinks />;
    }
    return (
      <div>
        <nav className="nav-wrapper grey darken-3">
          <div className="container">
            <Link to="/" className="brand-logo">
              TrackIT
            </Link>
            {links}
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authentication: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(navBar);
