import React from "react";
import StripeComponent from "./stripe_component";
import sendApiRequest from "../../utils/api";
import { injectStripe } from "react-stripe-elements";

class StripeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "2",
      paid: false
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

        //recover amount here
        this.sendToken2BackEnd(result.token.id, this.state.amount);
      } else {
        console.log("stripe token not created");
      }
    });
  }
  sendToken2BackEnd(stripetok, amount) {
    var obj = {
      tokenID: stripetok,
      amount: amount
    };

    const url = `http://localhost:8000/app1/pay/`;
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
        />
      );
    }
  }
}
export default injectStripe(StripeContainer);
