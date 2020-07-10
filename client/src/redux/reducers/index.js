import { combineReducers } from "redux";
import cv from "./cvReducer";
import auth from "./authReducer";

export default combineReducers({
  cv,
  auth,
});
