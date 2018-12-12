import React, { Component } from "react";
import sendApiRequest from "../../utils/api";
import UserProductsComponent from "./userproducts_component";
import UserInfoComponent from "./userinfo_component";
class UserProfileContainer extends Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    user_products: [],
    isLoading: true
  };


  getCurrentUser() {
    const url = "app1/current_user/";
    sendApiRequest({ url })
      .then(response => {
        this.setState({
          first_name: response.first_name,
          last_name: response.last_name,
          username: response.username,
          email: response.email,
          isLoading: false
        });
      })
      .catch(err => {
        console.log("error userprofile \n ", err);
        this.setState({
          isLoading: false
        });
      });
  }

  getUserProducts() {
    const url = "app1/current_user_products/";
    sendApiRequest({ url })
      .then(response => {
        this.setState({
          user_products: response,
          isRequestDone: true
        });
        console.log("REPONSE USER_PRODUCTS => " + response[0].fields.name);
        console.log("REPONSE USER_PRODUCTS => " + JSON.stringify(response));
      })
      .catch(err => {
        console.log("ERROR userProducts \n", err);
        this.setState({
          isLoading: false
        });
      });

  }

  render() {
    if (this.state.isLoading) {
      return (
        <div class="lds-hourglass">
          <h2>Loading...</h2>
        </div>
      );
    }

    var rows = [];
    var products = this.state.user_products;
    for (var i = 0; i < this.state.user_products.length; i++) {
      rows.push(<UserProductsComponent key={i}
        product_name={products[i].fields.name}
        product_prix={products[i].fields.description}
        product_description={products[i].fields.price}
      />)
    }
    return (
      <React.Fragment>
        <UserInfoComponent
          email={this.state.email}
          username={this.state.username}
          first_name={this.state.first_name}
          last_name={this.state.last_name}
        />
        <tbody>{rows}</tbody>
      </React.Fragment>
    );


  }

  componentDidMount() {
    this.getCurrentUser();
    this.getUserProducts();
  }
}

export default UserProfileContainer;
