import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navi() {
  return (
    <>
      <Navbar bg="#e9e9e9" fixed="top" variant="light">
        <Navbar.Brand color="black" href="#root">
          Atishay
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#About" variant="light">
            About
          </Nav.Link>
          <Nav.Link href="#Work">Work</Nav.Link>
          <Nav.Link href="mailto:atishay818@gmail.com">
            Say Hi!
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
