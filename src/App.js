import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomepageContainer from "./react/components/homepage/Homepage_container";
import InscriptionContainer from "./react/components/inscription/Inscription_container";
import LoginContainer from "./react/components/login/Login_container";
class App extends Component {
  render() {
    return (
      <div className="App">
        <HomepageContainer />
        <InscriptionContainer />
        <LoginContainer/>
      </div>
    );
  }
}

export default App;
