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
      quantity: ""
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.create_stripe_token = this.create_stripe_token.bind(this);
    this.sendToken2BackEnd = this.sendToken2BackEnd.bind(this);
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
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
        console.log("stripe token not created");
      }
    });
  }
  sendToken2BackEnd(stripetok, product_id, quantity) {
    var obj = {
      token: stripetok,
      product_id: product_id,
      quantity: quantity
    };

    const url = `http://localhost:8000/app1/pay`;
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
    console.log(this.props);
  }
  render() {
    if (this.state.paid) {
      return <h2>Thank you </h2>;
    } else {
      return (
        <StripeComponent
          pay={this.create_stripe_token}
          onFieldChange={this.onFieldChange}
          quantity={this.state.quantity}
        />
      );
    }
  }
}
export default injectStripe(StripeContainer);
