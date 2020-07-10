import axios from "axios";
import {
  SET_AUTH_REQUEST,
  SET_AUTH_SUCCESS,
  SET_AUTH_FAIL,
} from "./actionTypes";

export const setAuthRequest = () => ({
  type: SET_AUTH_REQUEST,
});
export const setAuthSuccess = () => ({
  type: SET_AUTH_SUCCESS,
});
export const setAuthFail = (error) => ({
  type: SET_AUTH_FAIL,
  error,
});

export const getAuth = (key) => {
  return async (dispatch) => {
    dispatch(setAuthRequest());
    try {
      await axios.post("http://localhost:5000/secret_key", key);
      localStorage.setItem("auth", true);
      dispatch(setAuthSuccess());
      return false;
    } catch (error) {
      dispatch(setAuthFail(error.response.data.Error.message));
      return error.response.data.Error.message;
    }
  };
};
