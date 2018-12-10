import React from "react";
import sendApiRequest from "../../utils/api";
import ListProductsComponent from "./list_products_component";

class ListProductsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };

    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    const url = "http://localhost:8000/app1/products";
    sendApiRequest({ url, method: "GET" })
      .then(response => {
        console.log("THE RESPONSE ==> " + response);
        console.log("reponse du get dans back ===>" + JSON.stringify(response));
        console.log("parcourir le JSon ===> " + response[0].name);
        //console.log("reponse du get dans back ===>"+ JSON.stringify(response) );
        //console.log("resp indice 0  de reponse ==> " + response[0] );
        //response = JSON.stringify(response);
        this.setState({
          products: response //object javascript
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          products: []
        });
      });
    console.log("FIN DE getProducts");
  }

  componentDidMount() {
    console.log("dans comp did mount");
    this.getProducts();
  }

  render() {
    var rows = [];
    for (var i = 0; i < 2; i++) {
      rows.push(<ListProductsComponent productName={"gggy"} />);
    }
    return (
      <React.Fragment>
        <tbody>{rows}</tbody>;
      </React.Fragment>
    );
  }
}

export default ListProductsContainer;
