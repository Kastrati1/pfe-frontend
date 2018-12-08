import React, { Component } from "react";
import InscriptionComponent from "./inscription_component";
import sendApiRequest from "../../utils/api";
import "./style.scss";

class InscriptionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      login: "",
      first_name: "",
      last_name: ""
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

    const url = "http://localhost:8000/app1/inscription";
    const params = this.state;
    sendApiRequest({ url, method: "POST", params: params })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
        this.setState({});
      });
  }
  componentDidMount() {}
  render() {
    return (
      <InscriptionComponent
        email={this.state.email}
        login={this.state.login}
        first_name={this.state.first_name}
        last_name={this.state.last_name}
        password={this.state.password}
        signup={this.signup}
        onFieldChange={this.onFieldChange}
      />
    );
  }
}
export default InscriptionContainer;
