import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/Navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn/SignIn";
import SignUp from "./components/auth/SignUp/SignUp";
import SignUpWithAdmin from "./components/auth/SignUpAdmin/SignUpAdmin";
import CompalinList from "./components/Cities/cityComplainList/cityComplainList";
import AddComplain from "./components/Cities/AddComplain/addComplain";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/city/:title" component={CompalinList} />
          <Route path="/Signin" component={SignIn} />
          <Route exact path="/Signup" component={SignUp} />
          <Route exact path="/signup/admin" component={SignUpWithAdmin} />
          <Route path="/addComplain" component={AddComplain} />
        </Switch>
      </div>
    );
  }
}
export default App;
