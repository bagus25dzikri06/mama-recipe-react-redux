import React from 'react';
import { Navbar, Collapse, NavbarText,
        Nav, NavItem, NavLink, Form } from 'reactstrap';
import style from '../assets/styles/styles';

const NavigationBar = () => {
    return (
      <Navbar
        style={style.transparentNavbar}
        expand="md"
      >
            <Collapse navbar>
              <Nav
                className="me-auto"
                navbar
              >
                <NavItem>
                  <NavLink href="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/add">
                    Add Recipe
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/321">
                    Profile
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
      </Navbar>
    );
};

export default NavigationBar;