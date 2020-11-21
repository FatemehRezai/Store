import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './_pages/index';
import { Clothing } from "./_screens/clothing/_pages/index";
import { Factor } from "./_screens/factor/_pages/index";
import { Fruit } from "./_screens/fruit/_pages/index";
import { HomeAppliances } from "./_screens/homeAppliances/_pages/index";
import { Product } from './_pages/product.page';
import { MyChart, MySearchBar } from './_components/index'
import './App.css';

function App() {
  console.log("app");
  return (<Router>
    <Route path="/" exact component={Home} />
    <Route path="/factor" exact component={Factor} />
    <Route path="/fruit" exact component={Fruit} />
    <Route path="/clothing" exact component={Clothing} />
    <Route path="/home-appliances" exact component={HomeAppliances} />
    <Route path="/clothing/:id" component={Product} />
    <Route path="/home-appliances/:id" component={Product} />
    <Route path="/fruit/:id" target="_blank" component={Product} />
    {/* <Route path="/ProductInfo/:id"  component={ProductInfo}/>
    <Route path="/Factor" exact component={Factor}/> */}
    <Route path="/chart" exact component={MyChart} />
    <Route path="/search" exact component={MySearchBar} />
  </Router>);
}

export default App;
