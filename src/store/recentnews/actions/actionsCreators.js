import * as actionTypes from "./actionTypes";
import axios from "axios";

const Url=process.env.REACT_APP_MAIN_URL
export const getRecentNews = (page, token) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_LOADING,
    payload: true,
  });
  axios
    .get(`${Url}/recentnews`)
    .then((response) => {
      dispatch({
        type: actionTypes.GET_NEWS,
        payload: response.data,
      });
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: false,
      });
    })
    .catch((error) => {
        dispatch({
          type: actionTypes.GET_NEWS,
          payload: [],
        })
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: false,
      });
    });
};
export const contactUs = (data) => async (dispatch) => {
  try {
    // Start loading
    dispatch({
      type: actionTypes.SET_LOADING,
      payload: true,
    });

    await axios.post(`${Url}/contactus`, data);

    dispatch({
      type: actionTypes.SUBMIT_CONTACT_FORM,
    });
  } catch (error) {
    console.error("Error submitting contact form:", error.message);
  } finally {
    dispatch({
      type: actionTypes.SET_LOADING,
      payload: false,
    });
  }
};

