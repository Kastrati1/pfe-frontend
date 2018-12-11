import React from "react";
import { CardElement } from "react-stripe-elements";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./style.scss";

const StripeComponent = ({ pay, onFieldChange, quantity }) => {
  //const amount = 10;  //exemple 10euros
  return (
    <Row style={{ marginRight: "50%" }}>
      <Col style={{ marginTop: "200px" }}>
        <Form onSubmit={e => pay(e)}>
          <h2> Stripe </h2>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Col sm={13} style={{ marginRight: "80%" }}>
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
            {/* <button onClick={()=>pay(amount)}>Send</button> */}
          </div>
          <Form.Group as={Row}>
            <Col style={{ marginTop: "10%" }}>
              <Button type="submit">Pay</Button>
            </Col>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default StripeComponent;
