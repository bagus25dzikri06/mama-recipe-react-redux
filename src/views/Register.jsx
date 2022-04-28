import React, { useState } from 'react';
import axios from 'axios';
import style from '../assets/styles/styles';
import '../assets/styles/style.css';
import { Row, Col, Form, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [ register, setRegister ] = useState({
      'name': '',
      'email': '',
      'phone_number': '',
      'password': ''
    });
    const onSubmit = (e) => {
      e.preventDefault();
      if (register.name === '' || register.email === '' || register.phone_number === '' || register.password === '') {
        alert('All data must be filled');
      } else if (register.password === '') {
        alert('Password must be filled');
      } else if (register.password.length < 8) {
        alert('Password length must be at least 8 characters');
      } else {
        const body = {
          name: register.name,
          email: register.email,
          phone_number: register.phone_number,
          password: register.password
        };
        axios.post('http://localhost:5000/users/register', body).then((response) => {
          alert(response.data.message);
          return navigate('/login');
        }).catch((err) => {
          console.log(err);
        });
      }
    };

    return (
      <div style={style.noneOverflow}>
         <Row>
           <Col md="5">
              <img style={style.imgFluid} src="../images/image15.jpg" alt="Sample photo" width="660" height="720"/>
              <img style={style.mamaRecipe} src="../images/Group697.svg" alt="mama-recipe-wp" width="150" height="150" />
           </Col>
           <Col md="7">
              <div style={style.register} className="text-black">
                <h3 style={style.account} className="text-center mb-1">Let's Get Started!</h3>
                <p className="text-center mb-1">Create new account to access all features</p>
                <Form onSubmit={(e) => onSubmit(e)}>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1cg">Name</label>
                        <Input 
                        type="text" 
                        id="name" 
                        onChange={(e) => setRegister({...register, name: e.target.value})}
                        class="form-control form-control-lg" 
                        placeholder="Name"/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example3cg">E-mail Address</label>
                        <Input 
                        type="email" 
                        id="email" 
                        onChange={(e) => setRegister({...register, email: e.target.value})}
                        class="form-control form-control-lg" 
                        placeholder="E-mail Address"/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cg">Phone Number</label>
                        <Input 
                        type="text" 
                        id="phone_number"
                        onChange={(e) => setRegister({...register, phone_number: e.target.value})} 
                        class="form-control form-control-lg" 
                        placeholder="Phone Number"/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cdg">New Password</label>
                        <Input 
                        type="password" 
                        id="password" 
                        onChange={(e) => setRegister({...register, password: e.target.value})}
                        class="form-control form-control-lg" 
                        placeholder="New Password"/>
                    </div>

                  <div class="form-check d-flex justify-content-center mb-2">
                      <Input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                      />
                      <label class="form-check-label" for="form2Example3g">
                          I agree all terms and conditions
                      </label>
                  </div>

                  <div class="d-flex justify-content-center">
                      <Button color="warning" size="lg" className="btn-block col-12">Register Account</Button>
                  </div>
          
                  <p class="text-center text-muted mt-3 mb-0">Already have an account? <a href="/login" class="fw-bold text-body"><u>Login here</u></a></p>
                </Form>
              </div>
           </Col>
         </Row>
      </div>
    );
};

export default Register;