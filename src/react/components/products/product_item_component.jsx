import React from "react";
// import {
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   Button
// } from "reactstrap";

const ProductItemComponent = ({ product, buy }) => {
  return (
    <div className="wrapper">
      <div className="product-img">
        <img
          src={require("../../../images/" + product.image_url)}
          // change pas s'il te plait
          height="420"
          width="327"
          alt="monimage"
        />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{product.name}</h1>
          <h2>en stock:{product.stock}</h2>
          {/* <p>Harvest Vases are a reinterpretation<br> of peeled fruits and vegetables as<br> functional objects. The surfaces<br> appear to be sliced and pulled aside,<br> allowing room for growth. </p> */}
          <p>{product.description}</p>
        </div>
        <div className="product-price-btn">
          <p>
            <span>{product.price}€</span>
          </p>
          <button type="button" onClick={() => buy(product)}>
            buy now
          </button>
        </div>
      </div>
    </div>
  );
};

/* <Card>
      <CardImg
        top
        width="25%"
        src={require("../../../images/" + product.image_url)}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{product.name}</CardTitle>
        <CardSubtitle>{product.price}</CardSubtitle>
        <CardText>{product.description}</CardText>
        <Button onClick={() => buy(product)}>Buy</Button>
      </CardBody>
      <br />
      <br />
    </Card> */

export default ProductItemComponent;
