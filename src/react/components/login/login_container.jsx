import React, { Component } from "react";
import LoginComponent from "./login_component";
import sendApiRequest from "../../utils/api";
import { storeJWT, retrieveJWT } from "../../services/session.js";

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.signin = this.signin.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
  }
  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  signin(e) {
    if (e) {
      e.preventDefault();
    }
    const url = "http://localhost:8000/token-auth/";
    const params = this.state;
    console.log(this.state);

    sendApiRequest({ url, method: "POST", params: params })
      .then(response => {
        console.log(response);
        storeJWT(response.token);
      })
      .catch(error => {
        console.error(error);
        this.setState({});
      });
  }

  componentDidMount() {}
  render() {
    const jwt = retrieveJWT();
    if (jwt) {
      console.log(jwt);
    }
    return (
      <LoginComponent
        username={this.state.username}
        password={this.state.password}
        signin={this.signin}
        onFieldChange={this.onFieldChange}
      />
    );
  }
}
export default LoginContainer;
