import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const Navigation = () => {
  return (
    <header className="masthead mb-auto">
      <div className="inner">
        <Navbar>
          <Navbar.Brand as={Link} to="/">
            <h3 className="masthead-brand"> Navbar</h3>
          </Navbar.Brand>

          <Nav className="nav nav-masthead justify-content-center">
            <Nav.Link className="nav-link" as={Link} to="/Home">
              Home
            </Nav.Link>

            <Nav.Link className="nav-link" as={Link} to="/Inscription">
              Inscription
            </Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/Login">
              Login
            </Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/UserProfile">
              My Profile
            </Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/Logout">
              Logout
            </Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/Items">
              items
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </header>
  );
};

export default Navigation;
