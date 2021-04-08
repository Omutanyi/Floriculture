import { LOGIN, ADDED_TO_CART } from "/home/javier/final_Project/fc/floriculture/src/lib/actions/types.js";

const initialState = {
  user: [],
  cart: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case ADDED_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
}
