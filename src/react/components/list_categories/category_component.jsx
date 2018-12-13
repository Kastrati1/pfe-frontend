import React from "react";

import { ListGroupItem, ListGroup } from "reactstrap";
import ListProductsComponent from "./list_products_component"

const CategoryComponent = ({ getproductsbycat, categories, products }) => {

  return (
    <div>
    <ListGroup>
      {categories.map((category, i) => (
        <ListGroupItem tag="a"  key={i} onClick={()=>getproductsbycat(category.pk)}>{category.fields.name}</ListGroupItem>
      ))}    
    </ListGroup>
    {products.map((product, i) => (
        <ListProductsComponent 
            productName={product.fields.name} productDescription={product.fields.description} productPrice={product.fields.price} productURL={product.fields.image_url}>
        </ListProductsComponent>
      ))} 
    </div>
  );
};

export default CategoryComponent;
