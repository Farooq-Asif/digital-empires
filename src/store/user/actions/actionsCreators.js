import { toast } from "react-toastify";
import * as actionTypes from "./actionTypes";
import axios from "axios";

const Url=process.env.REACT_APP_MAIN_URL
export const userLogin = (values,navigate) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_LOADING,
    payload: true,
  });
  axios
    .post(`${Url}/login`,values)
    .then((response) => {
      dispatch({
        type: actionTypes.USER_DATA,
        payload: response.data,
      });
      if(response.status===200){
      toast.success(response.data.message)

        navigate('/dashboard')
      }
      dispatch({
        type: actionTypes.SET_LOADING,
        payload: false,
      });
    })
    .catch((error) => {
      toast.error(error.response.data.message)
        dispatch({
          type: actionTypes.USER_DATA,
          payload: {},
        })
        dispatch({
          type: actionTypes.SET_LOADING,
          payload: false,
        });
    });
};


