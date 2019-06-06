import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AdminDashboard from "../Components/AdminDashboard";
import MemberDashboard from "../Components/MemberDashboard";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.role = JSON.parse(localStorage.getItem("signupData")).role;
  }

  logout = async () => {
    await localStorage.removeItem("signupData");
    alert("User logged out");
    this.props.history.push("/");
  };

  render() {
    let dashboard;
    if (this.role === "admin") {
      dashboard = <AdminDashboard />;
    } else if (this.role === "member") {
      dashboard = <MemberDashboard />;
    }
    return (
      <>
        {dashboard}
        <br />
        <br />
        <button onClick={this.logout} className="btn btn-primary">
          Logout
        </button>
      </>
    );
  }
}

export default withRouter(Dashboard);
