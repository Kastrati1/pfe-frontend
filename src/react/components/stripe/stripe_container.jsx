import React from "react";
import StripeComponent from "./stripe_component";
import sendApiRequest from "../../utils/api";
import { injectStripe } from "react-stripe-elements";

import "./style.scss";
class StripeContainer extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      product_id: this.props.location.state.product_id,
      paid: false,
      quantity: "",
      product: ""
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.create_stripe_token = this.create_stripe_token.bind(this);
    this.sendToken2BackEnd = this.sendToken2BackEnd.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  getProduct() {
    console.log("JE SUIS DANS GET PRODUCT");
    const url = `app1/getProduct`;
    var obj = { product_id: this.state.product_id };

    sendApiRequest({
      url,
      method: "POST",
      params: obj
    }).then(response => {
      console.log("JE SUIS ICI");
      console.log(response);
      this.setState({
        product: response[0].fields
      });
    }).catch(error => {
      console.error(error);
    });
  }

  create_stripe_token(e) {
    e.preventDefault();
    this.props.stripe.createToken({ name: "Name" }).then(result => {
      if (result.token) {
        //token successfully created
        console.log("stripe token ", result.token.id);

        //recover product_id here
        this.sendToken2BackEnd(
          result.token.id,
          this.state.product_id,
          this.state.quantity
        );
      } else {
        console.error("stripe token not created");
      }
    });
  }
  sendToken2BackEnd(stripetok, product_id, quantity) {
    var obj = {
      token: stripetok,
      product_id: product_id,
      quantity: quantity
    };

    const url = `app1/pay`;
    sendApiRequest({ url, method: "POST", params: obj })
      .then(response => {
        this.setState({
          paid: true
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getProduct();
  }

  render() {
    console.log(this.state.product);
    if (this.state.paid) {
      return <h2>Thank you </h2>;
    } else if (this.state.product !== "") {
      return (
        <StripeComponent
          pay={this.create_stripe_token}
          onFieldChange={this.onFieldChange}
          quantity={this.state.quantity}
          product={this.state.product}
        />
      );
    } else {
      return (
        <p>
          Chargement ...
        </p>
      );
    }
  }
}
export default injectStripe(StripeContainer);
