import { LOGIN } from "./types.js";
import axios from "axios";

export const logUser = (user) => (dispatch) => {
  console.log("logged user...", user);
  dispatch({
    type: LOGIN,
    payload: user,
  });
};
