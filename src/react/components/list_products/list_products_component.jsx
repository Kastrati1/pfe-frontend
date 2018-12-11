import React from 'react';

import { Container, Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';


<<<<<<< HEAD:src/react/components/list_products/list_products_component.jsx
const ListProductsComponent = ({productName, productDescription, productPrice}) => {
=======
const ListeProduitComponent = ({productName, productDescription, productPrice, productURL}) => {
>>>>>>> 9a108096b84b23335e37456ba3324745757193b8:src/react/components/liste_produit/liste_produit_component.jsx

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

export default ListProductsComponent;