import React from "react";
import ProductItemComponent from "./product_item_component";
import { CardGroup } from "reactstrap";
//import { Link } from "react-router-dom"; in order to open a new page for selected item

const ProductsComponent = ({ products, buy }) => {
  return (
    <CardGroup>
      {products.map((product, i) => (
        <ProductItemComponent key={i} product={product} buy={buy} />
      ))}
    </CardGroup>
  );
};

export default ProductsComponent;
