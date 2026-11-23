import React from 'react';

import { Outlet, Link } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';

function Layout() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about-us">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/other-info">
            Other Info
          </Nav.Link>
        </Nav>
      </Navbar>
      <br />
      <Outlet />
    </>
  );
}

export default Layout;
