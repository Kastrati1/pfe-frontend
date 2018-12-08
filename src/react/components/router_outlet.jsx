import React from "react";

import { Route } from "react-router-dom";

import HomeContainer from "./homepage/homepage_container";
import InscriptionContainer from "./inscription/inscription_container";

function RouterOutlet() {
  return (
    <React.Fragment>
      <Route exact path="/" />
      <Route path="/Home" component={HomeContainer} />
      <Route path="/Inscription" component={InscriptionContainer} />
    </React.Fragment>
  );
}

export default RouterOutlet;
