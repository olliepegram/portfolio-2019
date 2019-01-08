import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import me from './me.png';

class Menu extends Component  {
    render() {
        return (
          <div className={'menu-page'}>
            <Navbar collapseOnSelect bsClass={'navbar'}>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#brand"><img src={me} alt={'ye'} className={'logo'}></img></a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
              <Nav>
                <NavItem>
                  <a href="#brand">Ollie Pegram</a>
                </NavItem>
              </Nav>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#">
                    <a href="#brand">Work</a>
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    <a href="#brand">Contact</a>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        );
    }
}

export default Menu;