import React from "react";

import { Route } from "react-router-dom";

import HomeContainer from "./homepage/homepage_container";
import InscriptionContainer from "./inscription/inscription_container";
import LoginContainer from "./login/login_container";
import UserProfileContainer from "./userprofile/userprofile_container";
import LogoutContainer from "./logout/logout_container";
import ListeProduitContainer from "./liste_produit/liste_produit_container";

function RouterOutlet() {
  return (
    <React.Fragment>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/Home" component={HomeContainer} />
      <Route path="/Inscription" component={InscriptionContainer} />
      <Route path="/Login" component={LoginContainer} />
      <Route path="/UserProfile" component={UserProfileContainer} />
      <Route path="/Logout" component={LogoutContainer} />
      <Route path="/Items" component={ListeProduitContainer} />
    </React.Fragment>
  );
}

export default RouterOutlet;
