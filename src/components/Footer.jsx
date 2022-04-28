import React from 'react';
import { Card, CardTitle, CardText, 
         Col, Row, Nav, NavItem, NavLink } from 'reactstrap';
import style from '../assets/styles/styles';
import '../assets/styles/style.css';

const Footer = () => {
    return (
      <Card
        body
        className="text-center"
        color="warning"
        style={style.footer}
        inverse
      >
        <div style={style.footerMargin} className="dark-blue">
          <CardTitle tag="h5" style={style.threeTimesFontSize}>
            Eat, Cook, Repeat
          </CardTitle>
          <CardText style={style.footerText}>
            Share Your Best Recipe By Uploading Here!
          </CardText>
        </div>
        <Row>
            <Col md="3"></Col>
            <Col
              md="6"
            >
              <Nav
                className="justify-content-center"
              >
                <NavItem>
                  <NavLink href="#">
                    Product
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Company
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Learn More
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Get In Touch
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <b className="dark-blue">&copy; PijarCamp</b>
            </Col>
        </Row>
      </Card>
    );
};

export default Footer;