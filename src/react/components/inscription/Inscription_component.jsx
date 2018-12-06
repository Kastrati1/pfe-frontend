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

const InscriptionComponent = ({
  email,
  login,
  first_name,
  last_name,
  password,
  signup,
  onFieldChange
}) => {
  return (
    <Container className="App">
      <h2>Sign In</h2>
      <Form className="form" onSubmit={e => signup(e)}>
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
            <Label>First name</Label>
            <Input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="firstname"
              value={first_name}
              onChange={onFieldChange}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Last name</Label>
            <Input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="lastname"
              value={last_name}
              onChange={onFieldChange}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="myemail@email.com"
              value={email}
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
export default InscriptionComponent;
