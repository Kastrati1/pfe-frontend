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
  username,
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
              name="username"
              id="username"
              placeholder="username"
              value={username}
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

    //
    //   <Container>
    //     <Row>
    //       <Col xs={{ span: 8, offset: 2 }} style={{ marginTop: "200px" }}>
    //         <Form onSubmit={signup}>
    //           <Form.Group as={Row} controlId="formHorizontalUsername">
    //             <Form.Label column sm={2}>
    //               Username
    //             </Form.Label>
    //             <Col sm={10}>
    //               <Form.Control
    //                 name="username"
    //                 type="text"
    //                 placeholder="Username"
    //                 value={username}
    //                 onChange={onFieldChange}
    //               />
    //             </Col>
    //           </Form.Group>
    //            <Form.Group as={Row} controlId="formHorizontalFirstName">
    //             <Form.Label column sm={2}>
    //               First Name
    //             </Form.Label>
    //             <Col sm={10}>
    //               <Form.Control
    //                 name="firstname"
    //                 type="text"
    //                 placeholder="First Name"
    //                 value={first_name}
    //                 onChange={onFieldChange}
    //               />
    //             </Col>
    //           </Form.Group>
    //           <Form.Group as={Row} controlId="formHorizontalLastName">
    //             <Form.Label column sm={2}>
    //               Last Name
    //             </Form.Label>
    //             <Col sm={10}>
    //               <Form.Control
    //                 name="lastname"
    //                 type="text"
    //                 placeholder="Last Name"
    //                 value={last_name}
    //                 onChange={onFieldChange}
    //               />
    //             </Col>
    //           </Form.Group>
    //           <Form.Group as={Row} controlId="formHorizontalEmail">
    //             <Form.Label column sm={2}>
    //               Email
    //             </Form.Label>
    //             <Col sm={10}>
    //               <Form.Control
    //                 name="email"
    //                 type="email"
    //                 placeholder="Email"
    //                 value={email}
    //                 onChange={onFieldChange}
    //               />
    //             </Col>
    //           </Form.Group>
    //           <Form.Group as={Row} controlId="formHorizontalPassword">
    //             <Form.Label column sm={2}>
    //               Password
    //             </Form.Label>
    //             <Col sm={10}>
    //               <Form.Control
    //                 name="password"
    //                 type="password"
    //                 placeholder="Password"
    //                 value={password}
    //                 onChange={onFieldChange}
    //               />
    //             </Col>
    //           </Form.Group> */}

    //           <Form.Group as={Row}>
    //             <Col sm={{ span: 10, offset: 2 }}>
    //               <Button type="submit">Sign up</Button>
    //             </Col>
    //           </Form.Group>
    //         </Form>
    //       </Col>
    //     </Row>
    //   </Container>
  );
};
export default InscriptionComponent;
