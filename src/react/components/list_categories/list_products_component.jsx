import React from 'react';

import { Container, Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';


const ListProductsComponent = ({productName, productDescription, productPrice, productURL}) => {

    return (
      <div className="col-sm-4" style={{ height: "500px" }}>
      <CardGroup>
        <Card>
          <CardImg top width="66%" src={require("../../../images/" + productURL)}  />
          <CardBody>
            <CardTitle> name of product : {productName} </CardTitle>
            <CardSubtitle>Brand new product for only {productPrice} EURO </CardSubtitle>
            <CardText> {productDescription} </CardText>

          </CardBody>
        </Card>
      </CardGroup>

      <div style={{ display: "absolute", bottom:"-20px", left:"0"}}>
        <Button>Buy</Button>
      </div>
    </div>
    );
};

export default ListProductsComponent;