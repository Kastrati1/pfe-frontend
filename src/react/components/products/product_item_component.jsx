import React from "react";

const ProductItemComponent = ({ product, buy }) => {
  return (
    <div className="wrapper">
      <div className="product-img">
        <img
          src={require("../../../images/" + product.image_url)}
          height="420"
          width="327"
          alt="monimage"
        />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{product.name}</h1>
          <h2>en stock:{product.stock}</h2>
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
export default ProductItemComponent;
