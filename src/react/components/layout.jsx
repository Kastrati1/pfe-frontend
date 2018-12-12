import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navigation from "./navigation/navigation";
import RouterOutler from "./router_outlet";
import Footer from "./footer/footer";

export class Layout extends Component {
  render() {
    return (
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <React.Fragment>
          <Navigation />
          <Container>
            <Row>
              <Col />
              <Col>
                <RouterOutler />
              </Col>
              <Col />
            </Row>
          </Container>

          <Footer />
        </React.Fragment>
      </div>
    );
  }
}

export default Layout;
