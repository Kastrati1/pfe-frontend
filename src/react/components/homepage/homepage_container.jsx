import React, { Component } from "react";
import HomepageComponent from "./homepage_component";
import sendApiRequest from "../../utils/api";

class HomepageContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.getAllproducts = this.getAllproducts.bind(this);
  }

  getAllproducts(params) {
    sendApiRequest({ url: "app1/" })
      .then(products => {
        console.log(products);
        this.setState({
          products: products
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          products: []
        });
      });
  }

  componentDidMount() {
  }

  render() {
    return <HomepageComponent products={this.state.products} />;
  }
}

export default HomepageContainer;
