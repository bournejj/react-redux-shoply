import React from 'react';
import { useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";

const ShoppingCart = () => {

    const cart = useSelector((store) => store.cartItems);

    return (
        <div>
        <h1>Shopping Cart</h1>
        <h2> {cart.length}</h2>
        {cart.map(item => (
            <h3>{item}</h3>
        ))}
         <Link to={`/`}>
             <h2>Back</h2>
              </Link>
        </div>
    )
}

export default ShoppingCart