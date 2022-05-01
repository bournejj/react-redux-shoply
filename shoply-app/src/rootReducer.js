import React from 'react';
import data from './data.json'


const INITIAL_STATE =  {
    products: data.products,
  cartItems: []
  }

  
function rootReducer(state = INITIAL_STATE, action) {
switch(action.type) {
    case 'ADD_TO_CART':

       const name = action.payload
       
       const res =  { 
            ...state,
            cartItems: [...state.cartItems, name]
        }
       return res

       case 'DELETE_FROM_CART':
   
         let arr = state.cartItems.filter(function(item) {
            return item !== action.payload
        })
        

       return {
        ...state,
        cartItems: [...arr]
       }

       
  

   
        default:
            return {
                ...state
                
                
            }
}
}

export default rootReducer