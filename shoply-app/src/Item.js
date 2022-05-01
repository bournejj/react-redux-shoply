import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TO_CART } from './actionTypes';
import { DELETE_FROM_CART} from './actionTypes';
import { addToCart, deleteFromCart } from "./actions";
import { Link } from "react-router-dom";

const Item = ({name, id, description, price, img}) => {
    
    const dispatch = useDispatch();
    const cart = useSelector((store) => store.cartItems);
    

    const handleAdd = () => dispatch(addToCart(name))
    const handleDelete = () => dispatch(deleteFromCart(name))
  
    
  

return (
    <div>
    <h1>{name}</h1>
    <Link to={`/product/${name}`}>
             <h2>click</h2>
              </Link>
    <button onClick={handleAdd}>Add to cart</button>
    <button onClick={handleDelete}>Remove from cart</button>
    </div>

)

}

export default Item;