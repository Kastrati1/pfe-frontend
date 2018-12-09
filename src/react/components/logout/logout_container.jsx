import React, { Component } from "react";
import { deleteSession } from "../../services/session.js";
import { Redirect } from "react-router-dom";

class LogoutContainer extends Component {
  state = {};

  componentDidMount() {
    deleteSession();
  }
  render() {
    return <Redirect to="/Login" />;
  }
}

export default LogoutContainer;
