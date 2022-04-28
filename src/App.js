import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/style.css';
import React from 'react';
import style from '../src/assets/styles/styles';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import Router from './routers/index';

function App() {
  return (
    <Provider store={store}>
      <div className="body" style={style.body}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
