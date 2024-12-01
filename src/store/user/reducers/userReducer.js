import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: {},
  token: null,
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case actionTypes.USER_DATA:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload || {},
      };
    default:
      return state;
  }
};

export default userReducer;
