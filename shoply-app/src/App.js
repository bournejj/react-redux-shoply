import logo from './logo.svg';
import './App.css';
import ItemList from './ItemList';
import ShoppingCart from './ShoppingCart'
import React from "react";
import { BrowserRouter,
  Route, Switch } from "react-router-dom";
  import ProductDetails from './ProductDetail';






function App() {
  return (
    <div className="App">
  
   
   
  <Switch>
          <Route exact path="/">
            <ItemList/>
  
    </Route>
    <Route exact path="/product/:name">
              <ProductDetails />
            </Route>
    <Route exact path="/cart">
              <ShoppingCart />
            </Route>
    </Switch>


  
    </div>
  );
}

export default App;
