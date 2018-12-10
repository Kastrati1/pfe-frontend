import React from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
const StripeComponent = ({ pay, onFieldChange }) => {
  //const amount = 10;  //exemple 10euros
  return (
    <Container>
      <Row>
        <Col style={{ marginTop: "200px" }}>
          <Form onSubmit={e => pay(e)}>
            <h2> Stripe </h2>

            {/* <Form.Group as={Row} controlId="formHorizontalEmail">
              <Col sm={13}>
                <Form.Control
                  name="amount"
                  type="number"
                  placeholder="Cents"
                  value={amount}
                  onChange={onFieldChange}
                />
              </Col>
            </Form.Group> */}
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
    </Container>
  );
};

export default StripeComponent;
