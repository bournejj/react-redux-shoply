import { ADD_TO_CART, DELETE_FROM_CART} from "./actionTypes";

export function addToCart(name) {
  return {
    type: ADD_TO_CART,
    payload: name

  };
}

export function deleteFromCart(name) {
  return {
    type: DELETE_FROM_CART,
    payload: name
  };
}
