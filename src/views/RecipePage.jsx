import React from 'react';
import { Col, FormGroup, Row, Button } from 'reactstrap';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import style from '../assets/styles/styles';
import '../assets/styles/style.css';

const Page = () => {
  return (
    <div>
      <NavigationBar />
      <div style={style.recipeTitle}>
          <h1 style={style.recipeName}>Loream Sandwich</h1>
          <img style={style.recipePict} src="../images/Rectangle313.jpg" alt="..." width="682" height="500"/>
      </div>
      <div className="recipe-desc text-start">
          <h5 className="title">Ingredients</h5>
          <div class="ingredients">
              <p>- 2 eggs</p>
              <p>- 2 tbsp mayonnaise</p>
              <p>- 3 slices bread</p>
              <p>- a little butter</p>
              <p>- ⅓ carton of cress</p>
              <p>- 2-3 slices of tomato or a lettuce leaf and a slice of ham or cheese</p>
              <p>- Crisps , to serve</p>
          </div>
          <h5 className="title">Video Step</h5>
          <div class="video-step">
              <div class="py-2">
                  <a class="btn btn-warning col-2" href="/step">
                      <img src="../images/play-button-svgrepo-com.svg" alt="background"
                      width="20"
                      height="20" />
                  </a>
              </div>
          </div>
          <FormGroup>
              <Row>
                  <Col lg="12" className="py-4">
                      <textarea name="comment" id="comment" class="form-control" cols="20" rows="10" placeholder="Comment :"></textarea>
                  </Col>
              </Row>
              <Row>
                  <Col md="12" className="text-center">
                      <Button color="warning" size="lg" className="btn-block col-2">Post</Button>
                  </Col>
              </Row>
          </FormGroup>
          <h5 className="title">Comment</h5>
          <Row className="py-4">
              <Col md="1">
                  <img src="../images/Ellipse128.jpg" alt="..." />
              </Col>
              <Col md="11">
                  <Row>
                      <Col md="12"><b>Ayudia</b></Col>
                  </Row>
                  <Row>
                      <Col md="12"><p>Nice recipe. simple and delicious, thankyou</p></Col>
                  </Row>
              </Col>
          </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Page;