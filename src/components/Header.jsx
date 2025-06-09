import React from "react";
import { Navbar, Nav, Form, InputGroup, NavDropdown } from "react-bootstrap";
import { FaBell } from "react-icons/fa";

// Shared header component
function Header({ title }) {
  return (
    <Navbar bg="white" expand="lg" className="px-3 mb-4 shadow-sm">
      <Navbar.Brand className="fw-bold">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Form className="ms-auto d-flex">
          <InputGroup>
            <Form.Control type="search" placeholder="顧客名、案件名で検索..." />
          </InputGroup>
        </Form> */}
        <Nav className="ms-auto d-flex ms-3 align-items-center">
          <NavDropdown title="田中太郎" id="user-dropdown" align="end">
            <NavDropdown.Item>ログアウト</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
