import React from 'react';
import style from '../assets/styles/styles';
import '../assets/styles/style.css';
import { Row, Col, Form, Input, Button } from 'reactstrap';

const ForgotPassword = () => {
    return (
      <div>
         <Row>
           <Col md="6">
              <img style={style.imgFluid} src="../images/image15.jpg" alt="Sample photo" width="760" height="1387"/>
              <img style={style.mamaRecipe} src="../images/Group697.svg" alt="mama-recipe-wp" />
           </Col>
           <Col md="6">
              <div style={style.login} className="text-black">
                <h2 style={style.account} className="text-center mb-1">Forgot Password?</h2>
                <p className="text-center mb-1">We just need your registered e-mail address to send your password resend</p>
                <Form>
                  <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example3cg">E-mail Address</label>
                      <Input type="email" id="form3Example3cg" class="form-control form-control-lg" placeholder="E-mail Address" />
                  </div>

                  <div class="d-flex justify-content-center">
                      <Button color="warning" size="lg" className="btn-block col-6">Send E-mail</Button>
                  </div>
                </Form>
              </div>
           </Col>
         </Row>
      </div>
    );
};

export default ForgotPassword;