import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";

import Navbar from "react-bootstrap/Navbar";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text>
            <Form.Control
              style={{ width: 500 }}
              placeholder="Search a product"
              className="m-auto"
            />
          </Navbar.Text>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FaShoppingCart color="white" fontSize="25px" />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: "tomato" }}>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
