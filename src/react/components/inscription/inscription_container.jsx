import React, { Component } from "react";
import InscriptionComponent from "./inscription_component";
import sendApiRequest from "../../utils/api";
import { storeJWT, retrieveJWT } from "../../services/session.js";
import { Redirect } from "react-router-dom";
import "./style.scss";

class InscriptionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      username: "",
      first_name: "",
      last_name: "",
      loggedin: false,
      isloading: true //used to wait for the fetch before rendering
    };

    this.signup = this.signup.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
  }
  
  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  signup(e) {
    if (e) {
      e.preventDefault();
    }

    const url = "http://localhost:8000/app1/users/";
    const params = {
      username: this.state.username,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      password: this.state.password
    };
    
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
          console.log("error inscription container cdm", error);
          this.setState({
            loggedin: false,
            isloading: false
          });
        });
    } else {
      this.setState({
        loggedin: false,
        isloading: false
      });
    }
  }
  render() {
    if (this.state.isloading) {
      return (
        <div class="lds-hourglass">
          <h2>Loading...</h2>
        </div>
      );
    }
    return (
      <React.Fragment>
        {this.state.loggedin && <Redirect to="/Userprofile" />}
        <InscriptionComponent
          email={this.state.email}
          username={this.state.username}
          first_name={this.state.first_name}
          last_name={this.state.last_name}
          password={this.state.password}
          signup={this.signup}
          onFieldChange={this.onFieldChange}
        />
      </React.Fragment>
    );
  }
}
export default InscriptionContainer;
