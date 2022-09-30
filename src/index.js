import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About'
import ApartmentDetail from './pages/ApartmentDetail';

import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Error from './pages/Error';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/apartment/:apartmentId">
            <ApartmentDetail />
          </Route>

          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
