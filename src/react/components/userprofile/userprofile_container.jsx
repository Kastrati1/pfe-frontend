import React, { Component } from "react";
import sendApiRequest from "../../utils/api";
import UserProfileComponent from "./userprofile_component";
class UserProfileContainer extends Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    email: ""
  };

  componentDidMount() {
    const url = "http://localhost:8000/app1/current_user/";
    sendApiRequest({ url })
      .then(response => {
        console.log(response);
        this.setState({
          first_name: response.first_name,
          last_name: response.last_name,
          username: response.username,
          email: response.email
        });
      })
      .catch(err => {
        console.log("error userprofile \n ", err);
      });
  }
  render() {
    return (
      <UserProfileComponent
        email={this.state.email}
        username={this.state.username}
        first_name={this.state.first_name}
        last_name={this.state.last_name}
      />
    );
  }
}

export default UserProfileContainer;
