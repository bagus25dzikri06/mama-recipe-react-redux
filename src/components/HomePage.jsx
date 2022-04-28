import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Col, Row, Input, Button, Form } from 'reactstrap';
import PopularRecipe from '../components/PopularRecipe';
import LatestRecipe from '../components/LatestRecipe';
import style from '../assets/styles/styles';
import '../assets/styles/style.css';

const HomePage = () => {
  return (
    <div>
      <Row>
        <Col md="12" tag="h5" style={style.search}>
            <img src="../images/Rectangle8.jpg" height="95px" alt="icon" />
            &nbsp;
            Popular For You!
        </Col>
      </Row>
      <PopularRecipe />
      <Row>
        <Col md="12" tag="h5" style={style.search}>
            <img src="../images/Rectangle8.jpg" height="95px" alt="icon" />
            &nbsp;
            New Recipe 
        </Col>
      </Row>
      <Row className='new-recipe'>
        <Col md="6" className='new-recipe-bg'>
            <img src="../images/Rectangle_2.jpg" alt="new-recipe-bg" width="214" height="320" />
            <img className="new-food-recipe" src="../images/Rectangle_313.jpg" alt="new-food-wp" width="380" height="380" />
        </Col>
        <Col md="6">
            <h4 style={style.fiveTimesFontSize}>Healthy Bone Broth Ramen (Quick & Easy)</h4>
            <hr width="17%" />
            <p className="text-start">Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
            <Button color="warning" className="col-3" href="#">
              <div style={style.white}>Learn More</div>
            </Button>
        </Col>
      </Row>
      <Row>
        <Col className="me-auto" md="12" tag="h5" style={style.search}>
            <img src="../images/Rectangle8.jpg" height="95px" alt="icon" />
            &nbsp;
            Popular Recipe 
        </Col>
      </Row>
      <LatestRecipe />
    </div>
  );
};

export default HomePage;