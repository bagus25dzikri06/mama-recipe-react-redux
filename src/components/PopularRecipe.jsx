import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button, Col, Container, Row, CardImgOverlay } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'; 
import { getPopularRecipeList } from '../redux/action/popularRecipe';
import axios from 'axios';
import style from '../assets/styles/styles';

const PopularRecipe = () => {
  const dispatch = useDispatch();
  const popularRecipe = useSelector(state => state.popularRecipe);

  useEffect(() => {
    dispatch(getPopularRecipeList());
  }, []);

  const getColumnsForRecipeRow = () => {
    return popularRecipe.data.data.map((e, i) => {
        return (<div>
            <Col key={i} className="py-2">
              <a href="/recipe/13">
                <Card className="box-shadow border-0">
                    <CardImg
                        alt="Card image cap"
                        src={`${process.env.REACT_APP_BACKEND}/recipes/image/${e.filename}`}
                        top
                        width="400" 
                        height="400"
                    />
                    <CardImgOverlay>
                        <CardTitle tag="h6" style={style.centerText} className="recipe-title card-footer">{ e.title }</CardTitle>
                    </CardImgOverlay>
                </Card>
              </a>
            </Col>
        </div>);
    });
  };

  return (
    <>
      <Container>
          <Row xs={1} md={3}>
          {
            popularRecipe.isLoading === true ? (
              <h1>Loading</h1>
            ):popularRecipe.isError === true ? (
              <h1>Error</h1>
            ):(
              getColumnsForRecipeRow()
            )
          }
          </Row>
      </Container>
    </>
  );
};

export default PopularRecipe;