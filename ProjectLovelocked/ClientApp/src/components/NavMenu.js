import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, Collapse, Container, HamburgerToggler } from 'mdbreact';


export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>ProjectLovelocked</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/thewedding'}> 
                <NavItem>
                    <Glyphicon glyph='info-sign' /> The Wedding
                </NavItem>
            </LinkContainer>
            <LinkContainer to={'/ourstory'}>
                <NavItem>
                    <Glyphicon glyph='heart' /> Our Story
                </NavItem>
            </LinkContainer>
            <LinkContainer to={'/directions'}>
                <NavItem>
                    <Glyphicon glyph='map-marker' /> Map + Directions
                </NavItem>
            </LinkContainer>
            <LinkContainer to={'/dresscode'}>
                <NavItem>
                    <Glyphicon glyph='sunglasses' /> Dress Code
                </NavItem>
            </LinkContainer>
            <LinkContainer to={'/registry'}>
                <NavItem>
                    <Glyphicon glyph='gift' /> Registry
                </NavItem>
            </LinkContainer>
            <LinkContainer to={'/rsvp'}>
                <NavItem>
                    <Glyphicon glyph='log-in' /> RSVP
                </NavItem>
            </LinkContainer>
            <LinkContainer to={'/bridalparty'}>
                <NavItem>
                    <Glyphicon glyph='knight' /> Bridal Party
                </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
