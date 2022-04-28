import React, { useState } from 'react';
import axios from 'axios';
import style from '../assets/styles/styles';
import '../assets/styles/style.css';
import { Row, Col, Form, Input, Button } from 'reactstrap';

const Login = () => {
    const [ login, setLogin ] = useState({
      'email': '',
      'password': ''
    });
    const onSubmit = (e) => {
      e.preventDefault();
      if (login.email === '' || login.password === '') {
        alert('All data must be filled');
      } else {
        const body = {
          email: login.email,
          password: login.password
        };
        axios.post('http://localhost:5000/users/login', body).then((response) => {
          alert(response.data.message);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data));
        }).catch((err) => {
          console.log(err);
        });
      }
    };
    
    return (
      <div>
         <Row>
           <Col md="5">
              <img style={style.imgFluid} src="../images/image15.jpg" alt="Sample photo" width="660" height="720" />
              <img style={style.mamaRecipe} src="../images/Group697.svg" alt="mama-recipe-wp" width="150" height="150" />
           </Col>
           <Col md="7">
              <div style={style.login} className="text-black">
                <h2 style={style.account} className="text-center mb-1">Welcome</h2>
                <p className="text-center mb-1">Log in into your eating account</p>
                <Form onSubmit={(e) => onSubmit(e)}>
                  <div className="form-outline mb-4">
                      <label className="form-label">E-mail Address</label>
                      <Input 
                        type="email" 
                        id="form3Example3cg" 
                        onChange={(e) => setLogin({...login, email: e.target.value})} 
                        className="form-control form-control-lg" 
                        placeholder="E-mail Address" 
                      />
                  </div>

                  <div className="form-outline mb-4">
                      <label className="form-label">Password</label>
                      <Input 
                        type="password" 
                        id="form3Example4cdg" 
                        onChange={(e) => setLogin({...login, password: e.target.value})} 
                        className="form-control form-control-lg" 
                        placeholder="Password" 
                      />
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                      <Input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                      />
                      <label className="form-check-label">
                          I agree all terms and conditions
                      </label>
                  </div>

                  <div className="d-flex justify-content-center">
                      <Button color="warning" size="lg" className="btn-block col-12">Log In</Button>
                  </div>

                  <div className="d-flex justify-content-end align-items-center py-2">
                      <a href="/forgot-password" className="text-body">Forgot password?</a>
                  </div>
          
                  <p className="text-center text-muted mt-5 mb-0">Don't have an account? <a href="/register" className="fw-bold text-body"><u>Sign Up</u></a></p>
                </Form>
              </div>
           </Col>
         </Row>
      </div>
    );
};

export default Login;