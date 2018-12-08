import React, { Component } from "react";

import HomepageComponent from "./homepage_component";
import sendApiRequest from "../../utils/api";

class HomepageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };

    this.getAllproducts = this.getAllproducts.bind(this);
  }

  //get request to backend to get all products
  getAllproducts(params) {
    sendApiRequest({ url: "http://localhost:8000/app1/" })
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
    //this.getAllproducts();
  }
  render() {
    return <HomepageComponent products={this.state.products} />;
  }
}

export default HomepageContainer;
