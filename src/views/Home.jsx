import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, Col, Row, Input, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import NavigationBar from '../components/Navbar';
import HomePage from '../components/HomePage';
import Footer from '../components/Footer';
import PopularRecipe from '../components/PopularRecipe';
import LatestRecipe from '../components/LatestRecipe';
import style from '../assets/styles/styles';
import '../assets/styles/style.css';

const Home = () => {
  const [recipes, setRecipes] = useState({
    'code': 0,
    'status': '',
    'data': []
  });
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
      axios.get(`${process.env.REACT_APP_BACKEND}/all`)
          .then((response) => {
            setRecipes(response.data);
          });
  }, []);

  const searchItems = (searchValue) => {
      setSearchInput(searchValue);
      if (searchInput !== '') {
          const filteredData = recipes.data.filter((item) => {
              return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
          });
          setFilteredResults(filteredData);
      }
      else{
          setFilteredResults(recipes.data);
      }
  };

  const getColumnsForRecipeRow = () => {
    return filteredResults.map((e, i) => {
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
    <div>
      <NavigationBar />
      <Row>
        <Col md="6" tag="h1" style={style.fiveTimesFontSize}>
          <div style={style.search}>
            <b>Discover Recipe & Delicious Food</b>
            <div className="form-group has-recipe-search mt-4">
                <img className="form-control-feedback" src="../images/314807_search_icon.svg" alt="background"
                width="30"
                height="30"/>
                <Input type="text" className="form-control mr-sm-2" 
                placeholder="Recipe Search"
                onChange={(e) => searchItems(e.target.value)} />
            </div>
          </div>
        </Col>
        <Col md="6">
            <img style={style.jumbotron} src="../images/Rectangle_2_(1).jpg" alt="background"
            width="220"
            height="560"/>
            <img className="lettuce" 
            src="../images/—Pngtree—lettuce_1175257_1.svg" alt="lettuce-wp" 
            width="284px"
            height="426px"/>
            <img className="food-recipe" 
            src="../images/—Pngtree—delicious food_568171_1.svg" alt="food-wp" 
            width="378px"
            height="370px" />
        </Col>
      </Row>
      <Row>
            {searchInput.length > 1 ? (
                      <>
                        <div className="d-flex align-items-center justify-content-center">
                          <Container style={style.filteredRecipeMargin} className="col-10">
                              <Row>
                                <Col md="12" tag="h5" style={style.searchResults}>
                                    <img src="../images/Rectangle8.jpg" height="95px" alt="icon" />
                                    &nbsp;
                                    Search Results
                                </Col>
                              </Row>
                              <Row xs={1} md={3}>
                                {getColumnsForRecipeRow()}
                              </Row>
                          </Container>
                        </div>
                      </>
                ) : (
                      <div>
                        <HomePage />
                      </div>
                    )
                }
      </Row>
      <Footer />
    </div>
  );
};

export default Home;