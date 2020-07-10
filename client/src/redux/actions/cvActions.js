import { SET_CV_REQUEST, SET_CV_SUCCESS, SET_CV_FAIL } from "./actionTypes";
import axios from "axios";

export const setCvRequest = () => ({
  type: SET_CV_REQUEST,
});

export const setCvSuccess = (cv) => ({
  type: SET_CV_SUCCESS,
  cv,
});

export const setCvFail = (error) => ({
  type: SET_CV_FAIL,
  error,
});

export const setCv = () => {
  return async (dispatch) => {
    dispatch(setCvRequest());
    try {
      const cv = await axios.get("http://localhost:5000/cv");
      if (cv.data.Success) {
        const cvInfo = {
          ...cv.data.Success.data[0],
        };
        dispatch(setCvSuccess(cvInfo));
      } else {
        dispatch(setCvFail(cv.data.Error.message));
      }
    } catch (error) {
      dispatch(setCvFail(error));
    }
  };
};

export const updateCv = (updateCv, id) => {
  return async (dispatch) => {
    dispatch(setCvRequest());
    try {
      const cv = await axios.patch(`http://localhost:5000/cv/${id}`, updateCv);
      if (cv.data.Success) {
        const cvInfo = {
          ...cv.data.Success.data,
        };
        console.log(cvInfo, cv.data.Success);

        dispatch(setCvSuccess(cvInfo));
        return cvInfo;
      } else {
        dispatch(setCvFail(cv.data.Error.message));
        return cv.data.Error.message;
      }
    } catch (error) {
      dispatch(setCvFail(error));
      return error;
    }
  };
};
