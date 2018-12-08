import React from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const LoginComponent = ({ username, password, signin, onFieldChange }) => {
  return (
    <Container className="App">
      <h2>Sign In</h2>
      <Form className="form" onSubmit={e => signin(e)}>
        <Col>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={onFieldChange}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={onFieldChange}
            />
          </FormGroup>
        </Col>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};
export default LoginComponent;
