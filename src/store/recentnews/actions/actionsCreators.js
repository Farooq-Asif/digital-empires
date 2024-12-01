import { toast } from "react-toastify";
import * as actionTypes from "./actionTypes";
import axios from "axios";
const Url = process.env.REACT_APP_MAIN_URL;
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
      });
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: false,
      });
    });
};
export const delRecentNews = (id, token,setState) => (dispatch) => {
  const data = {
    newsId: id,
  };
  dispatch({
    type: actionTypes.SET_LOADING,
    payload: true,
  });
  axios
    .delete(`${Url}/recentnews`, {
      headers:{
        Authorization: `Bearer ${token}`,

      },
      data: data,
    })
    .then((response) => {
      toast.success(response.data.message)
      setState(prev=>!prev)
      dispatch({
        type: actionTypes.DEL_NEWS,
      });
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: false,
      });
    })
    .catch((error) => {
      toast.success(error.response.data.message)
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: false,
      });
    });
};
export const addRecentNews = (data, token,setState) => (dispatch) => {
 
  dispatch({
    type: actionTypes.SET_LOADING,
    payload: true,
  });
  axios
    .post(`${Url}/recentnews`,data, {
      headers:{
        Authorization: `Bearer ${token}`,
      },
    
    })
    .then((response) => {
      toast.success(response.data.message)
      setState((prev) => !prev);

      dispatch({
        type: actionTypes.ADD_NEWS,
      });
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: false,
      });
    })
    .catch((error) => {
      toast.success(error.response.data.message)
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: false,
      });
    });
};
export const contactUs = (data) => async (dispatch) => {
  try {
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
