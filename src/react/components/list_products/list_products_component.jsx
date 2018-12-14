import React from 'react';

import {Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';


const ListProductsComponent = ({ productName, productDescription, productPrice, productURL }) => {

  return (
    <div className="col-sm-4" style={{ height: "500px" }}>
      <CardGroup>
        <Card>
          <CardImg top width="66%" src="https://www.sunrise.ch/fr/petites-entreprises/appareils/accessoires/apple-airpods/apple_airpods_white.primaryproductimage.code-MDAwMDAwMDAwMDAwMDE3NDk0.format-hardware-configurator-l.png" alt="Card image cap" />
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