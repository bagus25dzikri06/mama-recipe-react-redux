import React from 'react';
import { FormGroup, Row, Button, Input, Col } from 'reactstrap';
import NavigationBar from '../components/StepNavbar';
import Footer from '../components/Footer';
import style from '../assets/styles/styles';
import '../assets/styles/style.css';

const Add = () => {
  return (
    <div>
      <NavigationBar />
      <FormGroup>
        <Row>
            <div style={style.fileUpload}>
                <div style={style.imageUploadWrap}>
                    <Input style={style.fileUploadInput} type='file' />
                    <div class="drag-text">
                        <img src="../images/image.svg" alt="photos" />
                    </div>
                </div>
            </div>
        </Row>
        <Row className="justify-content-center">
            <div className="col-9 py-2">
                <Input type="text" class="form-control" id="inputRecipeTitle" placeholder="Title" />
            </div>
        </Row>
        <Row className="justify-content-center">
            <div className="col-lg-9 py-2">
                <textarea name="ingredients" id="ingredients" class="form-control" cols="20" rows="10" placeholder="Ingredients"></textarea> 
            </div>
        </Row>
        <Row className="justify-content-center">
            <div class="col-9 py-2">
                <Input type="text" class="form-control" id="inputRecipeVideoLink" placeholder="Video Link" />
            </div>
        </Row>
        <Row>
          <Col md="12" className="text-center py-2">
            <Button color="warning" size="lg" className="btn-block col-2">Post</Button>
          </Col>
        </Row>
      </FormGroup>
      <Footer />
    </div>
  );
};

export default Add;