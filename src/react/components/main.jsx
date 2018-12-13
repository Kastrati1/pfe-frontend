import React from "react";
import { HashRouter } from "react-router-dom";
import { Elements, StripeProvider } from "react-stripe-elements";
import Layout from "./layout";
import {stripe_public_key} from "../utils/config_env";

function Main() {
  return (
    <HashRouter>
      <StripeProvider apiKey={stripe_public_key()}>
          <Elements>
            <Layout />
          </Elements>
        </StripeProvider>
    </HashRouter>
  );
}

export default Main;
