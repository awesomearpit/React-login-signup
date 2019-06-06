import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import SignIn from "./Containers/Signin";
import SignUp from "./Containers/Signup";
import Dashboard from "./Containers/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={SignUp} />
            <Route path="/login" component={SignIn} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
