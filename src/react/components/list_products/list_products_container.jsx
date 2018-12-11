import React from "react";
import sendApiRequest from "../../utils/api";
import ListProductsComponent from "./list_products_component";

class ListProductsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      requestIsDone: false,
    };

    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    const url = "http://localhost:8000/app1/products";
    sendApiRequest({ url, method: "GET" })
      .then(response => {
        this.setState({
          products: response,
          requestIsDone: true,
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
    this.getProducts();
  }

  render() {
    if (this.state.requestIsDone) {
      var rows = [];
      var product = this.state.products;
      for (var i = 0; i < this.state.products.length; i++) {
        rows.push(<ListProductsComponent productName={product[i].name} productPrice={product[i].price} productDescription={product[i].description} productURL={product[i].image_url} />);
      }
      return (
        <React.Fragment>
          <tbody>{rows}</tbody>;
        </React.Fragment>
      );
    }
    else {
      return (
        <React.Fragment>
        </React.Fragment>
      );
    }
  }
}

export default ListProductsContainer;
