import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      role: ""
    };
  }

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  signUp = e => {
    if (this.validityCheck()) {
      // const { name, value } = e.target;

      const signupData = {
        email: this.state.email,
        password: this.state.password,
        role: this.state.role
      };

      try {
        localStorage.setItem("signupData", JSON.stringify(signupData));
        this.props.history.push("/login");
      } catch (e) {
        console.log(e.message);
        alert("User could not be created");
      }
    } else {
      alert("Enter valid email address and password");
    }
  };

  validityCheck = () => {
    return (
      this.state.email &&
      this.state.email.includes("@") &&
      this.state.email.includes(".") &&
      this.state.password &&
      this.state.confirmPassword &&
      this.state.password === this.state.confirmPassword &&
      this.state.role &&
      this.checkPassword(this.state.password)
    );
  };

  checkPassword = str => {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
  };

  render() {
    const { email, password, confirmPassword, role } = this.state;

    return (
      <div className="card bg-light">
        <article className="card-body mx-auto" style={{ "max-width": "400px" }}>
          <h4 className="card-title mt-3 text-center">Create Account</h4>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-envelope" />{" "}
              </span>
            </div>
            <input
              name="email"
              className="form-control"
              placeholder="Email address"
              type="email"
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-lock" />{" "}
              </span>
            </div>
            <input
              name="password"
              className="form-control"
              placeholder="Create password"
              type="password"
              value={password}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-lock" />{" "}
              </span>
            </div>
            <input
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm password"
              type="password"
              value={confirmPassword}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-building" />{" "}
              </span>
            </div>
            <select
              name="role"
              className="form-control"
              value={role}
              onChange={this.changeHandler}
            >
              <option selected=""> Select Role</option>
              <option value="admin">Admin</option>
              <option value="member">Member</option>
            </select>
          </div>
          <div className="form-group">
            <button onClick={this.signUp} className="btn btn-primary btn-block">
              {" "}
              Create Account{" "}
            </button>
          </div>
          <p className="text-center">
            Have an account? <Link to={`/login`}>Log In</Link>{" "}
          </p>
        </article>
      </div>
    );
  }
}

export default withRouter(Signup);
