import { toast } from "react-toastify";
import * as actionTypes from "./actionTypes";
import axios from "axios";
const Url = process.env.REACT_APP_MAIN_URL;
export const getTraffic = (location) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_LOADING,
    payload: true,
  });
  axios
    .get(`${Url}/traffic?page=${location}`)
    .then((response) => {
      dispatch({
        type: actionTypes.GET_TRAFFIC,
       
      });
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: false,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.GET_TRAFFIC,
    
      });
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: false,
      });
    });
};
