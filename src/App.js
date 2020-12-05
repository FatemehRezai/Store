import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Dashboard } from './_pages/index';
import { Clothing } from "./_screens/clothing/_pages/index";
import { Factor } from "./_screens/factor/_pages/index";
import { Fruit } from "./_screens/fruit/_pages/index";
import { HomeAppliances } from "./_screens/homeAppliances/_pages/index";
import { Product } from './_pages/product.page';
import {localStorageSetter} from './_helpers/lsSetter'
import './_styles/App.css';

function App() {
  localStorageSetter();
  
  return (<Router>
    <Route path="/" exact component={Home} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/factor" exact component={Factor} />

    <Route path="/fruit" exact component={Fruit} />
    <Route path="/clothing" exact component={Clothing} />
    <Route path="/home-appliances" exact component={HomeAppliances} />

    <Route path="/clothing/:id" component={Product} />
    <Route path="/home-appliances/:id" component={Product} />
    <Route path="/fruit/:id" component={Product} />
  </Router>);
}

export default App;
