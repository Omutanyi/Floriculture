import {
  LOGIN
} from './actions/types.js';

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
    default:
      return state;
  }
}
