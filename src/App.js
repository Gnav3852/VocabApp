import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './store'
import { Provider } from "react-redux";
import Landing from './components/Layout/landing'
import Vocab from './components/Vocab/vocab'
import Navbar2 from './components/Layout/Navbar'
import Product from './components/Products/product'
import QueryParamsExample from './components/Products/producttest/producttest'
// import Decstest from './components/Products/producttest/productdecstest'
import Dec from './components/Products/producttest/dec2'


import "./App.css";

const App = () => {


  return (
    //acessing store
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar2/>
          <Route exact path="/landing" component={Landing} />
          <section className="container">
        
            <Switch>
            <Route exact path="/vocab" component={Vocab} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/product2" component={QueryParamsExample} />
            <Route exact ="/?name=" component={Dec} />

            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
