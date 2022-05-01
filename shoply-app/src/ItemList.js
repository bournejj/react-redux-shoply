import React from 'react';
import data from './data.json';
import { useSelector, shallowEqual } from "react-redux";
import Item from './Item'
import { Link } from "react-router-dom";

const ItemList = () => {

    const products = useSelector((store) => store.products, shallowEqual);
    const cart = useSelector((store) => store.cartItems, shallowEqual);
    const productCards = Object.values(products).map(item => (

      <Item name={item.name} id={item.id} description={item.description} price={item.price} img={item.image_url}/>
      

    ) )
    

  
    return (
      <div>
       
        <h4>Look at all of our beautiful products!</h4>
        <div className="row">{productCards}</div>
        <h2> {cart.length}</h2>
        <Link to={`/cart`}>
             <h2>Cart</h2>
              </Link>
      </div>
    );
  
}

export default ItemList;