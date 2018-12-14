import React from "react";
import { CardElement } from "react-stripe-elements";
import { Row, Col, Form, Button} from "react-bootstrap";
import "./style.scss";
import ProductItemComponent from "../products/product_item_component";

const StripeComponent = ({ pay, onFieldChange, quantity, product }) => {
  return (

    <div style={{ marginTop: "100px" }}>

      <div className="col-sm-3">
        <div className="card">
          <div class="card-body">
            <ProductItemComponent product={product} />
          </div>
        </div>
      </div>
      <div className="col-sm-4"> 
      </div>
      <div className="col-sm-3">
        <div className="card">
          <div class="card-body">
            <Form onSubmit={e => pay(e)} style={{marginTop:"200px", marginLeft:"50px"}}>

              <h2> Stripe </h2>

              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Col>
                  <Form.Control
                    name="quantity"
                    type="number"
                    placeholder="Enter"
                    value={quantity}
                    onChange={onFieldChange}
                  />
                </Col>
              </Form.Group>

              <div className="checkout">
                <CardElement />
              </div>

              <Form.Group as={Row}>
                <Col style={{ marginTop:"10%",textAlign:"center" }}>
                  <Button type="submit">Pay</Button>
                </Col>
              </Form.Group>

            </Form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StripeComponent;
