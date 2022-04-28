import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import style from '../assets/styles/styles';
import '../assets/styles/style.css';

const Profile = () => {
  return (
    <div>
        <NavigationBar />
        <div style={style.profile}>
            <Row>
                <Col md="12"><img src="../images/Ellipse127.jpg" alt="user-profile" /></Col>
            </Row>
            <Row>
                <Col md="12"><b style={style.profileName}>Garneta Sharina</b></Col>
            </Row>
            <Row>
                <Col md="12" className="py-2">
                    <Button color="light" className="col-2" href="#">
                    Change Photo Profile
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col md="12" className="py-2">
                    <Button color="light" className="col-2" href="#">
                    Change Password
                    </Button>
                </Col>
            </Row>
            <div className="recipe-navbar">
                <div className="subnav">
                    <Button className="subnavbtn">
                        My Recipe
                        <img src="../images/dropdown-1.1s-200px.svg" alt="background"
                        width="20"
                        height="20"/>
                    </Button>
                    <div className="subnav-content">
                        <div className="box">
                            <a href="#">
                                <img src="../images/Rectangle327.jpg" className="card-img-top" alt="..." />
                                <div className="text">
                                    <p>Bomb Chicken</p>
                                </div>
                            </a>
                        </div>
                        <div className="box">
                            <a href="#">
                                <img src="../images/Rectangle328.jpg" className="card-img-top" alt="..." />
                                <div className="text">
                                    <p>Banana Pancake</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="subnav">
                    <Button className="subnavbtn">
                        Saved Recipe
                        <img src="../images/dropdown-1.1s-200px.svg" alt="background"
                        width="20"
                        height="20"/>
                    </Button>
                    <div className="subnav-content">
                        <div className="box">
                            <a href="#">
                                <img src="../images/Rectangle327.jpg" className="card-img-top" alt="..." />
                                <div className="text">
                                    <p>Bomb Chicken</p>
                                </div>
                            </a>
                        </div>
                        <div className="box">
                            <a href="#">
                                <img src="../images/Rectangle328.jpg" className="card-img-top" alt="..." />
                                <div className="text">
                                    <p>Banana Pancake</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="subnav">
                    <Button className="subnavbtn">
                        Liked Recipe
                        <img src="../images/dropdown-1.1s-200px.svg" alt="background"
                        width="20"
                        height="20"/>
                    </Button>
                    <div className="subnav-content">
                        <div className="box">
                            <a href="#">
                                <img src="../images/Rectangle327.jpg" className="card-img-top" alt="..." />
                                <div className="text">
                                    <p>Bomb Chicken</p>
                                </div>
                            </a>
                        </div>
                        <div className="box">
                            <a href="#">
                                <img src="../images/Rectangle328.jpg" className="card-img-top" alt="..." />
                                <div className="text">
                                    <p>Banana Pancake</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Profile;