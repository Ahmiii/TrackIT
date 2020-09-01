import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/Navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn/SignIn";
import SignUp from "./components/auth/SignUp/SignUp";
import CompalinList from "./components/Cities/cityComplainList/cityComplainList";
import AddComplain from "./components/Cities/AddComplain/addComplain";

class App extends Component {
  // state = {
  //   email: "",
  //   password: "",
  //   user: "",
  // };
  // longin = (e) => {
  //   e.preventDefault();
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(this.state.email, this.state.password)
  //     .then((user) => {
  //       console.log(user);
  //     });
  // };
  // handleOnChangeEmail = (e) => {
  //   this.setState({ email: e.target.value });
  // };
  // handleOnChangePassword = (e) => {
  //   this.setState({ password: e.target.value });
  // };
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/city/:title" component={CompalinList} />
          <Route path="/Signin" component={SignIn} />
          <Route path="/Signup" component={SignUp} />
          <Route path="/addComplain" component={AddComplain} />
        </Switch>
      </div>
    );
  }
}
export default App;
