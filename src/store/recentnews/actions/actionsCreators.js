import * as actionTypes from "./actionTypes";
import axios from "axios";


export const getRecentNews = (page, token) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_LOADING,
    payload: true,
  });
  axios
    .get(`https://digital-empires-db-production.up.railway.app/digitalempires/recentnews`)
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
