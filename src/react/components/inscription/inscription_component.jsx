import React from "react";
import {
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

    <main className="inner cover">
      <h1 className="cover-heading" >Sign-In</h1><br />
      <p className="lead">Welcome to our website, please fill-in the form to fully enjoy our services.</p><br />
      <Form className="inner cover" onSubmit={e => signup(e)}>
        <Col>
          <FormGroup>
            <div class="form-group row">
              <Label className="col-sm-2 col-form-label">Username</Label>
              <div className="col-sm-10">
                <Input className="form-control-plaintext"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  value={username}
                  onChange={onFieldChange}
                />
              </div>
            </div>
          </FormGroup>
        </Col>
        
        <Col>
          <FormGroup>
            <div class="form-group row">
              <Label className="col-sm-2 col-form-label">First name</Label>
              <div className="col-sm-10">
                <Input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="firstname"
                  value={first_name}
                  onChange={onFieldChange}
                />
              </div>
            </div>
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <div class="form-group row">
              <Label className="col-sm-2 col-form-label">Last name</Label>
              <div className="col-sm-10">
                <Input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="lastname"
                  value={last_name}
                  onChange={onFieldChange}
                />
              </div>
            </div>
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <div class="form-group row">
              <Label className="col-sm-2 col-form-label">Email</Label>
              <div className="col-sm-10">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="myemail@email.com"
                  value={email}
                  onChange={onFieldChange}
                />
              </div>
            </div>
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <div class="form-group row">
              <Label className="col-sm-2 col-form-label">Password</Label>
              <div className="col-sm-10">
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  value={password}
                  onChange={onFieldChange}
                />
              </div>
            </div>
          </FormGroup>
        </Col>
        
        <div className="text-center" style={{marginTop: "5%"}}>
          <Button type="submit">Submit</Button>
        </div>

      </Form>
    </main>
  );
};
export default InscriptionComponent;
