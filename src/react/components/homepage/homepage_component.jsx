import React from "react";
import ProductsContainer from "../products/products_container";
import { Container } from "reactstrap";

const HomepageComponent = () => {
  return (
    <Container className="text-center">
      <h1 className="cover-heading">Welcome to IPL-EXPRESS</h1>
      <br />
      <ProductsContainer />
    </Container>
  );
};

export default HomepageComponent;
