import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" title="Home">Home</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Brand>
          <Link to="/about-us" title="About Us">About Us</Link>
        </Navbar.Brand>
      </Navbar>
    )
  }
}

export default NavBar;
