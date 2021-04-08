import { LOGIN, ADDED_TO_CART } from "./types.js";

export const logUser = (user) => (dispatch) => {
  console.log("logged user...", user);
  dispatch({
    type: LOGIN,
    payload: user,
  });
};

export const addToCart = (product) => (dispatch) => {
  console.log('Product added to cart...', product);
  dispatch({
    type: ADDED_TO_CART,
    payload: product,
  });
};
