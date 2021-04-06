import {combineReducers} from 'redux';
import fshopReducer from './fshopReducer.js';

export default combineReducers({
  cart: fshopReducer,
  user: fshopReducer,
});
