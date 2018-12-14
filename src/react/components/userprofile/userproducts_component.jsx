import React from 'react';
import { CardImg } from 'reactstrap';

const UserProductsComponent = ({ product_name, product_description, product_prix, product_photo }) => {
  return (
    <div className="container" style={{ backgroundColor: "white", border: "1px solid #7C6D6D", marginTop: "2%" }}>
      <fieldset>
        <div className="form-row">
          <div class="form-group col-md-6">
            <CardImg top width="100%" src={require("../../../images/" + product_photo)} style={{ width: "318px", height: "30%", marginTop: "3%", marginBottom: "auto", marginLeft: "auto", marginRight: "auto" }} alt="Card image cap" />
          </div>
        </div>
        <div class="form-group col-md-6" style={{ marginTop: "3%", marginBottom: "auto", marginLeft: "auto", marginRight: "auto" }}>
          <div class="form-group">
            <label>{product_name}</label>
          </div>
          <div class="form-group">
            <label>{product_prix}</label>
          </div>
          <div class="form-group">
            <label>{product_description}</label>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default UserProductsComponent;