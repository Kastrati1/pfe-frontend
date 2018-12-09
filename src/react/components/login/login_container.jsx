import React, { Component } from "react";
import LoginComponent from "./login_component";
import sendApiRequest from "../../utils/api";
import { storeJWT, retrieveJWT } from "../../services/session.js";
import { Redirect } from "react-router-dom";

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loggedin: false,
      isloading: true //used to wait for the fetch before rendering
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
        this.setState({
          loggedin: true
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({ loggedin: false });
      });
  }

  componentDidMount() {
    if (retrieveJWT()) {
      const url = "http://localhost:8000/app1/current_user";
      sendApiRequest({ url })
        .then(response => {
          console.log(response);
          this.setState({
            loggedin: true,
            isloading: false
          });
        })
        .catch(error => {
          console.log("error login container cdm", error);
          this.setState({
            loggedin: false,
            isloading: false
          });
        });
    }
  }
  render() {
    if (this.state.isloading) {
      return <h2>Loading...</h2>;
    }
    return (
      <React.Fragment>
        {this.state.loggedin && <Redirect to="/Userprofile" />}
        {!this.state.loggedin && (
          <LoginComponent
            username={this.state.username}
            password={this.state.password}
            signin={this.signin}
            onFieldChange={this.onFieldChange}
          />
        )}
      </React.Fragment>
    );
  }
}
export default LoginContainer;
