import React from "react";
import ProductsComponent from "./products_component";
import { Redirect } from "react-router-dom";
import sendApiRequest from "../../utils/api";
import "./style.scss";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      buy_clicked: false,
      product_id: ""
    };
    this.getProducts = this.getProducts.bind(this);
    this.buy = this.buy.bind(this);
  }
  buy(product) {
    this.setState({
      buy_clicked: true,
      product_id: product.id
    });
  }
  getProducts() {
    const url = "http://localhost:8000/app1/products";
    sendApiRequest({ url })
      .then(response => {
        console.log(response);
        this.setState({ products: response });
      })
      .catch(err => {
        console.log("Error in getProducts container", err);
      });
  }

  componentWillMount() {
    this.getProducts();
  }
  render() {
    return (
      <React.Fragment>
        {this.state.buy_clicked && (
          <Redirect
            to={{
              pathname: "/stripe",
              state: { product_id: this.state.product_id }
            }}
          />
        )}
        <ProductsComponent products={this.state.products} buy={this.buy} />
      </React.Fragment>
    );
  }
}

export default ProductsContainer;
