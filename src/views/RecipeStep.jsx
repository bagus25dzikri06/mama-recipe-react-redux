import React from 'react';
import { Col, Row } from 'reactstrap';
import NavigationBar from '../components/StepNavbar';
import Footer from '../components/Footer';
import style from '../assets/styles/styles';
import '../assets/styles/style.css';

const Step = () => {
  return (
    <div>
      <NavigationBar />
      <img style={style.recipeStepJumbotron} src="../images/Rectangle334.jpg" alt="background" width="60" height="1350"/>
      <div className="d-flex bd-highlight mb-3 py-4">
          <div className="me-auto p-2 bd-highlight step">
            <iframe class="iframe" width="620" height="320" src="https://www.youtube.com/embed/-VE9otk1ptM"></iframe>
            <p class="steps">Beef Steak with Curry Sauce - [Step 4]</p>
            <p class="steps">Cut the condiment and then mix it</p>
            <p class="steps-timeline">3 months ago</p>
          </div>
          <div className="p-2 bd-highlight">
            <div style={style.next} className="py-2">Next</div>
            <Row>
              <Col md="12"  className="text-end">
                <iframe class="iframe" width="419" height="260" src="https://www.youtube.com/embed/g83Urraf9iQ"></iframe>
                <p class="next-steps">Beef Steak with Curry Sauce - [Step 5]</p>
                <p class="next-steps">Saute condiments together until turn brown</p>
                <p class="next-steps-timeline">HahaLohana - 3 months ago</p>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <iframe class="iframe" width="419" height="260" src="https://www.youtube.com/embed/QpoVYoMzImo"></iframe>
                <p class="next-steps">Beef Steak with Curry Sauce - [Step 6]</p>
                <p class="next-steps">Roast beef until it’s medium rare</p>
                <p class="next-steps-timeline">HahaLohana - 3 months ago</p>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <iframe class="iframe" width="419" height="260" src="https://www.youtube.com/embed/QpoVYoMzImo"></iframe>
                <p class="next-steps">Beef Steak with Curry Sauce - [Step 6]</p>
                <p class="next-steps">Roast beef until it’s medium rare</p>
                <p class="next-steps-timeline">HahaLohana - 3 months ago</p>
              </Col>
            </Row>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Step;