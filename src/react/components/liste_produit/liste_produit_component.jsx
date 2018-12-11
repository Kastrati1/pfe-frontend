import React from 'react';

import { Container, Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';


const ListeProduitComponent = ({productName, productDescription, productPrice, productURL}) => {

    return (
      <Container>
        <CardGroup>     
          <Card>
            <CardImg top width="20%" src="https://www.sunrise.ch/fr/petites-entreprises/appareils/accessoires/apple-airpods/apple_airpods_white.primaryproductimage.code-MDAwMDAwMDAwMDAwMDE3NDk0.format-hardware-configurator-l.png" alt="Card image cap" />
            <CardBody>
              <CardTitle> name of product : {productName} </CardTitle>
              <CardSubtitle>Brand new product for only {productPrice} EURO </CardSubtitle>
              <CardText> {productDescription} </CardText>
              <Button>Buy</Button>
            </CardBody>
          </Card>
        </CardGroup>
      </Container>
    );
};

export default ListeProduitComponent;