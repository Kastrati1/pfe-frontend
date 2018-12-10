import React from "react";
import { HashRouter } from "react-router-dom";
import { Elements, StripeProvider } from "react-stripe-elements";
import Layout from "./layout";

function Main() {
  return (
    <HashRouter>
      <StripeProvider apiKey="pk_test_YLLasAftx4BAOY6OIaMRHPtl">
        <div className="example">
          <Elements>
            <Layout />
          </Elements>
        </div>
      </StripeProvider>
    </HashRouter>
  );
}

export default Main;
