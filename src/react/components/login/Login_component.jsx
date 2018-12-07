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

const LoginComponent = ({
  login,
  password,
  signin,
  onFieldChange
}) => {
  return (
    <Container className="App">
      <h2>Sign In</h2>
      <Form className="form" onSubmit={e => signin(e)}>
        <Col>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type="text"
              name="login"
              id="login"
              placeholder="login"
              value={login}
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