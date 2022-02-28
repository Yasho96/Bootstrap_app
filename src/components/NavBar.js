import React from "react";
import SarasaviImg from '../assets/sarasavi.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";

export const NavBar = () => {
  return (
    <ReactBootStrap.Navbar expand="lg"  bg="dark" variant="dark">
    <ReactBootStrap.Container fluid>
      <ReactBootStrap.Navbar.Brand href="#" className = "text-primary" >Sarasavi Bookshop</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
      <ReactBootStrap.Navbar.Collapse id="navbarScroll">
        <ReactBootStrap.Nav 
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '600px' }}
          navbarScroll
        >
          <ReactBootStrap.Nav.Link href="#action1">Home</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#action2">Products</ReactBootStrap.Nav.Link>
          <ReactBootStrap.NavDropdown title="Publications" id="navbarScrollingDropdown">
            <ReactBootStrap.NavDropdown.Item href="#action3">Sarasavi Publications</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action4">Sumitha Publications</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item href="#action5">
              External Publications
            </ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
          <ReactBootStrap.Nav.Link href="#" disabled>
            Products
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Form className="d-flex">
          <ReactBootStrap.FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <ReactBootStrap.Button variant="outline-primary">Search</ReactBootStrap.Button>
        </ReactBootStrap.Form>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Container>
  </ReactBootStrap.Navbar>
    
  );
};
